import express from "express";
import ejs from "ejs";
import { connectToDb } from "./utils/config.js";
import userRouter from "./routes/user.js";
import companyRouter from "./routes/company.js";
import jobRouter from "./routes/job.js";
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

app.get("/", (req, res) => res.json({ msg: "hello word" }));

app.use("/auth", userRouter);
app.use("/company",companyRouter);
app.use("/job",jobRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
