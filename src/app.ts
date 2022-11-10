import "./setup.js";
import express from 'express';
import router from './routes/router.js';

const server = express();
server.use(express.json());
server.use(router);

server.listen(4000,()=>{console.log('Listening on port 4000...')});