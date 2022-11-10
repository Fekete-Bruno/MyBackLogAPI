import { NextFunction,Request,Response } from "express";
import { Log } from '../protocols/Log.js'
import validateSchema from "./schema_validation.js";

export default function validateLog(req:Request,res:Response,next:NextFunction){
    const log = req.body as Log;
    const error = validateSchema(log);
    if(error){
        return res.send(error).status(422);
    }

    res.locals.log = log as Log;
    next();
}