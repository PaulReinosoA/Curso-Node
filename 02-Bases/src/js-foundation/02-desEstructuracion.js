// corre en toda la app de node --> .env
console.log(process.env);

const {
  USERDNSDOMAIN,
  USERNAME,
  TERM_PROGRAM_VERSION,
  TERM_PROGRAM,
  USERPROFILE,
} = process.env;

console.log({
  USERDNSDOMAIN,
  USERNAME,
  TERM_PROGRAM_VERSION,
  TERM_PROGRAM,
  USERPROFILE,
});

console.table({
  USERDNSDOMAIN,
  USERNAME,
  TERM_PROGRAM_VERSION,
  TERM_PROGRAM,
  USERPROFILE,
});

const characters = ['flash', 'batman', 'superman'];

const [_, __, batman] = characters;

console.log(batman);
