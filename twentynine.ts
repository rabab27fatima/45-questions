// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favoriteFruits = ["Mango", "Banana", "Pineapple"];
if(favoriteFruits.includes("Mango")){
    console.log(`I would like to buy mango`);
}
else if(favoriteFruits.includes("Banana")){
    console.log(`I would like to buy banana`);
}
else{
    console.log(`This fruit is not available`);
}

// OR / Another way

// let availableFruits = "Mango";
// let availableFruits = "Pear";
// if(favoriteFruits.includes(availableFruits)){
//     console.log(`I would like to buy ${availableFruits}`);
// }
// else{
//     console.log(`This fruit is not available`);
// }
