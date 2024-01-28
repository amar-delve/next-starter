// pages/api/user/verifyuser.js
import clientPromise from '../../../../lib/db';
import verifyToken from '../../../../middleware/auth';
const { ObjectId } = require('mongodb');

export default async function handler(req, res, next) {
  if (req.method === 'GET') {
    verifyToken(req, res, async () => {
      try {
        if (!ObjectId.isValid(req.user.userId)) {
          return res.status(400).json({ error: 'Invalid userId format' });
        }

        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        const collection = db.collection('users');

        const user = await collection.findOne({ _id: new ObjectId(req.user.userId) });

        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
