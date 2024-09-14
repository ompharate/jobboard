import mongoose from "mongoose";
const companySchema = mongoose.Schema({
  companyName: String,
});

const Company = mongoose.model("Company", companySchema);
export default Company;
