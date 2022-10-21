const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello World, you are using the root route');
});
app.get('/test', (req, res) => {
  res.send('Hello World, you are using the test route ');
});

app.listen(port, () => {
  console.log('Example app listening on port ${port}');
});
