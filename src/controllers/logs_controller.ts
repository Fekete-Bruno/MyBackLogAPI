import { Request, Response } from "express";
import { findMany, insertOne } from "../repositories/logs_repositories.js"
import { Log } from "../protocols/Log.js";

function getAllLogs(req:Request,res:Response){
    const result = findMany();
    res.send(result);
}

function postNewLog(req:Request,res:Response){
    const newLog = req.body as Log;

    const insertedLog = insertOne(newLog);
    return res.send(`Log inserted with id: ${insertedLog.id}`);
}

export { getAllLogs, postNewLog }
