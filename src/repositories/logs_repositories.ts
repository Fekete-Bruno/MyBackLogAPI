import { connection } from "../database/database.js";
import { Log,LogEntity } from "../protocols/Log.js";
import { Status } from "../protocols/Status.js";
import{ QueryResult } from 'pg';

async function findMany():Promise<QueryResult<LogEntity>>{
    return connection.query(`
        SELECT * FROM logs;
    `);
}

function findOne(id: string):Promise<QueryResult<LogEntity>>{
    return connection.query(`
        SELECT * FROM logs WHERE id=$1;
    `,[id]);
}

async function insertOne(log: Log):Promise<QueryResult<LogEntity>>{
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

async function deleteOne(id:string){
    return connection.query(`
        DELETE FROM logs WHERE id=$1;
    `,[id]);
}

export { findMany, insertOne, findOne, updateOne, deleteOne }