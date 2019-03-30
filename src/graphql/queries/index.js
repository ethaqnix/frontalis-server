import User from './User';
import Location from './Location';
import Travel from './Travel';
import Group from './Group';

export default {
  ...User,
  ...Location,
  ...Group,
  ...Travel,
};
