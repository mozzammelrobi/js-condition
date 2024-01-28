// ternary is alternative of if-else or( shorthand)

// Syntax: condition ? <expression if true> : <expression if false>

let age = 20;
if (age >= 18) {
    console.log('you are voter')
}
else {
    console.log('you are not voter')
}

// shorthand of above if-else condition

age >= 19 ? console.log('You are voter') : console.log('you are not voter')

/* -------------OR------------------- */

const bote = age >= 18 ? "you are not voter " : "you are not a voter"
console.log(bote)




// more example
let price = 200;
 price >= 200 ? console.log('you can buy ') : console.log("you cann't buy")


 const isLeader = true;
 let dam = 500;
  dam = isLeader == true ? 0 : dam + 100 ;
  console.log(dam)
