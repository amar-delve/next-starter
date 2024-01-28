import clientPromise from '../../../../lib/db';
import { ObjectId } from 'mongodb';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';

const registrationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    try {
      // Validate input data
      await registrationSchema.validate({ username, email, password }, { abortEarly: false });
    } catch (validationError) {
      const errors = validationError.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      return res.status(400).json({ errors });
    }

    try {
      const client = await clientPromise;
      const db = client.db(process.env.DB_NAME || 'authapp');
      const collection = db.collection('users');

      const existingUser = await collection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await collection.insertOne({ username, email, password: hashedPassword });

      res.status(201).json({ code: 201, message: 'Registered successfully', data: result });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
