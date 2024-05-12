console.log(
  "--------------------------------1----------------------------------"
);
//Basic
//1.EXE yes or No
/*Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
string for false
*/

/*1.understanding the problem:
1.what does the function accepts? boolean
2.what does the function returns ? a string.
3.which string will she return? 
*The method function needs to return "Yes" as a string if the boolean value is true.
*it should return "No" as a string if the boolean value is false.
*/
/*
explore :
1.declaring the method function
2.checking the boolean value provided with if-else statement
3.testing the method 
*/
function methodBooleanToString(inputValue) {
  if (inputValue === true) {
    return "Yes";
  } else {
    return "No";
  }
}
const IsMyDogReactive = true;
const AreAllDogesReactive = false;

const TestForIsMyDogReactive = methodBooleanToString(IsMyDogReactive);
const TestForAreAllDogesReactive = methodBooleanToString(AreAllDogesReactive);
console.log(TestForIsMyDogReactive); //Yes
console.log(TestForAreAllDogesReactive); //No
console.log(
  "-------------------------------2-----------------------------------"
);
/*Simple Math:
Ex2.1 - Sum of lowest numbers
Create a function that returns the sum of the two lowest positive numbers given an array of
minimum 4 . No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

/*understanding the problem:
1.what does the function accepts (input)? only Numbers (positive integers)
2. No floats or non-positive integers will be passed- therefore they will be declared as undefined

explore:
1.declaring the method function
2.checking the the two lowest positive numbers and at least 4 numbers in the array,given an array with the if-else statement
3.sum them 
4.return the result
5.testing the method
*/
function sumLowerNum(Arr) {
  const ValuePosIntNum = Arr.filter(
    (numPlaceHolder) => Number.isInteger(numPlaceHolder) && numPlaceHolder > 0
  );
  if (ValuePosIntNum.length < 4) {
    return "less than 4 integers in the array.";
  }
  ValuePosIntNum.sort((a, b) => a - b);

  const sum = ValuePosIntNum[0] + ValuePosIntNum[1];
  return sum;
}

const newArray = [4, 5, 1, 20, 66, 5.4, -5];
const letsTest = sumLowerNum(newArray);
console.log(letsTest); //5 (1+4)

console.log(
  "-------------------------------2.2-----------------------------------"
);
/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

understanding the problem: 
1.converting array value to number
2.make the value of number equal to a integer.
3.array.length=>4
*/

//Chat GPT answer, I didn`t understand this section and still not!
function binaryArrayToInt(binaryArray) {
  // Initialize the decimal value to 0
  let decimalValue = 0;

  // Iterate through the binary array from left to right
  for (let i = 0; i < binaryArray.length; i++) {
    // Multiply the binary digit by 2 raised to the power of its position from the right
    const digitValue = binaryArray[i] * Math.pow(2, binaryArray.length - 1 - i);
    // Add the calculated value to the decimal value
    decimalValue += digitValue;
  }

  // Return the final decimal value
  return decimalValue;
}
console.log(
  "-------------------------------2.3-----------------------------------"
);
//understanding the problem:
/*
1.finds the next integral perfect square after the one
passed as a parameter.
2. Recall that an integral perfect square is an integer n such that sqrt(n) is
also an integer.
3.If the parameter is itself not a perfect square then -1 should be returned. 
4.you may assume the parameter is positive.
Examples:
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
*/
//Chat GPT answer, I didn`t understand this section and still not!
function findNextSquare(number) {
  let sqrt = Math.sqrt(number);
  let notPerfectSquare = -1;

  if (notPerfectSquare === -1) {
    sqrt = sqrt + 1;

    if (Number.isInteger(sqrt * sqrt)) {
      notPerfectSquare = sqrt * sqrt;
    }
  }

  return notPerfectSquare;
}
console.log(findNextSquare(144));
console.log(findNextSquare(169));
console.log(findNextSquare(400));
console.log(findNextSquare(54));

console.log(
  "-------------------------------2.4-----------------------------------"
);
/*There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers
*/
