import Express from 'express';
import cors from 'cors';
import routers from './src/routes/index.js';

const app = Express();
const PORT = 3000;

app.use(cors());
app.use(Express.json());
    
app.use(routers);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});