import { Router } from 'express';
import bookController from '../controllers/book.controller.js';

const bookRoutes = Router();

bookRoutes.get('/', bookController.getAllBooksController);
bookRoutes.get('/:id', bookController.getBookByIdController);
bookRoutes.post('/', bookController.createBookController);
bookRoutes.put('/:id', bookController.updateBookController);
bookRoutes.delete('/:id', bookController.deleteBookController);

export default bookRoutes; 