import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
})

const PORT = process.env.port || 3333;

app.listen(PORT, () => console.log(`App listen in port ${PORT}`));
