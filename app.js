const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.