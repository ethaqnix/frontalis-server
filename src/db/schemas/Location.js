import mongoose from 'mongoose';
import { makeId } from '..';

const Location = mongoose.model('Location', makeId({
  address: String,
}));

export default Location;
