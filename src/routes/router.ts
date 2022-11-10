import { Router } from "express";
import { deleteLog, getAllLogs, getLogById, postNewLog, updateLog } from "../controllers/logs_controller.js";
import logExists from "../middlewares/log_validation.js";
import validateLog from "../middlewares/post_log_validation.js"

const router = Router();

router.get("/health",(req,res)=>{
    res.sendStatus(200);
});

router.get('/logs',getAllLogs);

router.post('/logs',validateLog,postNewLog);

router.get('/logs/:id',logExists,getLogById);

router.put('/logs/:id',logExists,updateLog);

router.delete('/logs/:id',logExists,deleteLog);

export default router;