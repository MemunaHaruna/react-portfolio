const path = require('path');
const express = require('express');
const webpack = require('webpack');
const logger = require('morgan');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dotenv = require('dotenv');

dotenv.config();

const webpackConfigProd = require('./webpack.prod.config.js');

// const webpackConfigDev = require('./webpack.config.dev.js');
// const environment = 'production';

// const webpackConfig = webpackConfigProd;

const compiler = webpack(webpackConfigProd);

const app = express();

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

const PORT = process.env.PORT || 5000;

app.set('port', PORT);

// Log requests to the console.
app.use(logger('dev'));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackMiddleware(compiler, {
    publicPath: webpackConfigProd.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

// Setup a default catch-all route that sends back a
// welcome message

app.get('*', (request, response) => {
  // response.sendFile(path.resolve(`${__dirname}/public/index.html`));
  response.sendFile(HTML_FILE);
});

// Serve the files on port 3000.
app.listen(PORT, () => {
  console.log(`\nApplication is running in ${app.get('env')} on port ${PORT} `);
});
