import logs from "../mock_database/data.js"
import { connection } from "../database/database.js";
import { Log } from "../protocols/Log.js";
import { Status } from "../protocols/Status.js";
import{ QueryResult } from 'pg';

async function findMany():Promise<QueryResult<Log>>{
    return connection.query(`
        SELECT * FROM logs;
    `);
}

function findOne(id: number):Promise<QueryResult<Log>>{
    return connection.query(`
        SELECT * FROM logs WHERE id=$1;
    `,[id]);
}

async function insertOne(log: Log):Promise<QueryResult<any>>{
    const { name,image,platform,genre,status,rating,review } = log;
    return connection.query(`
    INSERT INTO 
	    logs(name,image,platform,genre,rating,review) 
    VALUES($1,$2,$3,$4,$5,$6);
    `,[name, image, platform,genre,rating,review]);
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