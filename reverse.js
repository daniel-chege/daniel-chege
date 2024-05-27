"use strict";
// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit 
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19
function reverseInt(num) {
    const revnumStr = Math.abs(num).toString().split('').reverse().join('');
    const reversedNum = parseInt(revnumStr, 10);
    return num < 0 ? -reversedNum : reversedNum;
}
console.log(reverseInt(500));
console.log(reverseInt(-56));
console.log(reverseInt(-90));
console.log(reverseInt(91));
