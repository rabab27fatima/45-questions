// Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know 
// you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, 
// letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
let guest_List2 = ["Azra", "Farah", "Luqman"];
let canNotAttend1 = "Luqman";
// console.log(canNotAttend1 + ' ' + "can't make the dinner");
let newPerson1 = "Badar";
guest_List2[guest_List2.indexOf(canNotAttend1)] = newPerson1;
guest_List2.forEach(name => {
    // console.log(`Dear, ${name} You're invited to dinner!.`);
});
// Here print your new message to your invited guest
guest_List2.forEach(name => {
    // console.log(`Dear, ${name} You're invited for a dinner.`);
});
// beginning guest
let name4 = "Mazhar";
guest_List2.unshift(name4);
// Middle guest
let name5 = "Fatima";
let index1 = guest_List2.length / 2;
guest_List2.splice(index1, 0, name5);
// end guest
let name6 = "Mirha";
guest_List2.push(name6);
// now print one more message to each guest
guest_List2.forEach(name => {
    // console.log(`Dear, ${name} you are invited for dinner`);
});
// Print first line of exercise 17
console.log("I have only capacity of two guests");
//Remove guest through pop and while loop
console.log(guest_List2);
while (guest_List2.length > 2) {
    let removeGuest = guest_List2.pop();
    // Print message for those who are not invited
    console.log(`Dear, ${removeGuest} Sorry, I can't invite you for a dinner`);
}
// Print message for those who are still invited
guest_List2.forEach(name => {
    console.log(`Dear ${name} You are still invited to dinner`);
});
// Create empty list and print it
guest_List2.pop();
guest_List2.pop();
console.log(guest_List2);
export {};
