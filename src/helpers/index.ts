import { people } from '../db';
import { Person } from '../types/Person';

const cleanedMovies = [...people];

export const deletePerson = (id: number): Person[] => {
  return cleanedMovies.filter(person => person.id !== id);
};

export const sortFromYoungToOld = (): Person[] => cleanedMovies.sort((a, b) => a.age - b.age);

export const getById = (id: number): Person | null => cleanedMovies.find((person) => person.id === id) || null;
