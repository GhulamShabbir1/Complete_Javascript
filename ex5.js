// create array and add a number to this array enter by a user
let arr1=[1,2,5,9,4,89]
let a=input("Enter a number in array")
a=Number.parseInt(a)
arr1.push(a)

// add a number until number not equal to 0

let arr2=[1,2,5,9,4,89]
let b=input("Enter a number in array")
a=Number.parseInt(b)
if(a!=0){
    arr1.push(a)
}
else {
    console.log("The number is zero")
}

// filter numer that is divisible by 10

let arr3=[23,34,70,23,78,90,80]
let filt=arr3.filter((c)=>{
    return c%10==0
})
console.log(filt)

// return squre of given number

let arr4=[1,2,3,4,5]
let maped=arr4.map((c)=>{
    return c*c
})
console.log(maped)

// factorial using reduce method number is given from array 
let arr5=[1,2,3,4,5]
let n = arr.reduce((x1, x2) => {
  return x1 * x2
})
console.log(n)


