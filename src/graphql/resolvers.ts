import { people } from '../db';
import { deletePerson, getById, sortFromYoungToOld } from '../helpers';
import { Person } from '../types/Person';

export const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    people: () => people,
    person: (_: never , {id}: Pick<Person, 'id'>) => getById(id),
    sortFromYoungToOld: () => sortFromYoungToOld(),
    
  },
  Mutation: {
    deletePerson: (_: never , {id}: Pick<Person, 'id'>) => deletePerson(id),
  }
};
