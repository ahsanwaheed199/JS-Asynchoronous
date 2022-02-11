// javascript execution is single thread because it has only one call stack to execute.
// setinterval, settimeout, fetch they all are not the part of javascript its browser api
// javascript is single thread, synchoronous language

console.log("i am 1st");
alert("hello"); //blocking
console.log("i am second");
// blocking example 2
for (let i = 0; i < 10000; i++) {
  console.log(i);
}

console.log("i am first");
setTimeout(() => {
  console.log("i am fourth"); //after 7 sec, call back the function
}, 7000);

setTimeout(() => {
  console.log("i am third");
}, 3000);

console.log("i am second");
