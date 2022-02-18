import user from "../models/user.js";
const existingUser = async (req, res, next) => {
  if (!req.body.email)
    return res.status(400).send({ menssage: "Incomplete data." });
  const existingEmail = await user.findOne({ email: req.body.email });
  if (existingEmail)
    return res
      .status(400)
      .send({ menssage: "The user is already registered on DataBase." });
  next();
};

export default { existingUser };
