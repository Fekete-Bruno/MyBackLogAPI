import logs from "../mock_database/data.js"
import { Log } from "../protocols/Log.js";

function findMany(){
    return logs;
}

function insertOne(log: Log){
    log.id = logs.length + 1;
    log.status = 'wishlist';
    logs.push(log);
    return(log);
}

export { findMany, insertOne }