import { Request, Response } from "express";
import { findMany } from "../repositories/logs_repositories.js"
import { Log } from "../protocols/Log.js";

function getAllLogs(req:Request,res:Response){
    const result = findMany();
    res.send(result);
}

export { getAllLogs }
