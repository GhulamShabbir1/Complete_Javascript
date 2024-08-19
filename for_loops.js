// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
}
console.log("Sum of first " + n + " natural numbers is " + sum)



let obj = {
  ali: 90,
  hassan: 45,
  harron: 56,
  umer: 57,
  raza: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "umer") {
  console.log(b)
}
