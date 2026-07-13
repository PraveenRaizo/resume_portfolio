import { Router } from "express";
import healthRouter from "./health.js";

const router = Router() as any;

router.use(healthRouter);

export default router;
