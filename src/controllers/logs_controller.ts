import { Request, Response } from "express";
import { findMany, insertOne, findOne } from "../repositories/logs_repositories.js"
import { Log } from "../protocols/Log.js";
import { Status } from "../protocols/Status.js";
import { updateOne } from "../repositories/logs_repositories.js";
import { deleteOne } from "../repositories/logs_repositories.js";

function getAllLogs(req:Request,res:Response){
    const result = findMany();
    res.send(result);
}

function getLogById(req:Request,res:Response){
    const {log} = res.locals
    return res.send(log).status(200);
}

function postNewLog(req:Request,res:Response){
    const newLog = res.locals.log as Log;

    const insertedLog = insertOne(newLog);
    return res.send(`Log inserted with id: ${insertedLog.id}`).status(200);
}

function updateLog(req:Request,res:Response){
    
    const status = req.body as Status;
    const {log} = res.locals
    updateOne(log,status);

    return res.send(`Updated log with id: ${log.id}`).status(200);
}

function deleteLog(req:Request, res: Response){
    const {log} = res.locals
    deleteOne(log);
    return res.sendStatus(200);
}

export { getAllLogs, getLogById, postNewLog, updateLog, deleteLog }
