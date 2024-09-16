import AppliedJob from "../models/apply.js";
import Job from "../models/job.js";

const newJob = (req, res) => {
  const { title, company, location, description } = req.body;

  if (!title || !company || !location || !description) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const newJob = new Job({ title, company, location, description });
  newJob.save();

  res.json({ msg: "job created successfully" });
};

const allJobs = async (req, res) => {
  const allJobs = await Job.find({});
  return res.render("jobs", { allJobs });
};

const applyForJob = async (req, res) => {
  const { jobId, userId } = req.body;
  const job = await Job.findById(jobId);
  if (!job) return res.status(404).json({ msg: "Job not found" });
  await AppliedJob.create({
    jobId,
    userId,
  });
  res.json({ msg: "Application submitted successfully" });
};

export { newJob, allJobs, applyForJob };
