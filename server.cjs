const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure near the top
require('dotenv').config();

// Connect to the database
require('./config/database.cjs');

const app = express();

app.use(logger('dev'));
app.use(express.json());

//vite uses the "dist" directory intead of "build"
// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express app running on http://localhost/:${port}`);
});

//Define other route here, before default
app.use('/api/users', require('./routes/api/users.cjs'));
//This needs to be the last page
// All unrecognized requests get served the home page
// i.e the React app application
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
