const path = require('path');
const express = require('express');
const webpack = require('webpack');
const logger = require('morgan');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dotenv = require('dotenv');

dotenv.config();

const webpackConfigDev = require('./webpack.config.js');
const webpackConfigProd = require('./webpack.config.prod.js');

const environment = process.env.NODE_ENV || 'production';

const webpackConfig = webpackConfigProd;

// environment === 'production' ? webpackConfigProd : webpackConfigDev;

const compiler = webpack(webpackConfig);

const app = express();

// Log requests to the console.
app.use(logger('dev'));

console.log(process.env.NODE_ENV, 'ENVVV');
console.log(webpackConfig, 'webpackConfig');

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
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
