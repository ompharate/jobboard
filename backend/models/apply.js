import mongoose from "mongoose";
const appliedJobSchema = mongoose.Schema({
  userId: String,
  jobId: String,
});

const AppliedJob = mongoose.model("AppliedJob", appliedJobSchema);
export default AppliedJob;