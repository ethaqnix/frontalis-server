import { cpus } from 'os';
import queries from '../queries';
import mutations from '../mutations';
import Travel from './Travel';

export default {
  Mutation: mutations,
  Query: queries,
  Travel,
};
