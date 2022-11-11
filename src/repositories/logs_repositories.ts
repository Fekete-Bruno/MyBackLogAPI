import logs from "../mock_database/data.js"
import { connection } from "../database/database.js";
import { Log } from "../protocols/Log.js";
import { Status } from "../protocols/Status.js";
import{ QueryResult } from 'pg';

async function findMany():Promise<QueryResult<Log>>{
    return connection.query(`
        SELECT * FROM logs
    `);
}

function findOne(id: number){
    return logs.find((log)=>log.id===id)
}

function insertOne(log: Log){
    log.id = logs[logs.length-1].id + 1;
    log.status = 'wishlist';
    logs.push(log);
    return(log);
}

function updateOne(log: Log,status: Status){
    log.status = status.status;
    log.review = status.review;
    log.rating = status.rating;
}

function deleteOne(log: Log){
    logs.splice(logs.indexOf(log),1);
}

export { findMany, insertOne, findOne, updateOne, deleteOne }