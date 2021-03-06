import express from "express";
import cors from "cors";
import db from "./db/db.js";
import roleRoutes from "./routes/routeRole.js";
import userRoutes from "./routes/routeUser.js";
import dotenv from "dotenv";
import taskRoutes from "./routes/routeTask.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/role", roleRoutes);
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port " + process.env.PORT)
);
db.dbConnection();
