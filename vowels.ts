// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2


function count(words:string): number{
    const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"]);
    let count = 0;
    for(let char of words ){
            if(vowels.has(char)){
                count++;
            }
        }
    return count;
}

let words = "Hello World"
let vowelCount = count(words);
console.log("vowel count is :${vowelCount}")