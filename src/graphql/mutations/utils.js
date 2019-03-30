export const transform = (doc) => {
  const tmp = doc;
  delete tmp.id;
  delete tmp._id; // eslint-disable-line
  return tmp;
};
