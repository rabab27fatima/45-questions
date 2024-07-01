//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14.
//  Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it 
// with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//Repeat an array called questlist with 3 people name you would like to invite to dinner.
let guestList = ["Azra", "Farah", "Luqman"];
//Store a person who can't attend dinner.
let can_not_attend = guestList[2];
//now print a message with person name.
console.log(can_not_attend + " " + "can not make the dinner");
//Save new person name who attend dinner in place of Luqman.
let new_person = "Badar";
// Replacing the name of the quest.
guestList[guestList.indexOf(can_not_attend)] = new_person;
// now print a message to all my list
guestList.forEach(name => {
    console.log(`Dear, ${name} You are invited to join us for a dinner.`);
});
export {};
