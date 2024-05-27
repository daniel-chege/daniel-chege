"use strict";
// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.
function generateFibonacci(length) {
    if (length <= 0)
        return [];
    let series = [0, 1];
    for (let i = 2; i < length; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return length === 1 ? [0] : series;
}
const lengthOfSeries = 12;
console.log(`Fibonacci series of length ${lengthOfSeries} is:`, generateFibonacci(lengthOfSeries));
