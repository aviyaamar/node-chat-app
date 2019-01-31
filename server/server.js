const path = require('path');
const express = require('express');

const publcPath = path.join(__dirname, '../public');

var app = express();
app.use(express.static(publcPath));

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
