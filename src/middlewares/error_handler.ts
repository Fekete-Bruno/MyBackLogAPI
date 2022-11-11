import { Response } from "express";

export default function errorHandler(error,res:Response){
    console.error(error);
    return res.status(500).send(error);
}