const fs = require('fs');
const data = fs.readFileSync('./README.md', 'utf-8');

const newData = data.replace(/React/gi, 'Angular');

fs.writeFileSync('./README-ANGULAR.md', newData);

// console.log(newData);
