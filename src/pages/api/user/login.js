import clientPromise from '../../../../lib/db';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginSchema = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Validate input data
      await loginSchema.validate({ email, password }, { abortEarly: false });

      const client = await clientPromise;
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection('users');

      // Check if the user exists
      const user = await collection.findOne({ email });

      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Check if the password matches
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id, email: user.email , username: user.username }, process.env.JWT_SECRET, {
        expiresIn: '1h', 
      });

      res.status(200).json({ message: 'Login successful', user: { email: user.email, username: user.username , token:token } });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
