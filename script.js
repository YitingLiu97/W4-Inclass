//learned from here https://nodejs.org/api/modules.html
// fs library 
// file system 
const fs = require ('fs');

//give tools file system's path to you 
// e.g.: Desktop/xx/xx/xx
const path = require('path');
const metalBandGenerator = require('metal-band-generator');
console.log(metalBandGenerator.getBandName());

// sync = synchronization
//
const content =fs.readFileSync('pizzaTopping.json');

let pizzaToppings=JSON.parse(content);
// console.log(pizzaToppings);


// let name ="Cassie";
// console.log(`Hello,${name}`);
