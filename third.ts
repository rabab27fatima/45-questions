//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

//.toLowerCase() .toUpperCase() function
let person_name : string = "Rabab";
console.log("Lowercase: " + person_name.toLowerCase()); // + or , is use for "":"concodination
console.log("Uppercase: " + person_name.toUpperCase());
let title_case = person_name[0].toUpperCase() + person_name.slice(1).toLowerCase(); //
console.log("Titlecase: " + title_case);