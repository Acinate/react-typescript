import express, {Request, Response} from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {ENVIRONMENT, PORT} from '../util/secrets';
// Import API Routes
import * as home from './controllers/home';

const app = express();

// Configure Middleware
if (ENVIRONMENT == 'development') {
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
app.use(express.static("dist"));

// Define API Routes
app.get('/api/', home.get);

// Serve React Static Files
app.get('/', (req: Request, res: Response) => {
    if (ENVIRONMENT === 'development') {
        res.sendFile(path.resolve(__dirname, "/dist/index.html"))
    } else {
        res.sendFile(path.resolve(__dirname, "/client/index.html"))
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Express started on http://localhost:${PORT}/ in ${ENVIRONMENT} mode.`);
});

export default app;
module.exports = app;