import mongoose from 'mongoose';
import { makeId } from '..';

const Group = mongoose.model('Group', makeId({
  isPrivate: Boolean,
  members: [mongoose.Schema.Types.ObjectId],
  travels: [mongoose.Schema.Types.ObjectId],
}));

export default Group;
