// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(size:string, label:string){
// return size+label
// }
// let myFunction = make_shirt("large", " I love typescript");
// console.log(myFunction)
// // making make_shirt size by default
// function make_shirt(label: string, size: string = "Large"){
//     return size + label
//     }
//     let myFunction = make_shirt(" I love typescript");
//     console.log(myFunction)
// // making medium by default
// function make_shirt(label: string, size: string = "Medium"){
//     return size + label
//     }
//     let myFunction = make_shirt(" I love typescript");
//     console.log(myFunction)
// making shirt of any size
function make_shirt(label, size = "Medium") {
    return size + label;
}
let myFunction = make_shirt(" Shirt of any size", "I love typescript");
console.log(myFunction);
export {};
