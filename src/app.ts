import express from 'express';

import cors from 'cors';
const app = express();

// middleware

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'the server run successfully!',
  });
});

export default app;
