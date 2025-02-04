import express from 'express';
import dbConnect from "./database/dbConnect.js";
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

const app = express();
dotenv.config();
app.use(express.json());




app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/signup', authRoutes);



app.listen(3000, () => {
    dbConnect();
    console.log('Server is running ');
}   );