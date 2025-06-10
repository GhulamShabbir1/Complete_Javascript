let name1 = "Ghulam Shabbir"
console.log(`the lenght of string ${name1} is ${name1.length}`)

console.log(name1[0])
console.log(name1[1])

let friend = 'hamza'
console.log(friend)




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

console.log(name1.slice(2, 4))  // at 2 ch is include but 4 not

console.log(name1.slice(2)) // from to to end

console.log(name1.slice(-2)) // from end

console.log(name1.replace("Har", "Per"))

console.log(name1.repeat(2)) // repeat 2 time

console.log(name1.concat(" is a friend of ", friend, " Ok"))

let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

console.log(name1.padStart(4,"start ")) // add text "Start " at start up to 4 ch

console.log(name1.padEnd(4,"End ")) // add text "End " at end up to 4 ch

console.log(name1.split("_")) // add _ aftar every character

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