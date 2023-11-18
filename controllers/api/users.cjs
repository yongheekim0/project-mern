const User = require('../../models/user.cjs')
const jwt = require('jsonwebtoken')


const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user)

    res.json(token)
  } catch (err) {
    res.status(400).json(err)
  }
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = {
  create
};