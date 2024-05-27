import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; // For hashing passwords
import jwt from 'jsonwebtoken'; // For generating JWT tokens

const prisma = new PrismaClient();
const users = express.Router();

users.use(express.json());
users.use(express.urlencoded({ extended: true }));

// Route for user login
users.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await prisma.user.findUnique({
      where: { name: username },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare hashed password with the provided password
    const passwordMatch = await bcrypt.compare(password, user.password || '');

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.user_id, username: user.name },
      'your-secret-key', // Replace with your own secret key
      { expiresIn: '1h' } // Token expiration time
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
});

// Other routes for retrieving user data, orders, and cart items...

export default users;
