import { people } from '../db';
import { getById, sortedFromYoungToOld } from '../helpers';
import { Person } from '../types/Person';

export const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    people: () => people,
    person: (_: never , {id}: Pick<Person, 'id'>) => getById(id),
    sortFromYoungToOld: () => sortedFromYoungToOld(),
  }
};
