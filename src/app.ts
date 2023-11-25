import express, { Application } from 'express';

import cors from 'cors';
import { userRoutes } from './routes/user.route';

const app: Application = express();

// middleware

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'the server run successfully!',
  });
});

export default app;
