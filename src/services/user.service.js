import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
//register user
export const registration = async (body) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(body.password, salt);
  body.password = hash;
  const data = await User.create(body);
  return data;
};

//login user
export const login = async (body) => {
  const data = await User.findOne({ email: body.email });
  const payload = {
    _id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    role: data.role
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: '100H'
  });
  const validatePassword = await bcrypt.compare(body.password, data.password);
  if (validatePassword) {
    return token;
  } else {
    throw new Error('Invalid user');
  }
};
