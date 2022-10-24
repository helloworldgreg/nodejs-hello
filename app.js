const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello World, you are using the MAIN route');
});
app.get('/test', (req, res) => {
  res.send('Hello World, you are using the TEST route ');
});
app.get('/cloudfront', (req, res) => {
  let r = (Math.random() + 1).toString(36).substring(7);
  res.send('Hello World, you are using the CLOUDFRONT route ' + r);
  res.set('Cache-Control', 'max-age=120');
});

app.listen(port, () => {
  console.log('Example app listening on port ${port}');
});
