import { heros } from '../data/heros';

export const getHeroById = (id: number) => {
  return heros.find((hero) => hero.id === id);
};
