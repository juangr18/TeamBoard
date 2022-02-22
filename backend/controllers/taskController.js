import task from "../models/task.js";

const registerTask = async (req, res) => {
  let schema = new task({
    user: req.body.user,
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    taskStatus: "to-do",
  });
  const taskCreate = await schema.save();
  return taskCreate
    ? res.status(200).send({ message: "Create task successful" })
    : res.status(500).send({ message: "Error creating task." });
};

const listTask = async (req, res) => {
  let tasks = await task
    .find({
      name: new RegExp(req.params["name"]),
    })
    .populate("user")
    .exec();
  return tasks.length === 0
    ? res.status(500).send({ message: "No search results." })
    : res.status(200).send({ tasks });
};

const changeStateTask = async (req, res) => {
  const taskState = await task.findByIdAndUpdate(req.body._id, {
    taskStatus: req.body.taskStatus,
  });
  return taskState
    ? res.status(200).send({ message: "Status changed task" })
    : res.status(500).send({ message: "Error changing task status" });
};

const updateTask = async (req, res) => {
  const taskEdit = await task.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
  });
  return taskEdit
    ? res.status(200).send({ message: "Updated task" })
    : res.status(500).send({ message: "Error updating task" });
};

const deleteTask = async (req, res) => {
  if (!req.params["_id"])
    return res.status(400).send({ message: "Incomplete data" });
  const delTask = await task.findByIdAndDelete(req.params["_id"]);
  return delTask
    ? res.status(200).send({ message: "Deleted task" })
    : res.status(500).send({ message: "Error deleting task" });
};
export default {
  registerTask,
  listTask,
  changeStateTask,
  updateTask,
  deleteTask,
};
