import { Router } from "express";
import { deleteLog, getAllLogs, getLogById, postNewLog, updateLog } from "../controllers/logs_controller.js";
import validateLog from "../middlewares/log_validation.js";

const router = Router();

router.get("/health",(req,res)=>{
    res.sendStatus(200);
});

router.get('/logs',getAllLogs);

router.post('/logs',postNewLog);

router.get('/logs/:id',validateLog,getLogById);

router.put('/logs/:id',validateLog,updateLog);

router.delete('/logs/:id',validateLog,deleteLog);

export default router;