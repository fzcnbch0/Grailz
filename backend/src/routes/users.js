import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const users = express.Router();

users.use(express.json());
users.use(express.urlencoded({ extended: true }));


users.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to get a specific user by ID
users.get('/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const user = await prisma.user.findUnique({
            where: { user_id: userId },
        });
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to get all orders for a specific user
users.get('/:id/orders', async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const orders = await prisma.userOrder.findMany({
            where: { user_id: userId },
            include: { item: true },
        });
        res.json(orders);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to get items in the cart for a specific user
users.get('/:id/cart', async (req, res) => {
    const userId = parseInt(req.params.id);
  
    try {
      const cartItems = await prisma.user_cart.findMany({
        where: { user_id: userId },
        include: { 
          item: {
            select: {
              item_id: true,
              name: true,
              description: true,
              price: true,
              item_category: {
                select: {
                  size: true,
                  designer: true,
                }
              },
              offer: {
                select: {
                  image_path: true,
                }
              }
            }
          }
        },
      });
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cart items' });
    }
  });
  


export default users;