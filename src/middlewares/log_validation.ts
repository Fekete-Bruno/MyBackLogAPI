import { NextFunction, Request, Response } from "express";
import { findOne } from "../repositories/logs_repositories.js";
import validateSchema from "./schema_validation.js";

export default function logExists(req: Request,res: Response,next:NextFunction){
    const {id} = req.params;
    const log = findOne(Number(id));
    if(!log){
        return res.sendStatus(404);
    }

    if(!validateSchema(log)){
        return res.sendStatus(422);
    }

    res.locals.log = log;
    next();
}