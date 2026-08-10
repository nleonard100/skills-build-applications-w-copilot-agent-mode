import express from 'express';
import db from './config/database.js';

const app = express();
const port = parseInt(process.env.PORT ?? '8000', 10);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-tracker-backend' });
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
  console.log('MongoDB connection status:', db.readyState === 1 ? 'connected' : 'connecting');
});
