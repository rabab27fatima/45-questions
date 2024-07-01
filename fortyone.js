// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicianNames = ["Anzalna", "Danish", "Naeem", "Yasir", "Sarfaraz"];
function show_magicians() {
    for (let name of magicianNames) {
        console.log(name);
    }
}
;
show_magicians();
export {};
