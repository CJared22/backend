import express from "express";
import bookRoutes from './routes/bookRoute.js';
import studentRoute from './routes/studentRoute.js';

const app = express();

app.use('/book', bookRoutes);
app.use('/student', studentRoute);

try {
    const port =3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);        
    });
} catch (e) {
    console.log(e);
}