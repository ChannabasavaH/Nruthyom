import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import Register from './models/registrationSchema.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());
const MongoDBURL = process.env.ATLASDB_URL;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../Frontend/dist')));



app.post('/api/register', async (req, res) => {
    try {
        const { collegeName, teamName, category, phoneNo, altPhoneNo, transactionId } = req.body;
        const newRegisterUser = new Register({ collegeName, teamName, category, phoneNo, altPhoneNo, transactionId });
        console.log(newRegisterUser);
        await newRegisterUser.save();
        res.status(200).send("New user registered successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

mongoose.connect(MongoDBURL)
    .then(() => {
        console.log("connected to database");
        app.listen('8080', () => {
            console.log("app is listening on 8080");
        });
    })
    .catch((error) => {
        console.log(error);
    });
