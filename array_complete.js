let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)

marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)

console.log("the data type of array is "+typeof marks_class_12)

// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
cosole.log("the Array convert to string "+b)

console.log(` the type of ${b} is ` + typeof b)

let c = num.join(" and ")

console.log(c)

console.log(` the type of ${c} is ` + typeof c)

 let r1 = num.pop() // pop returns the popped element
 console.log( " the numbers i pop is " + r1)

 let r2 = num.push(56) // push returns the new array length
 console.log(" the numbers i push is " +r2)

 let r3 = num.shift()
console.log(" the numbers i shift  " +num) // Removes an element from the start of the array

let r = num.unshift(78)
console.log(" the numbers i unshift  " +num)
console.log(r)

// Array Functions

let arr1=Array.from('Ghulam Shabbir') // string to array
console.log(arr1)

console.log(Array.isArray(arr1))

let arr2=Array.of(1,2,3)
console.log(arr2)

// Array Operators

let arr3=[1,2,3,4,5]
let arr4=[6,7,8,9,10]
let concatArr=arr3.concat(arr4)
console.log(concatArr)

let arr5=[1,3,4,5]
arr5.fill(0)
console.log(" now Array arr5 is fill with 0"+arr5)

let arr6=[1,2,3,4,5]
let found=arr6.find(x=>x>2)
console.log(" We find number according to required condition "+found)

let arr7=[1, ,3, ,4, ,5]
console.log(arr7.join())

let arr8=[1,2,3,4,5]
let filteredArr=arr8.filter(x=>x>2)
console.log(" We filter numbers according to required condition "+filteredArr)

let arr9=[1,2,3,4,5]
let maped=arr9.map(y=>y*2)
console.log(maped)

let arr10=[1,2,3,4,5]
let filterarry=arr10.filter(z=>z>2)
console.log(" We filter numbers according to required condition "+filterarry)

let arr11=[1,[2,3],4,5,[6,[7,8]]]
let faltarray=arr11.flat(2)  // remove nested arrays and add its value in main array
console.log(faltarray)

let arr12=[551,22,3,14,5,6,7,8,229]
let a=arr12.sort()
console.log(" the array is now sort "+a)


let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
console.log(num_more.length)
delete num_more[0]
console.log(num_more.length)

let newArray = num.concat(num_more, num_even_more)
console.log(newArray)
console.log(num, num_more)

// sort method
let compare = (a, b)=>{
  return b - a
}
let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num2.sort(compare)
console.log("the exact method of array to sort "+num2)

num2.reverse()
console.log("the exact method to reverse array "+num2)

// Splice and Slice
let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025) // at position 2 add 4 values
console.log(num1)
console.log(deletedValues)

let newNum3 = num1.slice(3)
let newNum4 = num1.slice(3, 5)
console.log(newNum3)
console.log(newNum4)

let num3 = [3, 5, 1, 2, 4]

for(let i=0; i<num3.length;i++){
  console.log(num3[i])
}

// ForEach Loop
num3.forEach((element) => {
  console.log(" using for each loop "+element * element)
})

// for...of 
for (let item of num3){
  console.log(" using for of loop "+item)
}

// for...in
for (let i in num3){
  console.log(" using for in loop "+num3[i])
}


let arr = [45, 23, 21]
// Array map method
let a1 = arr.map((value, index, array) => {
  console.log(value, index, array)
  return value + index
})
console.log(arr)
console.log(a1)

// Array filter method
let arry1 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a1) => {
  return a1 < 10
})
console.log(a2, arr2)

// Array reduce method
let arry2 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)