// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.


// Array as a parameter
function mySandwiches(...items: string []){
    return `I want to order sandwich of ${items}`
};

let collects = mySandwiches("Club", " Peanut butter", " Grilled", " Egg", " Cheese")
let collects1 = mySandwiches(" Italy", " Turkey")
let collects2 = mySandwiches(); // without argument
console.log(collects);
console.log(collects1);
console.log(collects2);