import express, {Request, Response} from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {ENVIRONMENT, PORT} from '../util/secrets';
// Import API Routes
import * as home from './controllers/home';

const fs = require('fs');

const app = express();

// Configure Webpack Dev Server (with React Hot-Reload)
if (ENVIRONMENT === 'development') {
    const webpackConfig = require('../../webpack.dev.js');
    const compiler = webpack(webpackConfig);

    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            stats: "errors-warnings"
        })
    );
    app.use(webpackHotMiddleware(compiler));
}

// Define API Routes
app.get('/api/', home.get);

// Configure Static Files (Production)
app.use(express.static("./"));

// Serve React Static Files (Production)
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "/index.html"))
});

// Start server
app.listen(PORT, () => {
    console.log(`Express started on http://localhost:${PORT}/ in ${ENVIRONMENT} mode.`);
});

export default app;
module.exports = app;