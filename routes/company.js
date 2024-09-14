import express from "express";
import Company from "../models/company.js";
const router = express.Router();

router.post("/register", (req, res) => {
  const { companyName } = req.body;

  if (!companyName) {
    return res.status(400).json({ msg: "Please enter a company name" });
  }

  //check for already existing company
  
  const newCompany = new Company({ companyName });
  newCompany.save();

  res.json({ msg: "Company registered successfully" });
});

export default router;
