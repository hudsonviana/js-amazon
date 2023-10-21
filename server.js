const express = require('express');
const path = require('path');

const app = express();

// app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'src', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => console.log(`Server running at port 5000`));

// npm i -D live-server
