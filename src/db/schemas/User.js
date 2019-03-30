import mongoose from 'mongoose';
import { makeId } from '..';

const User = mongoose.model('User', makeId({
  name: String,
  email: String,
  password: String,
}));

export default User;
