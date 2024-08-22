interface Hero {
  id: number;
  name: string;
  owner: string;
}

export const heros: Hero[] = [
  {
    id: 1,
    name: 'batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'spiderman',
    owner: 'MARVEL',
  },
  {
    id: 3,
    name: 'batman',
    owner: 'DC',
  },
];
