import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './router.js';

dotenv.config();

const server = express();
//on definie la var d'environnement "port" via var global 
//"process " fournie par NODE et sa propriété "env"
const port = process.env.PORT || 8081;

server.use(express.json());
server.use(cors());
server.use(router);

server.get('/', (req, res) => {
  res.json('Hello, Heroku !')
})

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});