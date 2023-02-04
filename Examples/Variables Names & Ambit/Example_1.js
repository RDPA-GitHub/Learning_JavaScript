// JavaScript - Example 1 (Use var)

var variable = 5;
// Scope
{
  console.log('inside', variable);
  var variable = 10;
}

console.log('outside', variable);
variable = variable * 2;
console.log('changed', variable);