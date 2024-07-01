// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified
let magicianNames = ["Anzalna", "Danish", "Naeem", "Yasir", "Sarfaraz"];
function show_magicians(greet) {
    for (let name of magicianNames) {
        console.log(greet, name);
    }
}
;
show_magicians("Hi, Hope you are doing great");
export {};
