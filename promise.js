// the Promise is an object representing the eventually completness or
// failure of async operation.

let data = 2;
console.log(data);
data = 3;
setTimeout(() => {
  console.log(data);
});
data = 4;
console.log(data);

// example
// let willGetYouALion = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let rand = Math.random();
//     if (rand < 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 3000);
// });

// willGetYouALion.then(() => {
//   console.log("yes we ge a lion");
// });
// willGetYouALion.catch(() => {
//   console.log("no");
// });

// console.log(willGetYouALion);

// example #2
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };
// // let is_shop_open = true;
// let is_shop_open = false;

// let order = (time, work) => {
//   return new Promise((res, rej) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log("our shop is closed"));
//     }
//   });
// };
// // step 1
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   // step 2
//   .then(() => {
//     return order(0000, () => console.log("production has started"));
//   })

//   // step 3
//   .then(() => {
//     return order(2000, () => console.log("Fruit has been chopped"));
//   })

//   // step 4
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//     );
//   })

//   // step 5
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })

//   // step 6
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[1]}`)
//     );
//   })

//   // step 7
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
//   })

//   // Step 8
//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"));
//   })
//   .catch(() => {
//     console.log("Customer left");
//   })
//   .finally(() => {
//     console.log("end of day");
//   });
