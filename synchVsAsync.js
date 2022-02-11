// Synchoronous Example : Blocking

console.log(" I ");
alert("hello"); //block
console.log(" eat ");

console.log(" Ice Cream ");
// examp #2:
for (i = 0; i < 10000; i++) {
  console.log(i);
}

// Asynchoronous Example:
console.log("I");

// This will be shown after 2 seconds

setTimeout(() => {
  console.log("eat");
}, 0000);

console.log("Ice Cream");
