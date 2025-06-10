let name1 = "Ghulam Shabbir"
console.log(name1.length)
console.log(name1[0])
console.log(name1[1])

let friend = 'hamza'
console.log(friend)

console.log(friend.padStart(4,"start "))

console.log(friend.padEnd(4,"End "))

console.log(friend.split("_"))


// Template literals
let boy1 = "raw"
let boy2 = "rick"
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

// Escape Sequence Characters

let fruit = "Bana\"na"
console.log(fruit)

// String Methods

console.log(name1.length)

console.log(name1.toUpperCase())

console.log(name1.toLowerCase())

console.log(name1.slice(2, 4))

console.log(name1.slice(2))

console.log(name1.slice(-2))

console.log(name1.replace("Har", "Per"))

console.log(name1.repeat(2))

console.log(name1.concat(" is a friend of ", friend, " Ok"))

let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

let friend2 = "      Meena        "
console.log(friend2)

console.log(friend2.trim())

console.log(friend2.trimStart())

console.log(friend2.trimEnd())

let fr = "Roman" + "seth" + "dean"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr[4])

console.log(fr.substring(7,7))



console.log(fr)
// QuickQuiz: Use a for loop to print a string

for (let i=0 ;i<fr.length; i++){
    console.log(fr[i])
}