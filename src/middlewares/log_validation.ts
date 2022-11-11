import { NextFunction, Request, Response } from "express";
import { findOne } from "../repositories/logs_repositories.js";
import errorHandler from "./error_handler.js";

export default async function logExists(req: Request,res: Response,next:NextFunction){
    const {id} = req.params;
    if(isNaN(Number(id))) return res.sendStatus(422);
    try {
        const promise = await findOne(id);
        if(promise.rowCount===0){
            return res.sendStatus(404);
        }
        res.locals.id = id;
        res.locals.log = promise.rows[0];
        next();
    } catch (error) {
        return errorHandler(error,res);
    }
}