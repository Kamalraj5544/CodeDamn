// Day 1 challange

// Question : Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return (Math.floor(Math.random() * rangeStart + 1) + rangeEnd) - rangeStart;
}

// console.log(`My random number: ${randomNumberGeneratorInRange(5, 20)}`);

/*
Question : Write a program to reverse a string
              1.String can be reversed by iterating it and storing it in reverse order
              2. String can also be reversed by converting it to array, then joining it after reversing
*/


const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    let strArr = str.split("")
    
    for (let i = 0; i < strArr.length/2; i++) {
      const temp = strArr[i];
      strArr[i] = strArr[strArr.length-1-i];
      strArr[strArr.length-1-i]= temp;
    }

    return strArr.join("");
}

console.log(`Reversed string is: ${reverseAString(str)}`)
