// Find is number is Prime

var num = 7;

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false


// Deeptype

let a = [1, 2, 3, 4, 5]
let b = " this is string"
const obj = {
  name: "Ghulam Shabbir"
}

let c = null

function deepType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (typeof value === "number" && isNaN(value)) return "nan";
  return typeof value;
}

deepType(b)


// Fabicon series
let n = 7
function fibonacci(n) {
  if (n <= 0) return [];
  let fib = [0];
  if (n > 1) fib.push(1);
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}



// duplicates

let arr = [1, 2, 3, 4, 5, 5, 6, 88, 8]

function isDuplicates(arr) {
  for (var i = 0; i < length.arr; i++) {
    for (var j = i + 1; j < length.arr; j++) {
      if (arr[i] == arr[j]) {
        console.log("the dupplicate exist")
      }
    }
  }
}

console.log(isDuplicates(arr))


function chain(val) {
  return {
    add: function (n) {
      val += n;
      return this;
    },
    multiply: function (n) {
      val *= n;
      return this;
    },
    value: function () {
      return val;
    }
  };
}

// Example:
console.log(chain(5).add(5).multiply(2).value()); // 20



const ones = {
  0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
  6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
  11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen",
  15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
};

const tens = {
  20: "twenty", 30: "thirty", 40: "forty", 50: "fifty",
  60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
};

function numberToWords(num) {
  if (num <= 19) return ones[num];
  if (num < 100) {
    const t = Math.floor(num / 10) * 10;
    const o = num % 10;
    return o === 0 ? tens[t] : `${tens[t]} ${ones[o]}`;
  }
  return "Out of range";
}

// Example:
console.log(numberToWords(23)); // twenty three




function evaluateExpression(expr) {
  try {
    return new Function(`return ${expr}`)();
  } catch (e) {
    return "Invalid Expression";
  }
}

// Example:
console.log(evaluateExpression("5 + 3 * 2")); // 11
