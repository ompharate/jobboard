import express from "express";
import { allJobs, applyForJob, newJob } from "../controllers/jobController.js";
const router = express.Router();

router.get("/", allJobs);
router.post("/post-job", newJob);
router.post("/apply-job",applyForJob);

export default router;