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
console.log(typeof marks_class_12)


// Array Functions

let arr1=Array.from('Ghulam Shabbir')
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
console.log(arr5)

let arr6=[1,2,3,4,5]
let found=arr6.find(x=>x>2)
console.log(found)

let arr7=[1, ,3, ,4, ,5]
console.log(arr7.join())

let arr8=[1,2,3,4,5]
let filteredArr=arr8.filter(x=>x>2)
console.log(filteredArr)

let arr9=[1,2,3,4,5]
let maped=arr9.map(y=>y*2)
console.log(maped)

let arr10=[1,2,3,4,5]
let filterarry=arr10.filter(z=>z>2)
console.log(filterarry)

let arr11=[1,[2,3],4,5,[6,[7,8]]]
let faltarray=arr11.flat(2)

let arr12=[551,22,3,14,5,6,7,8,229]
a=arr12.sort()
console.log(a)