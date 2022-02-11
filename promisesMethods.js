// Promise.all:if all true then print all atherwise if any one of them reject it print only the rejected one

let data = Promise.all([
  new Promise((res, rej) => {
    setTimeout(() => {
      res("2 seconds");
    }, 2000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("1 second");
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("4 second");
    });
  }, 4000),
]);

data
  .then((item) => {
    console.warn("then block", item);
  })
  .catch((err) => {
    console.warn("catch block", err);
  }); //output: catch block 4 second

// Promise.allSettled return all the promises

let data1 = Promise.allSettled([
  new Promise((res, rej) => {
    setTimeout(() => {
      res("2 seconds");
    }, 2000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("1 second");
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      rej("4 second");
    });
  }, 4000),
]);

data1
  .then((item) => {
    console.warn("then block", item);
  })
  .catch((err) => {
    console.warn("catch block", err);
  }); //output:
//   (3) [{…}, {…}, {…}]
//   0: {status: 'fulfilled', value: '2 seconds'}
//   1: {status: 'fulfilled', value: '1 second'}
//   2: {status: 'rejected', reason: '4 second'}

// promise1.race: The Promise.race() method returns a promise that fulfills or rejects as soon as
// one of the promises in an iterable fulfills or rejects,
//  with the value or reason from that promise.
let data2 = Promise.race([
  new Promise((res, rej) => {
    setTimeout(() => {
      res("2 seconds");
    }, 2000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("1 second");
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("5 seconds");
    }, 5000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("3 seconds");
    }, 3000);
  }),
]);

data2
  .then((item) => {
    console.warn("then block", item);
  })
  .catch((err) => {
    console.warn("catch block", err);
  }); //output:  then block 1 second

//   exmp # 2
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"

let data = 3;
console.log(data);
data = 4;
setTimeout(() => {
  console.log(data);
}, 2000);
data = 6;
console.log(data);
