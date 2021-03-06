import express from "express";
import roleController from "../controllers/roleController.js";

const router = express.Router();
//http://localhost:3001/api/role/registerRole
router.post("/registerRole", roleController.registerRole);
router.get("/listRole", roleController.listRole);

export default router;
