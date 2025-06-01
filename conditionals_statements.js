let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")

console.log("You can", (a<18? "not drive" :"drive"))

// Practice Section 

let num1=15
if(num1>10 && num1<20)
{
  console.log(`the ${num1} is lies bt 10 and 20`)
}

let num2=1
switch (num2) {
  case 1:
    console.log(`the number is ${num2}`)
    break;
    case 2:
    console.log(`the number is ${num2}`)
    break;
    case 3:
    console.log(`the number is ${num2}`)
    break;

  default:
    break;
}

const num3=15

if(num3 % 2==0 || num3 % 3==0 )
{
  console.log("the number is devisible by 2 and 3")
}

if(num3 % 2==0 && num3 % 3==0 )
{
  console.log("the number is devisible by 2 and 3")
}
