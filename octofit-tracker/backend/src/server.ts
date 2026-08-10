import express from 'express';
import db from './config/database.js';
import apiRouter from './routes.js';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const host = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-tracker-backend' });
});

app.listen(port, () => {
  console.log(`Backend listening on ${host}`);
  console.log('MongoDB connection status:', db.readyState === 1 ? 'connected' : 'connecting');
});
