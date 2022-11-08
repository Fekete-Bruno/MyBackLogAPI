import { Router } from "express";
import { getAllLogs, postNewLog } from "../controllers/logs_controller.js";

const router = Router();

router.get("/health",(req,res)=>{
    res.sendStatus(200);
});

router.get('/logs',getAllLogs);

router.post('/logs',postNewLog);

export default router;