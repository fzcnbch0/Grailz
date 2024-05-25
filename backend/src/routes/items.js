import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const items = express.Router();
items.use(express.json());
items.use(express.urlencoded({ extended: true }));

items.get('/', async (req, res) => {
    const { name, minPrice, maxPrice } = req.query;
    
    const filterConditions = {
        where: {},
    };

    if (name) {
        filterConditions.where.name = {
            contains: name,
        };
    }

    if (minPrice) {
        filterConditions.where.price = {
            gte: parseFloat(minPrice),
        };
    }

    if (maxPrice) {
        filterConditions.where.price = {
            lte: parseFloat(maxPrice),
        };
    }

    try {
        const items = await prisma.item.findMany(filterConditions);
        res.json(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to get a specific item by ID
items.get('/:id', async (req, res) => {
    const itemId = parseInt(req.params.id);
    try {
        const item = await prisma.item.findUnique({
            where: { item_id: itemId },
        });
        if (item) {
            res.json(item);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});
items.get('/category/:department', async (req, res) => {
    const { department } = req.params;
    const { name, minPrice, maxPrice } = req.query;
  
    try {
      const items = await prisma.item.findMany({
        where: {
          item_category: {
            department: department,
          },
          name: { contains: name || '' },
          price: { gte: minPrice ? parseFloat(minPrice) : undefined },
          price: { lte: maxPrice ? parseFloat(maxPrice) : undefined },
        },
        include: {
          item_category: true,
          measurements: true,
          offer: true,
          user_cart: true,
          user_orders: true,
        },
      });
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching items.' });
    }
  });
  

export default items;
