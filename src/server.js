const express = require('express'),
  app = express(),
  path = require('path');

app.use('/static', express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'))
});

app.listen(3000, () => {
  console.log('app listen on port 3000')
});