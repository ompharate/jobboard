import mongoose from "mongoose";
export async function connectToDb() {
  await mongoose
    .connect("mongodb+srv://om:pharate11@cluster0.btaiygi.mongodb.net")
    .then(() => {
      console.log("Mongoose connection established");
    });
}