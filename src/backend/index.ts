import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from '../../webpack.dev';
import webpackProdConfig from '../../webpack.prod';

import path = require('path');
import express = require('express');
import webpack = require('webpack');

let NODE_ENV;

if (process.env.NODE_ENV !== null) {
  NODE_ENV = process.env.NODE_ENV;
}

// environment variables
let webpackConfig;

if (NODE_ENV === 'production') {
  webpackConfig = webpackProdConfig;
} else {
  webpackConfig = webpackDevConfig;
}

const compiler = webpack(webpackConfig);
const app = express();
const port = 8080;

const staticPath = path.join(__dirname, '../../dist/');

// webpack hmr
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

// static assets
app.use(express.static('./dist'));

// main route
app.get('*', (req, res) => res.sendFile(`${staticPath}index.html`));

// app start up
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
