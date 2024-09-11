//1.Queation
console.clear();

var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
Result = 'Today is a beautiful day In Hawaii.'
//Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.
console.log(Result)

//Ans:Today is a beautiful day In Hawaii.
//1.Queation end.....

//2.Question
for (let i = 5; i >= 1; i--) {
    let pattern = '';
    for (let j = 5; j >= 6 - i; j--) {
      pattern += j;
    }
    console.log(pattern);
  }
//output:
//54321
//5432
//543
//54
//5


// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
Input: [3, 2, 1, 4, 5, 45]
Output: [1, 2, 3, 4, 5, 45]


var arr = [3, 2, 1, 4, 5, 45];

// Sort the array in ascending order
arr.sort(function(a, b) {
  return a - b;
});

console.log(arr);
// Output: [1, 2, 3, 4, 5, 45]



// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
function areAnagrams(str1, str2) {
    // Convert both strings to lowercase, remove spaces, and sort their characters
    var sortedStr1 = str1.toLowerCase().split('').sort().join('').trim();
    var sortedStr2 = str2.toLowerCase().split('').sort().join('').trim();
    
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage
var str1 = "LISTEN";
var str2 = "SILENT";
console.log(areAnagrams(str1, str2));  // Output: true

str1 = "HELLO";
str2 = "JELLO";
console.log(areAnagrams(str1, str2));  // Output: false



// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH
function reverseString(str) {
    let reversedStr = '';
    
    // Loop through the string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return reversedStr;
}

// Example usage
var input = "Hello";
console.log(reverseString(input));  // Output: olleH


// Question 6:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.
function checkAlphabet(enteredAlphabet) {
    // Convert to lowercase to handle both uppercase and lowercase inputs
    var char = enteredAlphabet.toLowerCase();

    switch (true) {
        // Check if the character is a vowel
        case 'aeiou'.includes(char):
            console.log(enteredAlphabet + " is a vowel.");
            break;
        
        // Check if the character is a consonant
        case /^[a-z]$/.test(char):  // Regex to check if it's a valid alphabet
            console.log(enteredAlphabet + " is a consonant.");
            break;
        
        // If neither, it is not an alphabet
        default:
            console.log(enteredAlphabet + " is not an alphabet.");
    }
}

// Example usage
var enteredAlphabet = 'd';
checkAlphabet(enteredAlphabet);  // Output: "d is a consonant."

enteredAlphabet = 'A';
checkAlphabet(enteredAlphabet);  // Output: "A is a vowel."

enteredAlphabet = '1';
checkAlphabet(enteredAlphabet);  // Output: "1 is not an alphabet."




