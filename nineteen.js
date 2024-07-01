// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
// copied exercise
let guest_List3 = ["Azra", "Farah", "Luqman"];
let canNotAttend2 = "Luqman";
// console.log(canNotAttend2 + ' ' + "can't make the dinner");
let newPerson2 = "Badar";
guest_List3[guest_List3.indexOf(canNotAttend2)] = newPerson2;
guest_List3.forEach(name => {
    // console.log(`Dear, ${name} You're invited to dinner!.`);
});
// Here print your new message to your invited guest
guest_List3.forEach(name => {
    // console.log(`Dear, ${name} You're invited for a dinner.`);
});
// beginning guest
let name4 = "Mazhar";
guest_List3.unshift(name4);
// console.log(guest_List3)
// Middle guest
let name5 = "Fatima";
let index1 = guest_List3.length / 2;
guest_List3.splice(index1, 0, name5);
// end guest
let name6 = "Mirha";
guest_List3.push(name6);
// console.log(guest_List3)
// now print one more message to each guest
guest_List3.forEach(name => {
    // console.log(`Dear, ${name} you are invited for dinner`);
});
console.log(guest_List3.length + " " + "guest" + " " + "are invited for a dinner.");
export {};
