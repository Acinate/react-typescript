import path = require('path');
import express = require('express');
import webpack = require('webpack');
import webpackDevConfig from '../../webpack.dev';
import webpackProdConfig from '../../webpack.prod';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const NODE_ENV = process.env.NODE_ENV;

// selected webpack config
const webpackConfig = (NODE_ENV === "production") ? webpackProdConfig : webpackDevConfig;

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
app.get('*', (req, res) => res.sendFile(staticPath + 'index.html'));

// app start up
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
