import express from "express";
import cors from 'cors';

import bookRoutes from './routes/bookRoute.js';
import studentRoute from './routes/studentRoute.js';

let corsOptions = {
    origin: 'http://localhost:5173',
};


const app = express();

// IMPORTANT: Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/book', bookRoutes);
app.use('/student', studentRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
});
