const validateTask = async (req, res, next) => {
  return !req.body.name || !req.body.description || !req.body.imageUrl
    ? res.status(400).send({ message: "Incomplete data" })
    : next();
};

const validateStatus = async (req, res, next) => {
  return req.body.taskStatus === "to-do" ||
    req.body.taskStatus === "in-progress" ||
    req.body.taskStatus === "finish"
    ? next()
    : res.status(400).send({ message: "Incomplete data." });
};

const validateUpdate = async (req, res, next) => {
  return !req.body.name || !req.body.imageUrl
    ? res.status(400).send({ message: "Incomplete data" })
    : next();
};

export default { validateTask, validateStatus, validateUpdate };
