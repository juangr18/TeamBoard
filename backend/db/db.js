import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB: Is OK.");
  } catch (e) {
    console.log("Error connecting to MongoDB \n", e);
  }
};

export default { dbConnection };