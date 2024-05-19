import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import items from './routes/items.js';
import offers from './routes/offers.js';
import users from './routes/users.js';


const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Grailz');
});

app.use('/items',items);
app.use('/offers', offers);
app.use('/users', users)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
