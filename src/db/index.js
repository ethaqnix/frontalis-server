import mongoose from 'mongoose';

export const makeId = (obj) => {
  const schema = new mongoose.Schema(obj);
  schema.virtual('id').get(function getId() {
  return this._id.toHexString(); // eslint-disable-line
  });

  // Ensure virtual fields are serialised.
  schema.set('toJSON', {
    virtuals: true,
  });

  schema.set('toObject', {
    virtuals: true,
  });
  return schema;
};


export default async () => mongoose.connect(
  'mongodb://localhost:27017/frontalis',
  { useNewUrlParser: true },
);
