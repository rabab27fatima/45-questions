// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.



let magicianNames1 = ["Anzalna", "Danish", "Naeem", "Yasir", "Sarfaraz"];

// make copy of an array
let magicianNamesCopy = [...magicianNames1];

function show_magicians(greet: string){
    let withGreetings = "";

    for(let name of magicianNamesCopy){
        withGreetings += `${greet} ${name}\n`;
}
    return withGreetings
};

let myGreetings = show_magicians("Hi");
let makeArray = myGreetings.split(`\n`);
console.log(makeArray);

// for original array
console.log(magicianNames1);