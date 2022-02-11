// let response = fetch("myImage.png"); // fetch is asynchronous
// let blob = response.blob(); // blocking  because it will throw an error
// // display your image blob in the UI somehow
// console.log("hello");

// There are two main types of asynchronous code style you'll come across in JavaScript code,
// old-style callbacks and newer promise-style code.

// callback disadvantabe is taht is makes relationships like parent, child, grandchild... (callback hell)
// promise chianing is .then(). then().then()... but its necessary to return something before move on to  anther thrn
// .catch is the error handling part

let add = (a, b, call) => {
  console.log(a + b);
  call();
};
let callback = () => {
  console.log("addition is performed");
};
new Promise((res) => {
  add(2, 2, callback);
});
console.log("test");

// if you want to work with peomises in he async await.then we use to declre async word before function
