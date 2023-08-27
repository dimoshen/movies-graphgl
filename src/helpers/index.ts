import { people } from '../db';
import { Person } from '../types/Person';

export const sortedFromYoungToOld = (): Person[] => [...people].sort((a, b) => a.age - b.age);

export const getById = (id: number): Person | null => people.find((person) => person.id === id) || null;
