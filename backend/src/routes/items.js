import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const items = express.Router();

items.use(express.json());
items.use(express.urlencoded({ extended: true }));


items.get('/', async (req, res) => {
    try {
        const items = await prisma.item.findMany();
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
export default items;