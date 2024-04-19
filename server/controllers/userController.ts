import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import generateToken from '../utils/generateToken';
import { IRequest } from '../interfaces/IRequest';
import logger from '../utils/logger';

//@dest  Register  user
//#route  POST /api/users/
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User Already Exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
    logger('New user registered', 'info');
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//@dest  Auth user and set token
//#route  POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
    logger('A user logged in', 'info');
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//@dest  Logout user
//#route  POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(),
  });
  res.status(200).json({ message: 'User Logged out' });
});

//@dest  Get user profile
//#route  GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req: IRequest, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

//@dest  Update user profile
//#route  PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req: IRequest, res) => {
  const { name, email, password } = req.body;
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;

    if (password) {
      user.password = password;
    }

    const updatedProfile = await user.save();

    res.status(200).json({
      _id: updatedProfile._id,
      name: updatedProfile.name,
      email: updatedProfile.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
