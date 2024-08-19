var name = "Ghulam Shabbir";
console.log(name); //output: Ghulam Shabbir

var name = "Ghulam Shabbir";
name = "raw";
console.log(name); //output: raw


var name = "Ghulam Shabbir";
{
    var name = "Ron";
    console.log(name); //output: Ron
}
console.log(name); //output: Ron


let a = 29

let b = " Ghulam Shabbir";
{
let b = "this";
console.log(b); //output: this
}
console.log(b); //output: Ghulam Shabbir


const name = " Ghulam Shabbir";
name = "this";
console.log(name); //output: Uncaught TypeError: Assignment to constant variable.


const c = "Ghulam Shabbir"; //bad
const name = "Ghulam Shabbir"; //good


const myName = "Ghulam Shabbir"; //good
const myname = "Ghulam Shabbir"; //bad


//good:
{
    const name = "Ghulam Shabbir";
    const hobby = "programming";

    console.log("My name is " + name + " and I love " + hobby); // output: My name is Ghulam Shabbir and I love programming
}
//bad
{
    console.log("My name is " + name + " and I love " + hobby); // output: My name is undefined and I love undefined
    const name = "Ghulam Shabbir";
    const hobby = "programming";
}


const name = "Ghulam Shabbir"; //good
let name = "Ghulam Shabbir"; //fine but const is better because we know that the value of name will not change
var name = "Ghulam Shabbir"; //bad