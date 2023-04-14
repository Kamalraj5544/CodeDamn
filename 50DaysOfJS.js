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
  let date1 = new Date(dateText1).getTime(),
    date2 = new Date(dateText2).getTime();
  let requiredDays = (date2 - date1) / DAY_IN_MILLISECONDS;
  return requiredDays;
}

// console.log(
//   `Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
// );

// Day 9 challange :

// Write a function to check if an object is empty or not in javaScript?

const obj = { key: 1 };

function isEmpty(obj) {
  // write your solution here

  return Object.keys(obj).length === 0;
}

// console.log(`is empty object: ${isEmpty(obj)}`)

// Day 10 challange :

// Write a function to remove array element based on object property?

const arr = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

const filterField = "money";

function removeArrayElement(filterField) {
  // write your solution here
  const filteredArray = arr.filter((ele) => ele.field !== filterField);
  return filteredArray;
}

// console.log(`filtered array: ${removeArrayElement("id")}`);

// Day 11 challange :

// Return the N-th value of the Fibonacci sequence

function fibonacci(n) {
  // write your solution here

  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(`fibonacci value at position 5: ${fibonacci(5)}`)

// Day 12 challange :

// Given a number from 0 to 999,999,999,999, spell out that number in English.

function getBet0and99(num) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const multiplesOfTen = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (num <= 19) {
    return ones[num];
  } else {
    return multiplesOfTen[Math.floor(num / 10) % 10] + "-" + ones[num % 10];
  }
}

const sayNumberInEnglish = (n) => {
  // Write your solution here

  if (n < 100) return getBet0and99(n);

  const scales = ["hundred", "thousand", "million", "billion"];

  let temp = n;
  let chunks = [];
  while (temp > 0) {
    chunks.push(temp % 1000);
    temp = Math.floor(temp / 1000);
  }

  let ans = "";

  for (let i = 0; i < chunks.length; i++) {
    let hun = Math.floor(chunks[i] / 100);
    if (hun > 0) {
      ans =
        getBet0and99(hun) +
        " " +
        scales[0] +
        " " +
        getBet0and99(chunks[i] - hun * 100) +
        ans;
    } else {
      ans = getBet0and99(chunks[i]) + " " + ans;
    }
    ans = (i !== chunks.length - 1 ? scales[i + 1] : "") + " " + ans;
  }
  return ans.trim();
};

// console.log(`5635 in english is: ${sayNumberInEnglish(14)}`);

// Day 13 challange :

// Convert given seconds to space age on all planets of our solar system

const spaceAge = (seconds) => {
  const yearsInAllPlanets = {
    Mercury: 0,
    Venus: 0,
    Earth: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0,
  };
  const earthYearsInAllPlanets = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  };

  // Your solution starts here

  const earthYears = seconds / (60 * 60 * 24 * 365.25);

  for (const key in yearsInAllPlanets) {
    yearsInAllPlanets[key] = +(
      earthYears / earthYearsInAllPlanets[key]
    ).toFixed(2);
  }
  // console.log(key, yearsInAllPlanets[key])

  // Your solution ends here

  return yearsInAllPlanets;
};

// console.log(spaceAge(Math.round(Math.random() * 99999999)))

// Day 14 challange :

// Convert given array of digits of a base to another asked base

const convertToBase = (
  num,
  base,
  numLength = 1 + ~~(Math.log(num) / Math.log(base))
) =>
  numLength
    ? [...convertToBase((num / base) | 0, base, numLength - 1), num % base]
    : [];

const convertDigitsToAskedBase = (digits, baseA, baseB) => {
  if (baseA <= 1 || baseA % 1) throw new Error("Wrong input base");
  if (baseB <= 1 || baseB % 1) throw new Error("Wrong output base");
  if (
    [
      !digits.length,
      digits.length > 1 && digits[0] === 0,
      digits.some((digit) => digit < 0 || digit >= baseA),
    ].some((assertion) => assertion)
  )
    throw new Error("Input has wrong format");
  // Convert digits in base a to base 10 then convert that number to base b.
  return convertToBase(
    digits.reduce((num, digit) => digit + num * baseA),
    baseB
  );
};

// console.log(convertDigitsToAskedBase([5,8],10,16))

// Day 15 challange :

// Determine if a sentence is a pangram

// Instructions:

// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter")
// is a sentence using every letter of the alphabet at least once. The best known English pangram is:

// The quick brown fox jumps over the lazy dog.

// The alphabet used consists of ASCII letters a to z, inclusive,
// and is case insensitive. Input will not contain non-ASCII symbols.

