// In this week's assignment, you are asked to work with arrays.

// Here's the array you'll be working on.

// [16, true, "8", 4, 9, "6", 36, false, 49, 9, "HiCoders", "false", 1, 4, "true"]

// With this array in mind, complete the following tasks.

// - Create a new array with items of type number in this array. And print it to the console. (10)
//    Example: [16, 4, 9, 36, 49, 9, 1, 4]
// - Print the square of each item of the new array to the console. (15)
//    Example: [256, 16, 81, 1296, 2401, 81, 1, 16]
// - Print the square root of each item of the new array to the console. (20)
//    Example: [4, 2, 3, 6, 7, 3, 1, 2]
// - Print the smallest item of the new array to the console. (15)
//    Example: 1
// - Print the largest item of the new array to the console. (15)
//    Example: 49
// - Print the sum of the items of the new array to the console. (15)
//    Example: 128
// - Print the average of the items of the new array to the console. (10)
//    Example: 16

const firstArray = [
  16,
  true,
  "8",
  4,
  9,
  "6",
  36,
  false,
  49,
  9,
  "HiCoders",
  "false",
  1,
  4,
  "true",
];

const filteredArray = [];
const squareArray = [];
const squareRootArray = [];

let smallestItem = 0;
let largestItem = 0;
let sumOfTheItems = 0;
let averageOfTheItems = 0;

// First Aufgabe==> Filters those whose type is number and writes it to the console.
for (let i = 0; i < firstArray.length; i++) {
  let currentItem = firstArray[i];
  if (typeof currentItem === "number") {
    filteredArray.push(currentItem);
  }
}
console.log(`Filtered array is: ${filteredArray}`);

// Second Aufgabe==> Calculates the square of all items and writes it to the console.
for (let i = 0; i < filteredArray.length; i++) {
  let currentItem = filteredArray[i];
  squareArray.push(currentItem * currentItem);
}
console.log(`Square of items: ${squareArray}`);

//Third Aufgabe==> Calculates the square root of all items and writes it to the console.
for (let i = 0; i < filteredArray.length; i++) {
  let currentItem = filteredArray[i];
  squareRootArray.push(Math.sqrt(currentItem));
}
console.log(`Square root of Items: ${squareRootArray}`);

//Fourth Aufgabe==> Sorts the array from smallest to largest. Writes the smallest and largest item to the console.
filteredArray.sort(function (a, b) {
  return a - b;
});
console.log(filteredArray); // sorted array.

//smalltest Item and largest Item
smallestItem = filteredArray[0];
console.log(`The smallest item is: ${smallestItem}`);

largestItem = filteredArray[filteredArray.length - 1];
console.log(`The largest item is: ${largestItem}`);

//Calculates the sum of the elements of the array and writes it to the console.

for (let i = 0; i < filteredArray.length; i++) {
  let currentItem = filteredArray[i];
  sumOfTheItems = sumOfTheItems + filteredArray[i];
}
console.log(`Sum of the Items is: ${sumOfTheItems}`);

// Calculates the average of the array's items and writes it to the console.
averageOfTheItems = sumOfTheItems / filteredArray.length;
console.log(`Average of the Items is: ${averageOfTheItems}`);
