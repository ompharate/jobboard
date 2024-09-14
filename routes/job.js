import express from "express";
import { allJobs, newJob } from "../controllers/jobController.js";
const router = express.Router();

router.get("/", allJobs);
router.post("/post-job", newJob);

export default router;