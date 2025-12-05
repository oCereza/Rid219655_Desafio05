import { Router } from 'express';
import bookRoutes from './book.routes.js';

const routers = Router();

routers.get('/', (req, res) => {
  res.send('Welcome to the Biblioteca API');
});

routers.use('/livros', bookRoutes);

export default routers;