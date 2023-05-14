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
  return a + b;
};

// console.log(addTwoNumbers(5,8))

// Day 21 challange

// Union of Two Arrays
// Write the code for the function which returns the the union of the two given arrays

const unionOfArrays = (arr1, arr2) => {
  // code below here
  const unionArr = [...arr1];

  for (let i = 0; i < arr2.length; i++) {
    !unionArr.includes(arr2[i]) && unionArr.push(arr2[i]);
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

  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

// console.log(uniqueInOrder("AABbCcd"))

// Day 23 challange

// Equal Sides Of An Array

// You are going to be given an array of integers. Your job is to take that array and
// find an index N where the sum of the integers to the left of N is equal to the
// sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  //Code goes here!
  for (let i = 1; i < arr.length - 1; i++) {
    const leftSum = [...arr.slice(0, i)].reduce((acc, curr) => acc + curr);
    const rightSum = [...arr.slice(i + 1, arr.length)].reduce(
      (acc, curr) => acc + curr
    );
    if (leftSum == rightSum) return i;
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
  let ans = "";
  let tenses = 1;
  while (num > 0) {
    let rem = num % 10;
    ans = rem * tenses + (tenses === 1 ? "" : "+") + ans;
    tenses *= 10;
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
  function reverseString(str) {
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
    if (element.length >= 5) {
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
    if (obj[arr[i]] != undefined) {
      let c = obj[arr[i]];
      c++;
      obj[arr[i]] = c;
    } else {
      obj[arr[i]] = 1;
    }
  }

  for (const iterator of Object.keys(obj)) {
    // console.log(iterator)
    if (obj[iterator] % 2 !== 0) return +iterator;
  }
  return 0;
}

// console.log( findOdd([5,4,3,2,1,5,4,3,2,10,10]))

// Day 27 challange
// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels

// The input can consit of Lower case and upper case letters so make sure to count both of them.

function getCount(str) {
  let vowelsCount = 0;
  // enter your magic here
  let strArr = [...str];

  for (let i = 0; i < strArr.length; i++) {
    const ch = strArr[i];
    if (
      ch == "A" ||
      ch == "E" ||
      ch == "I" ||
      ch == "O" ||
      ch == "U" ||
      ch == "a" ||
      ch == "e" ||
      ch == "i" ||
      ch == "o" ||
      ch == "u"
    )
      vowelsCount++;
  }

  return vowelsCount;
}

// console.log(getCount("abracadabra"));

// Day 28 challange

// WeIrD StRiNg CaSe

// Write a function toWeirdCase that accepts a string, and returns
// the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased.
// The indexing just explained is zero based, so the zero-ith index is even,
//  therefore that character should be upper cased and you need to start over for each word.

function toWeirdCase(string) {
  // Your code goes here
  let strArr = [...string].map((c, i) => {
    if (i % 2 == 0) return c.toUpperCase();
    else return c.toLowerCase();
  });
  return strArr.join("");
}

// console.log(
//   `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
// );

// Day 29 challange

// Mumbling

// Each char becomes n*chars where n is the index + 1,
// and the first char is capitalized divided by - instead of space.

// Example: accum("ZpglnRxqenU")
// should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

function accum(s) {
  // your code goes below
  let strArr = [...s].map((ch, i) => {
    let temp = ch.toUpperCase();
    let c = 0;
    while (c++ < i) {
      temp += ch.toLowerCase();
    }
    return temp;
  });
  return strArr.join("-");
}

// console.log(accum("kaMal"))

// Day 30 challange
// Mexican Wave

// wave("hello") returns the array ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  // Your Code goes below
  return [...str]
    .map((ch, i) => {
      let temp = ch.toUpperCase();
      return str.substring(0, i) + temp + str.substring(i + 1, str.length);
    })
    .filter((words) => words !== str);
}

// console.log(wave("two words"));

// Day 31 challange

// Write a Program to Find the Factorial of a Number\

function factorial(n) {
  // write your code here
  return n === 1 ? 1 : n * factorial(n - 1);
}

// console.log("The factorial of " + "4" + " is " + factorial(5));

// Day 32 challange

// Write a program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(a, b) {
  // write your code here
  if (a === b) return a;
  return a > b ? gcd(a - b, b) : gcd(a, b - a);
}

const a = 2154;
const b = 458;

// console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));

// Day 33 challange

// Write a program to print unique values from an array
function set(arrOfNum) {
  // write your code here
  let ans = [];
  arrOfNum.forEach((a) => !ans.includes(a) && ans.push(a));
  return ans;
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

// console.log("result is + " + set(arrOfNum));

// Day 34 challange
// Write a program to find the most frequent item of an array

function mostFreq(arr) {
  let countobj = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (countobj[element] != undefined) {
      let count = countobj[element];
      count++;
      countobj[element] = count;
    } else {
      countobj[element] = 1;
    }
  }
  let maxCount = 0;
  let element;
  for (const iterator of Object.keys(countobj)) {
    let prevMaxCount = maxCount;
    maxCount = maxCount < countobj[iterator] ? countobj[iterator] : maxCount;
    element = prevMaxCount != maxCount ? iterator : element;
  }
  return `${element} ${maxCount}`;
}

// console.log(mostFreq([1, 2, 2, 4, 5, 6, 6]));

// Day 35 challange

// Write a JavaScript function to get nth largest element from an unsorted array.

function nthlargest(arr, highest) {
  // write your code here
  arr.sort((a, b) => b - a);
  // console.log(arr)
  return arr[highest - 1];
}

const arr1 = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

// console.log(nthlargest(arr1, highest));

// Day 36 challange

// Given a DNA strand, return its RNA complement (per RNA transcription).

//   Given a DNA strand, its transcribed RNA strand
//   is formed by replacing each nucleotide with its complement:

// G -> C
// C -> G
// T -> A
// A -> U

const transcription = (dna) => {
  // code here
  let rnaObj = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  let ans = "";
  for (let i = 0; i < dna.length; i++) {
    ans += rnaObj[dna.charAt(i)];
  }
  return ans;
};

// console.log(transcription("GATC"))

// Day 37 challange

// Given a year, report if it is a leap year.

const isLeap = (year) => {
  // code here

  return year % 400 === 0
    ? true
    : year % 100 === 0
    ? false
    : year % 4 === 0
    ? true
    : false;
};

// Day 38 challange

// Given a number determine whether or not it is valid per the Luhn formula.

const valid = (string) => {
  // code here
  let str = string
    .replaceAll(" ", "")
    .split("")
    .map((num, i) => {
      if (i % 2 === 0) {
        if (+num >= 5) return +num * 2 - 9;
        return +num * 2;
      }
      return +num;
    });
  return str.reduce((a, c) => c + a) % 10 === 0;
};

// console.log(valid("4539 3195 0343 6467"))

// Day 39 challange

// 1. Determine how long it takes to mix a juice

const timeToMixJuice = (name) => {
  // code here
  let timeObj = {
    "Pure Strawberry Joy": 0.5,
    Energizer: 1.5,
    "Green Garden": 1.5,
    "Tropical Island": 3,
    "All or Nothing": 5,
  };
  return timeObj[name] !== undefined ? timeObj[name] : 2.5;
};

//  2. Replenish the lime wedge supply

const limesToCut = (wedgesNeeded, limes) => {
  // code here
  let slicesObj = {
    small: 6,
    medium: 8,
    large: 10,
  };
  let i = 0;
  while (wedgesNeeded > 0) {
    wedgesNeeded -= slicesObj[limes[i++]];
  }
  return i;
};

// 3. Finish up the shift

const remainingOrders = (timeLeft, orders) => {
  // code here
  let timeObj = {
    "Pure Strawberry Joy": 0.5,
    Energizer: 1.5,
    "Green Garden": 1.5,
    "Tropical Island": 3,
    "All or Nothing": 5,
  };
  let i = 0;

  while (timeLeft >= 0) {
    timeLeft -= timeObj[orders[i++]];
  }
  return i > orders.length ? [] : orders.slice(i, orders.length);
};

// Day 40 challange

// 1. Determine if you will need a drivers licence

const needsLicense = (kind) => {
  // code here

  return kind === "car" || kind === "truck" ? true : false;
};

//2. Choose between two potential vehicles to buy

const chooseVehicle = (option1, option2) => {
  // code here
  let cars = [option1, option2];
  cars.sort();
  console.log(cars[0]);
  return cars[0] + " is clearly the better choice.";
};

const calculateResellPrice = (originalPrice, age) => {
  // code here
  const discount = age < 3 ? 0.8 : age > 10 ? 0.5 : 0.7;
  return discount * originalPrice;
};

// Day 41 challange

function openOrSenior(data) {
  // your code goes below
  return data.map((x) => (x[0] >= 55 && x[1] > 7 ? "Senior" : "Open"));
}

let output = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

// console.log(output);

// Day 42 challange

// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  //Code below
  let min1 = numbers[0] < numbers[1] ? numbers[0] : numbers[1];
  let min2 = numbers[0] < numbers[1] ? numbers[1] : numbers[0];
  for (let i = 2; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < min2 && element < min1) {
      min2 = min1;
      min1 = element;
    } else if (element > min1 && element < min2) {
      min2 = element;
    }
  }
  return min1 + min2;
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

// Day 43 challange
// Highest Scoring Word

function high(x) {
  //code your magic here
  let str = x.split(" ");
  let strValue = 0;
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];

    let strArr = [...element];
    let currValue = strArr.reduce(
      (acc, curr) => curr.charCodeAt(0) - "a".charCodeAt(0) + acc,
      0
    );
    if (currValue > strValue) {
      strValue = currValue;
      ans = element;
    }
  }
  return ans;
}

