import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import database  from './config/database';


// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });


// Connect to database
database.authenticate()
.then(()=> console.log('database connected..'))
.catch(err => console.log('Error:', err));


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { 
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});