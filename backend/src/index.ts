import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let latestData = "huh";

app.post('/api/create-answer', (req: Request, res: Response) => {
  const { data } = req.body;
  if (!data){res.status(400).json({ error: 'Missing "data"' })
   return;};

  latestData = data;
  res.json({ message: 'Data received', data });
});

app.get('/api/get-latest-answer', (req: Request, res: Response) => {
  res.json({ data: latestData });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
