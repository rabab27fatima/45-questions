// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size: number, label: string){
//     // return size+label;    
//     return `My shirt size is ${size} and label is ${label}`;
// }
// let myFunction = make_shirt(34, " The rainy day");
// console.log(myFunction);
// Another way from arrow function
let myFunction = (size, label) => {
    return size + label;
};
console.log(myFunction(34, " The rainy day"));
export {};
