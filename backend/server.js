import express from 'express';
import dbConnect from "./database/dbConnect.js";
import dotenv from 'dotenv';


const app = express();
dotenv.config();
app.use(express.json());




app.get('/', (req, res) => {
    res.send('Hello World');
});



app.listen(3000, () => {
    dbConnect();
    console.log('Server is running ');
}   );