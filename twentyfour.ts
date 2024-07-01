// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Equality and inequality test
let myFriend = "Afreen";
console.log(myFriend == "Afreen"); // true (equal to)
console.log(myFriend !== "afreen"); // true (not equal to)

// Numerical test
let myNumber = 5;
console.log(myNumber == 5); // true
console.log(myNumber !== 5); // false
console.log(myNumber > 2); // true (greater than)
console.log(myNumber < 2); // false (less than)
console.log(myNumber >= 2); // true (greater than and equal to)
console.log(myNumber <= 2); // false (less than and equal to)

// Using and && ===== or || (using pipe sign) operator
let number1 = 5;
let number2 = 2;
console.log(number1 > 4 && number2 < 2); // false (both conditions have to correct in and && operator)

console.log(number1 > 4 || number2 < 2); // true (one condition have to correct in or || operator)

// Test whether an item in an array and whether an item is not in an array
let myArray = [1, 2, "Aliza"];
let myString = "Maheen";
console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myString)); // false