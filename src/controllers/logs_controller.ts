import { Request, Response } from "express";
import { findMany, insertOne, findOne, findQuery } from "../repositories/logs_repositories.js"
import { Log } from "../protocols/Log.js";
import { updateOne } from "../repositories/logs_repositories.js";
import { deleteOne } from "../repositories/logs_repositories.js";
import errorHandler from "../middlewares/error_handler.js";
import { QueryLog } from "../protocols/QueryLog.js";

async function getAllLogs(req:Request,res:Response){
    if(req.query){
        return getQuery(req.query,res);
    }
    try {
        const result = await findMany();  
        return res.send(result.rows);
    } catch (error) {
        return(errorHandler(error,res));
    }
}

function getLogById(req:Request,res:Response){
    const log = res.locals.log as Log;
    return res.send(log).status(200);
}

async function postNewLog(req:Request,res:Response){
    const newLog = res.locals.log as Log;
    try {
        await insertOne(newLog);
        return res.sendStatus(201);
    } catch (error) {
        return(errorHandler(error,res));
    }
}

async function updateLog(req:Request,res:Response){
    
    const newLog = req.body as Log;
    const id = res.locals.id;
    try {
    updateOne(newLog,id);
    return res.send(`Updated log with id: ${id}`).status(200);   
    } catch (error) {
        return errorHandler(error,res);
    }
}

async function deleteLog(req:Request, res: Response){
    const id = res.locals.id;
    try {
        deleteOne(id);
        return res.sendStatus(200);   
    } catch (error) {
        return errorHandler(error,res);
    }
}

async function getQuery(query:QueryLog,res:Response){
    try {
        const result = await findQuery(query);
        return res.send(result.rows).status(200);   
    } catch (error) {
        return errorHandler(error,res);
    }
}

export { getAllLogs, getLogById, postNewLog, updateLog, deleteLog }
