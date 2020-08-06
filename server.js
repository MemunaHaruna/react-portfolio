const path = require('path');
const express = require('express');
const webpack = require('webpack');
const logger = require('morgan');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dotenv = require('dotenv');

dotenv.config();

const webpackConfigProd = require('./webpack.config.prod.js');

// const webpackConfigDev = require('./webpack.config.dev.js');
// const environment = 'production';

// const webpackConfig = webpackConfigProd;

const compiler = webpack(webpackConfigProd);

const app = express();

// Log requests to the console.
app.use(logger('dev'));

console.log(process.env.NODE_ENV, 'ENVVV');

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackMiddleware(compiler, {
    publicPath: webpackConfigProd.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve(`${__dirname}/public`)));

// Setup a default catch-all route that sends back a
// welcome message

app.get('*', (request, response) => {
  response.sendFile(path.resolve(`${__dirname}/public/index.html`));
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('My portfolio listening on port 3000!\n');
});
