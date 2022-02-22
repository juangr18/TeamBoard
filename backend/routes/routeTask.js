import express from "express";
import taskController from "../controllers/taskController.js";
import taskValidate from "../middleware/taskValidate.js";

//http://localhost:3001/api/task
const router = express.Router();

router.get("/listTask/:name?", taskController.listTask);
router.post(
  "/createTask",
  taskValidate.validateTask,
  taskController.registerTask
);
router.put(
  "/updateState",
  taskValidate.validateStatus,
  taskController.changeStateTask
);
router.put(
  "/updateTask",
  taskValidate.validateUpdate,
  taskController.updateTask
);
router.delete("/deleteTask/:_id", taskController.deleteTask);

export default router;
