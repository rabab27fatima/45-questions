// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
//Array of favorite mode of transpotation
let transportation = ["motorbike", "bus", "car", "scooty", "rickshaw", "van", "cycle"];
// Print statement about each mode of transportation
transportation.forEach(name => {
    console.log(`"I would like to own a ${name}"`);
});
export {};
