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
  return res.json(allJobs);
};

export { newJob, allJobs };
