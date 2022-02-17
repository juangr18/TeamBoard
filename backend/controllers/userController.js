import user from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.password)
    return res.status(400).send({ menssage: "Incomplete data." });
  const passHash = await bcrypt.hash(req.body.password, 10);
  let schema = new user({
    name: req.body.name,
    email: req.body.email,
    password: passHash,
    role: req.body.role,
    dbStatus: true,
  });

  const result = await schema.save();
  if (!result)
    return res.status(500).send({ menssage: "Failed to register user." });
  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          role: result.role,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(500).send({ menssage: "Register error." });
  }
};

const listUsers = async (req, res) => {
  let users = await user.find().populate("role").exec();
  if (users.length === 0)
    return res.status(400).send({ menssage: "No search results" });
  return res.status(200).send({ users });
};

export default { registerUser, listUsers };