// console.log(high("man i need a taxi up to ubud"))

// Day 44 challange
// Count the divisors of a number

function getDivisorsCnt(num) {
  // code below
  let ans = 2;
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) ans++;
  }
  // console.log(ans);
  return ans;
}

// console.log(getDivisorsCnt(10))

// Day 45 challange

// Find The Parity Outlier

function findOutlier(integers) {
  let oddArr = [];
  let evenArr = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenArr.push(integers[i]);
    } else {
      oddArr.push(integers[i]);
    }
  }

  return evenArr.length == 1 ? evenArr[0] : oddArr[0];
}



// Day 46 challange

// A Needle in the Haystack


function findNeedle(haystack) {
  // your code here
  for (let i = 0; i < haystack.length; i++) {
    const element = haystack[i];
     if( element === "needle" ) return "found the needle at position "+i
  }
}


// Day 47 challange

// Isograms

function isIsogram(str) {
  // your code here
  let strArr = [...str.toLowerCase()];
  let array = new Array(26).fill(0);
  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i];
    if(array[element.charCodeAt(0)-"a".charCodeAt(0)] >= 1) return false;
    array[element.charCodeAt(0)-"a".charCodeAt(0)]++;
  }
  return true;
}

// console.log(isIsogram("isogram"))

// Day 48 challange

