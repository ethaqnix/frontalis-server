import mongoose from 'mongoose';
import { makeId } from '..';

const Travel = mongoose.model('Travel', makeId({
  driver: mongoose.Schema.Types.ObjectId,
  locations: [mongoose.Schema.Types.ObjectId],
  members: [mongoose.Schema.Types.ObjectId],
  startAt: Date,
  endAt: Date,
}));

export default Travel;
