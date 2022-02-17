import role from "../models/role.js";

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data" });
  let roleSchema = new role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });
  let result = await roleSchema.save();
  if (!result) return res.status(500).send({ menssage: "Failed to register" });
  res.status(200).send({ result });
};

export default { registerRole };
