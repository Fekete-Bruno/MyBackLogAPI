import { Router } from "express";
import { getAllLogs } from "../controllers/logs_controller.js";

const router = Router();

router.get("/health",(req,res)=>{
    res.sendStatus(200);
});

router.get('/logs',getAllLogs);

export default router;