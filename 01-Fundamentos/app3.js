const fs = require('fs');

const data = fs.readFileSync('./README.md', 'utf-8');

const words = data.split(' ');

console.log('palabras: ', words.length);

const wordsFiler = words.filter((element) => {
  return element.toUpperCase().includes('REACT');
});

console.log('words with react: ', wordsFiler.length);

// asi lo hace vsCode
// react/gi  -> expresion regular con la palabra y sin considerar caseSensitive
const reactWordsCount = data.match(/react/gi ?? []).length;

console.log('words with react2: ', reactWordsCount);
