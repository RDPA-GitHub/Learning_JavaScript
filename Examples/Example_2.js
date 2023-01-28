// JavaScript - Example 2 (Use Let)

let variable = 5;

//Scope
{
  console.log('inside', variable); // ERROR, Let is NOT Global Variable
  let variable = 10;
}

console.log('outside', variable);

variable = variable * 2;

console.log('changed', variable);