const isPangram = (input) => {
  // Code here
  const pangramArr = new Array(26).fill(0);
  const inputStr = input.toLowerCase();

  for (let i = 0; i < inputStr.length; i++) {
    const element = inputStr.charCodeAt(i);
    if (element >= "a".charCodeAt(0) && element <= "z".charCodeAt(0)) {
      pangramArr[element - "a".charCodeAt(0)]++;
    }
  }

  return pangramArr.every((c) => c >= 1);
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog."))

// Day 16 challange :

// Ask the Bob

// Instructions
// Bob is a lackadaisical teenager. In conversation, his responses are very limited.

// Bob answers 'Sure.' if you ask him a question, such as "How are you?".

// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

const isUpper = (string) => {
  return !/[a-z]/.test(string) && /[A-Z]/.test(string);
};

function hey(message) {
  // Code here
  let pureLetterString = "";
  message.split("").forEach((character) => {
    if (/[a-zA-Z]/.test(character)) {
      pureLetterString += character;
    }
  });

  if (
    isUpper(pureLetterString) &&
    message.trim().charAt(message.length - 1) === "?"
  ) {
    return "Calm down, I know what I'm doing!";
  } else if (isUpper(pureLetterString)) {
    return "Whoa, chill out!";
  } else if (message.trim().charAt(message.length - 1) === "?") {
    return "Sure.";
  } else if (message === "") {
    return "Fine. Be that way!";
  }

  return "Whatever.";
}

// console.log(hey('How are you?'))

// Day 17 challange :

// Longest Consecutive Sequence
// Given an array of elements, find a subsequence in the array such that all the elements
// in the sequence are consecutive irrespective of their order.

const longestConsecutiveSequence = (inputArray) => {
  // Your code here

  let set = new Set();

  for (let i = 0; i < inputArray.length; i++) {
    set.add(inputArray[i]);
  }

  let ans = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let count = 1;
    let nextElement = inputArray[i] + 1;

    while (set.has(nextElement)) {
      count++;
      nextElement++;
    }

    ans = ans >= count ? ans : count;
  }

  return ans;
};

// console.log(longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1]))

// Day 18 challange :

// Calculate Grains on a given square on a chessboard

const totalGrains = () => {
  // Code here
  return BigInt(Math.pow(2, 64)) - 1n;
};

const grainsOn = (input) => {
  return BigInt(Math.pow(2, input - 1));
};

// console.log(`Grains on 5th square: ${grainsOn(5)}`)
// console.log(`Total grains upto 5th square: ${totalGrains(5)}`)

// Day 19 challange

// Resistor Color map

// These colors are encoded as follows:

// Black: 0
// Brown: 1
// Red: 2
// Orange: 3
// Yellow: 4
// Green: 5
// Blue: 6
// Violet: 7
// Grey: 8
// White: 9

// The goal of this exercise is to create a way:

// to look up the numerical value associated with a particular color band
// to list the different band colors

const colorCode = (color) => {
  // Code here
  
  let resistorColorObj = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  return resistorColorObj[color];
};

// console.log(colorCode("white"));




// Day 20 challange

// Add two numbers

const addTwoNumbers = (a, b) => {
	// code here
	return a+b;
}

// console.log(addTwoNumbers(5,8))




// Day 21 challange

// Union of Two Arrays
// Write the code for the function which returns the the union of the two given arrays

const unionOfArrays = (arr1, arr2) => {
  // code below here
  const unionArr = [...arr1];

  for (let i = 0; i < arr2.length; i++) {
    !unionArr.includes(arr2[i]) && unionArr.push(arr2[i]); ;
  }
  return unionArr;
};

// console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);


// Day 22 challange

// Unique In Order

// Implement the function unique_in_order which takes as argument a 
// sequence and returns a list of items without any elements with the
//  same value next to each other and preserving the original order of elements.


let uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array

  return [...iterable].filter((a, i) => a !== iterable[i-1])
};

// console.log(uniqueInOrder("AABbCcd"))



// Day 23 challange 

// Equal Sides Of An Array

// You are going to be given an array of integers. Your job is to take that array and 
// find an index N where the sum of the integers to the left of N is equal to the 
// sum of the integers to the right of N. If there is no index that would make this happen, return -1.


function findEvenIndex(arr) {
  //Code goes here!
  for (let i = 1; i < arr.length - 1 ; i++) {
    const leftSum = [...arr.slice(0,i)].reduce((acc,curr) => acc + curr)
    const rightSum = [...arr.slice(i+1,arr.length)].reduce((acc,curr) => acc + curr)
    if(leftSum == rightSum) return i;
  }
  return -1;
}


// console.log(findEvenIndex([1,2,3,4,3,2,1]))


// Day 24 challange 

// Write Number in Expanded Form

// For example:
// expandedForm(12);  Should return '10+2'
// expandedForm(42);  Should return '40+2'


function expandedForm(num) {
  // Your code here
  let ans="";
  let tenses = 1;
  while ( num > 0){
    let rem = num % 10;
    ans = (rem * tenses) +(tenses === 1 ? "" : "+")+ ans;
    tenses*= 10;
    num = Math.floor(num / 10);
  }
  return ans;
}


// Day 25 challange 

// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter 
// words reversed (Just like the name of this Kata). Strings passed in 
// will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

function spinWords(string) {

  function reverseString(str){
    let strArr = str.split("");
    for (let i = 0; i < strArr.length / 2; i++) {
      const temp = strArr[i];
      strArr[i] = strArr[strArr.length - 1 - i];
      strArr[strArr.length - 1 - i] = temp;
    }
    return strArr.join("");
  }

  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    if(element.length >= 5){
      words[i] = reverseString(element);
    }
  }
  return words.join(" ");
}


// Day 26 challange 

// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.


function findOdd(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if(obj[arr[i]] != undefined){
      let c = obj[arr[i]];
      c++;
      obj[arr[i]] = c;
    }else {
      obj[arr[i]] = 1;
    }
  }

  for (const iterator of Object.keys(obj)) {
    // console.log(iterator)
    if(obj[iterator] % 2 !== 0) return +iterator;
  }
  return 0;
}


console.log(typeof findOdd([5,4,3,2,1,5,4,3,2,10,10]))