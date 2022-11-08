import { Router } from "express";
import { getAllLogs, getLogById, postNewLog, updateLog } from "../controllers/logs_controller.js";

const router = Router();

router.get("/health",(req,res)=>{
    res.sendStatus(200);
});

router.get('/logs',getAllLogs);

router.post('/logs',postNewLog);

router.get('/logs/:id',getLogById);

router.put('/logs/:id',updateLog);

export default router;