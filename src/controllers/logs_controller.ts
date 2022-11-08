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
    const {id} = req.params;
    const result = findOne(Number(id));
    if(!result){
        res.sendStatus(404);
    }
    return res.send(result).status(200);
}

function postNewLog(req:Request,res:Response){
    const newLog = req.body as Log;

    const insertedLog = insertOne(newLog);
    return res.send(`Log inserted with id: ${insertedLog.id}`).status(200);
}

function updateLog(req:Request,res:Response){
    const {id} = req.params;
    const status = req.body as Status;
    const log = findOne(Number(id));

    if(!log){
        res.sendStatus(404)
    }

    const updated = updateOne(log,status);

    res.send(`Updated log with id: ${updated.id}`).status(200);
}

function deleteLog(req:Request, res: Response){
    const {id} = req.params;
    deleteOne(Number(id));
    return res.sendStatus(200);
}

export { getAllLogs, getLogById, postNewLog, updateLog, deleteLog }
