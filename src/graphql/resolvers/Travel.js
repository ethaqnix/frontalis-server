import User from '../../db/schemas/User';
import Location from '../../db/schemas/Location';

export default {
  driver: async (args) => {
    const driverId = args.driver;
    return User.findOne({ _id: driverId });
  },
  locations: async (args) => {
    const locationsIds = args.locations;
    return Location.find({ _id: { $in: locationsIds } });
  },
  members: async (args) => {
    const membersIds = args.members;
    return User.find({ _id: { $in: membersIds } });
  },
};
