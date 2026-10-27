import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/', bookController.fetchAllBooks);
bookRoutes.post('/', bookController.createBook);
bookRoutes.put('/:id', bookController.editBook);

export default bookRoutes;