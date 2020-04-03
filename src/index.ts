/* eslint-disable no-console */
import 'dotenv/config';
import app from './app';

const port = process.env.PORT || 3333;

app.listen(port);
console.log(`App is running on port: ${port}`);
