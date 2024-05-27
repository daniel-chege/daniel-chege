"use strict";
// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.
// Examples: 
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"
function capFirst(sentense) {
    const words = sentense.split("");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    words.join("");
    return capFirst(sentence);
}
let sentence = "Hello World";
let capitalizedSentense = capFirst(sentence);
console.log(capitalizedSentense);
