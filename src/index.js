// index.js

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Function to capitalize the first letter of each word in a string
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  // Function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Function to calculate the factorial of a number
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  // Exporting functions for use in other modules
  module.exports = {
    reverseString,
    capitalizeWords,
    isEven,
    factorial
  };
  