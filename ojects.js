let nullVar = null; // value is intentionally nothing
let undefinedVar; // value is undefined or not defined

console.log(typeof numVar); // Output: number
console.log(typeof strVar); // Output: string

const bioData = {
	name: "Ghulam Shabbir",
	age: 29,
	likesJS: true,
	secret: undefined,
};


console.log(bioData["name"]); // Output: Ghulam Shabbir
console.log(bioData.age); // Output: 29
console.log(bioData["pet"]); // Output: undefined

const Marks1 = {
	english: 100,
	maths: 80,
	chemistry: 40,
};

const Marks2 = {
	english: 70,
	maths: 100,
	chemistry: 60,
};


// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Ghulam Shabbir"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "Ghulam Shabbir": true,
  "raw": false,
  "rank": 67,
  "ron": undefined
}
console.log(item["ron"])