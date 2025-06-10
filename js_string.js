let name = "Ghulam Shabbir"
console.log(name.length)
console.log(name[0])
console.log(name[1])

let friend = 'hamza'
console.log(friend)

// let myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// Template literals
let boy1 = "raw"
let boy2 = "rick"
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

// Escape Sequence Characters

let fruit = "Bana\"na"
console.log(fruit)

// String Methods

console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name.slice(2, 4))

console.log(name.slice(2))

console.log(name.slice(-2))

console.log(name.replace("Har", "Per"))

console.log(name.concat(" is a friend of ", friend, " Ok"))

let friend2 = "      Meena        "
console.log(friend2)
console.log(friend2.trim())

let fr = "Roman" + "seth" + "dean"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr[4])


console.log(fr)
// QuickQuiz: Use a for loop to print a string

for (let i=0 ;i<fr.length; i++){
    console.log(fr[i])
}