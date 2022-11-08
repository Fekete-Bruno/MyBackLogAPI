import express from 'express';
const server = express();

server.get("/health",(req,res)=>{
    res.sendStatus(200);
});

server.listen(4000,()=>{console.log('Listening on port 4000...')});