// Day 1 challange

// Question : Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return Math.floor(Math.random() * rangeStart + 1) + rangeEnd - rangeStart;
}

// console.log(`My random number: ${randomNumberGeneratorInRange(5, 20)}`);

// Day 2 challange

/*
Question : Write a program to reverse a string
1.String can be reversed by iterating it and storing it in reverse order
2. String can also be reversed by converting it to array, then joining it after reversing
*/

function reverseAString(str) {
  // write your solution here
  let strArr = str.split("");

  for (let i = 0; i < strArr.length / 2; i++) {
    const temp = strArr[i];
    strArr[i] = strArr[strArr.length - 1 - i];
    strArr[strArr.length - 1 - i] = temp;
  }

  return strArr.join("");
}

// console.log(`Reversed string is: ${reverseAString("JavaScript is awesome")}`)

// Day 3 challange

function reverseGivenInteger(num) {
  // write your solution here
  let ans = 0;
  while (num > 0) {
    let rem = num % 10;
    ans = ans * 10 + rem;
    num = Math.floor(num / 10);
  }
  return ans;
}

// console.log(`Reversed integer is: ${reverseGivenInteger(3849)}`)

// Day 4 challange

// Write a function which can convert the time input given in 12 hours format to 24 hours format

function convertTo24HrsFormat(time) {
  // write your solution here

  if (time.endsWith("AM") && time.slice(0, 2) === "12") {
    return "00" + time.slice(2, 5);
  } else if (time.endsWith("AM") && time.length === 6) {
    return "0" + time.slice(0, 4);
  } else if (time.endsWith("AM")) {
    return time.slice(0, 5);
  } else if (time.endsWith("PM") && time.slice(0, 2) === "12") {
    return time.slice(0, 5);
  }

  let railwayTime = +time.slice(0, 2) + 12;
  return railwayTime + time.slice(2, 5);
}

// console.log(`Converted time: ${convertTo24HrsFormat("5:00AM")}`)

// Write a function which accepts a string argument and
// returns the count of characters between the first and last character 'X'

function getTheGapX(str) {
  // write your solution here
  let s = str.indexOf("X");
  let e = str.lastIndexOf("X");

  if (s < 0 && e < 0) return -1;
  return e - s;
}

// console.log(`Gap between the X's: ${getTheGapX("Xamarin")}`)

// Day 6 challange

// Write a function to truncate a string to a certain number of word

const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  // write your solution here

  let strArr = str.split(" ");
  var res = "";
  for (let i = 0; i < wordLimit; i++) {
    res += " " + strArr[i];
  }
  return res.substring(1);
}

// console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)

// Day 7 challange

// Create a regular expression to validate if the given input is valid Indian mobile number or not

const number = "+91 9876543210";

function validateMobile(number) {
  // write your solution here
  var expr = /^(\+?)((0|91)?)(\s?)?[6-9]\d{9}$/;

  if (expr.test(number)) return true;

  return false;
}

// console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)

// Day 8 challange

// Write a function which accepts two valid dates and returns the difference
// between them as number of days

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
  // write your solution here
  let date1 = new Date(dateText1).getTime(), date2 = new Date(dateText2).getTime();
  let requiredDays = (date2-date1) /DAY_IN_MILLISECONDS
  return requiredDays
}

console.log(
  `Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
);
