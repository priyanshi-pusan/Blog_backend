import User from "../model/user.js";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.ststus(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
   return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exist!Login instead" });
  }
  const user = new user({
    name,
    email,
    password,
  });

  try{
    await user.save();
  }
  catch{
        return console.log(err);
  }
  return res.status(201).json({user})
}
