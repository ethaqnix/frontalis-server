// @flow
import User from '../../db/schemas/User';
import Location from '../../db/schemas/Location';
import Travel from '../../db/schemas/Travel';
import Group from '../../db/schemas/Group';

const transform = (doc) => {
  const tmp = doc;
  delete tmp.id;
  delete tmp._id; // eslint-disable-line
  return tmp;
};

const t = transform;

export default {
  addUser: async (
    _,
    args: {
         name: string
        },
  ): User => new User(args).save(),
  addLocation: async (
    _,
    args: {
      address: string
     },
  ): Location => new Location(args).save(),
  addTravel: async (
    _,
    args: {
        driver: ?string,
        locations: [string],
        members: [string],
        startAt: ?string,
        endAt: string
      },
  ): Travel => new Travel(args).save(),
  addGroup: async (
    _,
    args: {
        isPrivate: boolean,
        members: [string],
        travels: [string]
      },
  ): Group => new Group(args).save(),

  editUser: async (
    _,
    args: {
         id: ?string,
         name: ?string,
        },
  ): User => User.updateOne({ _id: args.id }, t(args))
    .then(async () => User.findOne({ _id: args.id }))
    .catch((err) => { console.error(err); return null; }),
  editLocation: async (
    _,
    args: {
      id: string,
      address: ?string
     },
  ): Location => Location.updateOne({ _id: args.id }, t(args))
    .then(async () => Location.findOne({ _id: args.id }))
    .catch((err) => { console.error(err); return null; }),
  editTravel: async (
    _,
    args: {
      id: string,
      driver: ?string,
      locations: [string],
      members: [string],
      startAt: ?string,
      endAt: string
      },
  ): Travel => Travel.updateOne({ _id: args.id }, t(args))
    .then(async () => Travel.findOne({ _id: args.id }))
    .catch((err) => { console.error(err); return null; }),
  editGroup: async (
    _,
    args: {
        id: string,
        isPrivate: boolean,
        members: [string],
        travels: [string]
      },
  ): Group => Group.updateOne({ _id: args.id }, t(args))
    .then(async () => Group.findOne({ _id: args.id }))
    .catch((err) => { console.error(err); return null; }),

  deleteUser: async (
    _,
    args: {
         id: ?string,
        },
  ): User => User.deleteOne({ _id: args.id })
    .then(res => res.ok === 1)
    .catch((err) => { console.error('an error occured', err); return null; }),
  deleteLocation: async (
    _,
    args: {
      id: string
     },
  ): Location => Location.deleteOne({ _id: args.id })
    .then(res => res.ok === 1)
    .catch((err) => { console.error('an error occured', err); return null; }),
  deleteTravel: async (
    _,
    args: {
       id: string
      },
  ): Travel => Travel.deleteOne({ _id: args.id })
    .then(res => res.ok === 1)
    .catch((err) => { console.error('an error occured', err); return null; }),
  deleteGroup: async (
    _,
    args: {
        id: string
      },
  ): Group => Group.deleteOne({ _id: args.id })
    .then(res => res.ok === 1)
    .catch((err) => { console.error('an error occured', err); return null; }),
};
