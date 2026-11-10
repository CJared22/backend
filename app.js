
import express from "express";
import bookRoutes from './routes/bookRoute.js';
import studentRoute from './routes/studentRoute.js';

const app = express();

// IMPORTANT: Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/book', bookRoutes);
app.use('/student', studentRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
});
