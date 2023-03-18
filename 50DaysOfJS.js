// Day 1 challange

// Question : Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return (Math.floor(Math.random() * rangeStart + 1) + rangeEnd) - rangeStart;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 20)}`);
