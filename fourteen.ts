// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

// Create an array called questlist with 3 people name you would like to invite to dinner.
let guest_list : string[] = ["Azra", "Farah", "Luqman"];

//Print dinner invitation message to each person in the list.
guest_list.forEach(person => {
    console.log(`Dear${person},\nYou are cordially invited to join us for a delightful evening of good food and great company at our home.`);
});