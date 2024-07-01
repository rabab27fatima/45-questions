// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames1 : string[] = ["Qarar", "Rukhsar", "Admin", "Zehra", "Samina", "Samiya"];

// Remove all usernames from an array.
userNames1 = [];
// console.log(userNames1);
if (userNames1.length > 0){
    for(let i = 0; i < userNames1.length; i++){
        if(userNames1[i] == "Admin"){
            console.log(`\n Hello ${userNames1[i]} Would you like to see a status report?\n`)
        }
        else{
            console.log(`Hello ${userNames1[i]} Thank you for logging in again!`)
        }
    }
}
else{
    console.log(`We need to find some users!`)
}