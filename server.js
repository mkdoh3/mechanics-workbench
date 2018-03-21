const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/test', (req, res) => {
  res.send({ greetings: 'yo' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));