// More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of 
// your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
// Exercise 15 copied.
let guest_List1 = ["Azra", "Farah", "Luqman"];
let canNotAttend = "Luqman";
// console.log(canNotAttend + ' ' + "can't make the dinner");
let newPerson = "Badar";
guest_List1[guest_List1.indexOf(canNotAttend)] = newPerson;
//guestList1.forEach(name => {
// console.log(`Dear, ${name} You're invited to dinner!.`);
// });
// Print new message to your invited guest
guest_List1.forEach(name => {
    console.log(`Dear, ${name} I found a bigger dinner so i invited more guest.`);
});
// beginning guest
let name1 = "Mazhar";
guest_List1.unshift(name1);
// Middle guest
let name2 = "Fatima";
let index = guest_List1.length / 2;
guest_List1.splice(index, 0, name2);
// end guest
let name3 = "Mirha";
guest_List1.push(name3);
// now print one more message to each guest
guest_List1.forEach(name => {
    console.log(`Dear, ${name} you are invited for dinner`);
});
export {};
