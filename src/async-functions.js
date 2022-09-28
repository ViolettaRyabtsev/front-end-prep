// const promise1 = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("stuffed work");
//   }

//   reject("stuffed didint work");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout((resolve) => {
//     console.log("hi 2");
//   }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout((resolve) => {
//     console.log("hi 3");
//   }, 1000);
// });
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout((resolve) => {
//     console.log("hi 4 is it me ?");
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//   console.log(values);
// });

// const api = [
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
//   "https://jsonplaceholder.typicode.com/users",
// ];

// const promise = new Promise((resolve, reject) => {
//   setTimeout((resolve) => {
//     console.log("hi");
//   }, 2000);

//   throw Error;
// })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//async await

//async function return promise

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((value) => console.log(value));

// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
// }

// es 9 2018
const animals = {
  tiger: 23,
  lion: 5,
  bird: 24,
};

// const { tiger, lion, ...rest } = animals;
// console.log(rest, "obj");

// const api = [
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
//   "https://jsonplaceholder.typicode.com/users",
// ];

// finally

// Promise.all(
//   api.map((url) => {
//     return fetch(url).then((response) => response.json());
//   })
// )
//   .then((array) => {
//     console.log(array[0]);
//     console.log(array[1]);
//     console.log(array[2]);
//   })
//   .finally(() => console.log("extra"));

//for await of etarate through await promises

// const getDataAll = async () => {
//   try {
//     const [users, posts, albums] = Promise.all(
//       api.map((url) => fetch(url)).then((response) => response.json())
//     );
//     console.log(users);
//     console.log(posts);
//     console.log(albums);
//   } catch (err) {
//     console.log(err);
//   }
// };

function getDataToo() {
  //   const arrayOfPromices = api.map((url) => fetch(url));
  //   for await (let request of arrayOfPromices) {
  //     const data = await request.json();
  //     console.log(data);
  //   }
}
// getDataToo(1, 2, 3);

// const multiplyBy = (num1) => {
//   console.log(num1, "num1");
//   return function (num2) {
//     console.log(num2, "num2");
//     return num1 * num2;
//   };
// };

// const multiplyByTwo = multiplyBy(2);

// console.log(multiplyByTwo(8));

// function a() {
//   let grandpa = "grandpa";
//   return function b() {
//     let father = "father";
//     return function c() {
//       let son = " son ";
//       return `${grandpa} > ${father} > ${son}`;
//     };
//   };
// }

// console.log(a()()());

// function callMeMaybe() {
//   setTimeout(() => {
//     console.log(callMe);
//   }, 4000);
//   const callMe = "hi im now here";
// }

// console.log(callMeMaybe());

//memory efficient
// encapsulation

// function heavyDuty(index) {
//   const bigArray = new Array(200).fill(":");
//   console.log("created");
//   return bigArray[index];
// }

// console.log(heavyDuty(2));
// console.log(heavyDuty(2));
// console.log(heavyDuty(2));
// console.log(heavyDuty(2));

// function heavyDuty2() {
//   const bigArray = new Array(200).fill(":");
//   console.log("created again");
//   return function (index) {
//     return bigArray[index];
//   };
// }

// const getheavyDuty = heavyDuty2();

// console.log(getheavyDuty(3));
// console.log(getheavyDuty(6));

//encapsulation

// const makeNuclearButton = () => {
//   let timeWithoutDestruction = 0;

//   const passTime = () => timeWithoutDestruction++;

//   const totalPeace = () => {
//     return timeWithoutDestruction;
//   };

//   const launch = () => {
//     timeWithoutDestruction = -1;
//     return "boom";
//   };

//   setInterval(passTime, 1000);

//   return {
//     launch: launch,
//     totalPeace: totalPeace,
//   };
// };

// const ohno = makeNuclearButton();
// console.log(ohno.totalPeace());

// let view;

function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      called++;
      let view = "🏔";
      console.log("view has been set!", view);
    }
  };
}

const start = initialize();
console.log(start());
console.log(start());
console.log(start());
console.log(start());

const get = (num) => (number) => num + number;

console.log(get(2)(5));
