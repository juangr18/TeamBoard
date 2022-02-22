import express from "express";
import userController from "../controllers/userController.js";
import userValidate from "../middleware/userValidate.js";
import roleValidate from "../middleware/roleValidate.js";

const router = express.Router();
//http://localhost:3001/api/user/registerRole
router.post(
  "/registerUser",
  userValidate.existingUser,
  roleValidate.existingRole,
  userController.registerUser
);
router.get("/listUser/:name?", userController.listUsers);
router.get("/listUserAdmin/:name?", userController.listUsersAdmin);
router.post("/login", userController.login);
router.put("/updateUserAdmin", userController.updateUserAdmin);
router.put("/deleteUser/:_id", userController.deleteUser);

export default router;
