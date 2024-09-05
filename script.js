// ***** Question A ****

// When teaching beginners, should use for loop.
function sortArray(arr) {
  // let's assume we get a valid array, full of numbers, and omit any error handling for this and other tasks
  console.log("Non sorted array");
  arr.forEach((num) => console.log(num));
  arr.sort((a, b) => a - b);
  console.log("sorted Array");
  //fix Later: better to print it as a string with spaces, than one/one.
  arr.forEach((num) => console.log(num));
}
sortArray([4, 7, 1, 9, 4, 5]);

// ***** Question B *****
// require to get the student name, birthdate, classNum, and grades.
// require to only print the average, ignoring all other inputs
function calcStudentAverage(
  studentName,
  birthDate,
  classNum,
  mathScore,
  englishScore,
  PhysicsScore
) {
  const average = (mathScore + englishScore + PhysicsScore) / 3;
  // round the number
  console.log(average.toFixed(2));
}

// ***** Question C *****

function getSmallestNum(num1, num2, num3) {
  const smallestNum = Math.min(Math.min(num1, num2), num3);
  console.log(smallestNum);
}
// ***** Question D *****
