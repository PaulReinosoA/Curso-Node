// const users = [
//   {
//     id: 1,
//     name: 'Jhon G.',
//   },
//   {
//     id: 2,
//     name: 'Juan D.',
//   },
// ];

// function getUserById(id, callback) {
//   const user = users.find(function (user) {
//     return user.id === id;
//   });
//   // console.log(user);
//   if (!user) {
//     return callback(`user not found with id: ${id}`);
//   }

//   return callback(null, user);
// }

// // getUserById(1);
// module.exports = {
//   getUserById,
// };

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
];

export function getUserById(
  id: number,
  callback: (err?: string, user?: User) => void
) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return callback(`User not found with id ${id}`);
  }

  return callback(undefined, user);
}
