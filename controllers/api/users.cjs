const User = require('../../models/user.cjs')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user)

    res.json(token)
  } catch (err) {
    res.status(400).json(err)
  }
}

const logIn = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) throw new Error();
    res.json(createJWT(user)) 
  } catch {
    res.status(400).json('Bad Credentials')
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
  create,
  logIn
};