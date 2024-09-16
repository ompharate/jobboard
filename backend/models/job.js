import mongoose from "mongoose";
const jobSchema = mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  salary: Number,
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
