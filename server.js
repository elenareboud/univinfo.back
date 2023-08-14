import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './BACK-END/router.js';

dotenv.config();

const server = express();
const port = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());
server.use(router);

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});