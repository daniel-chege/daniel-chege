"use strict";
// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
// Examples: 
// 8=> returns true
// 6=> returns false
function power2(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}
console.log(power2(8));
console.log(power2(6));
