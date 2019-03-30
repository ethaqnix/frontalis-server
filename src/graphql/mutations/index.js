// @flow
import User from './User';
import Location from './Location';
import Group from './Group';
import Travel from './Travel';
import Features from '../features';

const mutationHelper = mutation => ({ [mutation.handler.name]: mutation.handler });

export default {
  ...User,
  ...Location,
  ...Group,
  ...Travel,
  ...Features.mutations
    .map(mutationHelper)
    .reduce((acc, e) => ({ ...acc, ...e }), {}),
};
