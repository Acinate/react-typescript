import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync(__dirname + '/.env')) {
    dotenv.config({path: __dirname + '/.env'});
} else if (fs.existsSync(__dirname + '/.env.example')) {
    console.warn('Using .example.env file to supply environmental variables.')
    dotenv.config({path: __dirname + '/.env.example'});
} else {
    console.error('No .env file. Create a .env file in the same directory as this file.')
    process.exit(1);
}

export const ENVIRONMENT = process.env.NODE_ENV;
const production = ENVIRONMENT === 'production';

export const PORT = process.env['PORT'];
if (!PORT) {
    console.error('Environmental Variable: PORT not found, please check .env files.');
    process.exit(1);
}
