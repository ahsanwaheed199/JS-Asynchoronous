// callback are synchoronous in nature
// function greeting(name) {
//   alert("Hello " + name);
// }
// function processUserInput(callback) {
//   var name = prompt("Please enter your name.");
//   callback(name);
// }
// processUserInput(greeting);

// example #2
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
// let order = (call_production) => {
//   console.log("Order placed. Please call production");

//   // function 👇 is being called
//   call_production();
// };

// let production = () => {
//   console.log("Production has started");
// };
// // name 👇 of our second function
// order(production);

//
// 1st Function
let order = (fruit_name, call_production) => {
  setTimeout(function () {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    // Order placed. Call production to start
    call_production();
  }, 2000);
};
// 2nd Function
let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              //callback hell
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  });
};
// Trigger 👇
order(2, production);

// let btn = document.querySelector("button");

// const moveX = (element, amout, delay, callback) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amout}px)`;
//     if (callback) callback();
//   }, delay);
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000);
//     });
//   });
// });
