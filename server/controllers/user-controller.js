const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {

  async createUser({ body }, res) {

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(body.password, salt)

    const userToInsert = {
      first: body.first,
      last: body.last,
      description: body.description,
      skillLevel: body.skillLevel,
      email: body.email,
      password: password,
      username: body.username,
      salt: salt
    }

    const user = await User.create(userToInsert);

    if (!user) {
      return res.status(400).json({ message: 'Unable to create user' });
    }

    res.status(200).json({ _id: user._id, email: user.email });
  },

  async getAllUsers(req, res) {
    const allUsers = await User.find({});

    if (!allUsers) {
      return res.status(400).json({ message: 'No users found' });
    }

    res.status(200).json(allUsers);
  },

  async getUserById({ params }, res) {
    const user = await User.findById(params._id);

    if (!user) {
      return res.status(400).json({ message: 'No user found by that id' });
    }

    res.status(200).json(user);
  },

  async authUser({ body }, res) {

    // Find the user by the email address
    const user = await User.findOne({
      email: body.email
    });

    if (!user) {
      return res.status(400).json({ message: 'Unable to authenticate user' });
    }

    // We want to verify the password
    const isValid = await bcrypt.compare(body.password, user.password)

    if (!isValid) {
      return res.status(400).json({ message: 'Unable to authenticate user' });
    }

    const token = jwt.sign({
      email: user.email,
      id: user._id
    }, process.env.JWT_SECRET)

    res.header('auth-token', token).json({ error: null, data: { user, token } })
  },

  async verifyUser(req, res) {
    const token = req.headers['auth-token']

    if (!token) {
      return res.status(401).json({ msg: 'authorized' })
    }

    const isVerified = jwt.verify(token, process.env.JWT_SECRET)

    if (!isVerified) {
      return res.status(401).json({ msg: 'authorized' })
    }

    const user = await User.findById(isVerified.id)

    if (!user) {
      return res.status(401).json({ msg: 'authorized' })
    }

    return res.status(200).json({ _id: user._id, email: user.email })
  },
  // add favorite to favorite list
  async addFavorite({ params, body }, res) {
    const user = await User.findOneAndUpdate(
      { _id: params._id, },
      { $addToSet: { favorites: body.favorite } }, { runValidators: true, new: true })
    if (!user) {
      return res.status(400).json({ message: 'No users found' });
    }
    res.status(200).json(user);
  },

  // delete favorite from favorite list
  async deleteFavorite({ params, body }, res) {
    const user = await User.findOneAndUpdate(
      { _id: params._id },
      { $pull: { favorites: body.favorite } },
      { runValidators: true, new: true }
    )
    if (!user) {
      return res.status(400).json(user);
    }
    res.status(200).json(user);
  },
};