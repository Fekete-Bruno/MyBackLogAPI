import { Log } from "../protocols/Log";
import { logSchema } from "../schemas/logs_schema.js";

export default function validateSchema(log: Log){
    const { error } = logSchema.validate(log,{abortEarly:false});
    if(error){
        const errorArray = [];
        error.details.map((err)=>errorArray.push(err.message));
        return errorArray;
    }
    return false;
}