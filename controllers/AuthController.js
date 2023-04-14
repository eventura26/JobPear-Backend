const { User } = require("../models");
const middleware = require("../middleware");

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true,
    });
    if (
      user &&
      (await middleware.comparePassword(
        user.password,
        req.body.password
      ))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
      };
      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res
      .status(401)
      .send({ status: "Error", msg: "Incorrect Email or Password" });
  } catch (error) {
    throw error;
  }
};

const Register = async (req, res) => {
  try {
    const { first_name, last_name, location, email, password} = req.body;
    let hashedPassword = await middleware.hashPassword(password);
    const user = await User.create({ first_name, last_name, location, email, password: hashedPassword });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findByPk(req.params.user_id);
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.password_digest,
        oldPassword
      ))
    ) {
      let password_digest = await middleware.hashPassword(newPassword);
      await user.update({ password_digest });
      return res.send({ status: "Ok", payload: user });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {}
};

const CheckSession = async (req, res) => {
  const { payload } = res.locals;
  res.send(payload);
};

const DeleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    await user.destroy();

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession,
  DeleteUser
};
