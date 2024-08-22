import { getHeroById } from './services/hero.service';

const hero = getHeroById(5);
console.log(hero?.name ?? 'no hero found!');
