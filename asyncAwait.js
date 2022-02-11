// Axios: A librery for making https request
//Async function return promise
// Async/await helps you write synchronous-looking JavaScript code that works asynchronously.
//  is in an async function to ensure that all promises that are returned in the function are synchronized.
// With async/await, there's no use of callbacks.
// await keyword is not work without async function
// new Promise((res) => {
//   res("hello");
// }).then(console.log);

// console.log("world");

// with await keyword
// new Promise((res) => {
//   res("hello");
// }).then(console.log);

// new Promise((res) => {
//   res("hello");
// }).then((res) => console.log(3));

// console.log("world");

// function abd(ca) {
//   ca("hello", 4, 56, 6, 7);
// }
// abd((res, a, a, a, a, a) => console.log(res));

// // Example
// // Before async/await, to make a promise we wrote this:
// function order() {
//   return new Promise((resolve, reject) => {
//     // Write code here
//   });
// }
// // When we're using async/await, we use this format:
// //👇 Magical keyword
// async function kitchen(){

//   try{
// // Let's create a fake problem
//      await abc;
//   }

//   catch(error){
//      console.log("abc does not exist", error)
//   }

//   finally{
//      console.log("Runs code anyways")
//   }
// }

// kitchen()  // run the code

//
// example
// function toppings_choice() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you love?"));
//     }, 3000);
//   });
// }
// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");

//   await toppings_choice();

//   console.log("D");
//   console.log("E");
// }
// // Trigger the function

// kitchen();
// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking orders");
let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0000);
    console.log("production has started");

    await time(2000);
    console.log("fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log("customer left");
  }
}
