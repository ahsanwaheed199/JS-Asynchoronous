// the newer way of making request via JS
// suport promises!
// not supported in interner explorer

// fetch return promise and we can use  two step for fetching API json() also return a promise
// 1st step is .then().json() and second is .then()

let data = fetch("http://dummy.restapiexample.com/api/v1/employee/1");
data
  .then((item) => {
    return item.json();
  })
  .then((result) => {
    console.warn("second argument", result);
  });

fetch("https://randomuser.me/api/?results=10")
  .then((response) => {
    response.json().then((data) => {
      Array(data);
      for (let results of data.results) {
        console.log(results.name);
      }
    });
  })
  .catch((err) => {
    console.log("something went wrong");
    console.log(err);
  });

// Examp # 2
// Chaining Fetch Request
// fetch("https://swapi.co/api/planets/")
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
//   })
//   .then((data) => {
//     console.log("FETCHED ALL PLANETS (first 10)");
//     const filmURL = data.results[0].films[0];
//     return fetch(filmURL);
//   })
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
//   })
//   .then((data) => {
//     console.log("FETCHED FIRST FILM, based off of first planet");
//     console.log(data.title);
//   })
//   .catch((err) => {
//     console.log("SOMETHING WENT WRONG WITH FETCH!");
//     console.log(err);
//   });

// Refactoring Fetch Chain
// const checkStatusAndParse = (response) => {
//   if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//   return response.json();
// };

// const printPlanets = (data) => {
//   console.log("Loaded 10 more planets...");
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
//   return fetch(url);
// };

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log("SOMETHING WENT WRONG WITH FETCH!");
//     console.log(err);
//   });