// Human readable duration format


function buildString(value, unit) {
  if (value > 0) {
    return value + ' ' + unit + (value > 1 ? 's' : '') + ', ';
  }
  return '';
}


function formatDuration(seconds) {
  // your code here

  if (seconds === 0) { 
    return "now";
  }
  let  tmpSeconds = seconds;

  let oneYrInSecs = 365*24*60*60;
  let oneDayInSecs = oneYrInSecs/365;
  let oneHourInSecs = oneDayInSecs/24;
  let oneMinuteInSecs = 60;

  let numYears = Math.floor(tmpSeconds/oneYrInSecs);
  tmpSeconds -= numYears*oneYrInSecs;
  
  let numDays = Math.floor(tmpSeconds/oneDayInSecs);
  tmpSeconds -= numDays*oneDayInSecs;
  
  let numHours = Math.floor(tmpSeconds/oneHourInSecs);
  tmpSeconds -= numHours*oneHourInSecs;

  let numMins = Math.floor(tmpSeconds/oneMinuteInSecs);
  tmpSeconds -= numMins*oneMinuteInSecs;

  let formattedStr = buildString(numYears, 'year');
  formattedStr += buildString(numDays, 'day');
  formattedStr += buildString(numHours, 'hour');
  formattedStr += buildString(numMins, 'minute');
  formattedStr += buildString(tmpSeconds, 'second');

  let idx = formattedStr.lastIndexOf(', ');
  formattedStr = formattedStr.substring(0, idx);
  
  // replace the second last , with and
  idx = formattedStr.lastIndexOf(', ');
  if (idx > 0) {
    formattedStr = formattedStr.substring(0, idx) + ' and ' + formattedStr.substring(idx + 2);
  }
  return formattedStr;
}

// console.log(formatDuration(3662))


// Day 49 challange

// Is this a triangle?

function isTriangle(a, b, c) {
  // your code here
  return a + b > c && a + c > b && c + b > a; 
}



// Day 50 challange
// Get the Middle Character

function getMiddle(s) {
  // your code here
  let l = s.length;
  return l % 2 === 0 ? s.substring((l/2)-1,(l/2)+1) : s.charAt(Math.floor(l/2));
}

// console.log(getMiddle("middle"))
