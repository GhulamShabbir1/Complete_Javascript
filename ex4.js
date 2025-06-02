let str="ghulam\" "
console.log(" the length of a string is "+str.length)

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'quick';
console.log( "the word include in sentence ? "+sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

console.log(" the upper case string "+ sentence.toUpperCase)

console.log(" the lower case string "+ sentence.toLowerCase)

let str2 = "Please give Rs 1000"
let raw=str2.slice(15)
let amount = Number.parseInt(raw)
console.log(" the amount is "+amount)
console.log(typeof amount)