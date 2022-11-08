import { NextFunction, Request, Response } from "express";
import { findOne } from "../repositories/logs_repositories.js";

export default function validateLog(req: Request,res: Response,next:NextFunction){
    const {id} = req.params;
    const log = findOne(Number(id));
    if(!log){
        return res.sendStatus(404);
    }

    res.locals.log = log;
    next();
}