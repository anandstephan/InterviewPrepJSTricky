//https://www.youtube.com/watch?v=uhtmTe26rqo&t=2213s (Refer this video)

//Q1 Output Question

// console.log("A");
// setTimeout(() => {
//   console.log("B");
// });
// ["C", "D"].forEach((item) => console.log(item));
// console.log("E");

//Q2 output based question

// const obj = [
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
//   {
//     key: "Sample 2",
//     data: "Data2",
//   },
//   {
//     key: "Sample 3",
//     data: "Data1",
//   },
//   {
//     key: "Sample 4",
//     data: "Data1",
//   },
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
// ];
// //convert this output

// let output = {
//   "Sample 1": [
//     {
//       key: "Sample 1",
//       data: "Data1",
//     },
//     {
//       key: "Sample 1",
//       data: "Data1",
//     },
//     {
//       key: "Sample 1",
//       data: "Data1",
//     },
//   ],
//   "Sample 2": [],
//   "Sample 3": [],
//   "Sample 4": [],
// };

// let result = {};
// for (let i = 0; i < obj.length; i++) {
//   if (result[obj[i].key]) {
//     result[obj[i].key].push(obj[i]);
//   } else {
//     result[obj[i].key] = [obj[i]];
//   }
// }

// // obj.forEach((item) =>
// //   result[item.key] != undefined
// //     ? result[item.key].push(item)
// //     : (result[item.key] = [result[item]])
// // );
// console.log(result);

// Q3 Memoize function
// const add = (a, b) => a + b;

// const memoizeAdd = (fn, context) => {
//   const res = {};
//   return function (...args) {
//     let argsCache = JSON.stringify(args);
//     if (!res[argsCache]) {
//       res[argsCache] = fn.call(context || this, ...args);
//     }
//     return res[argsCache];
//   };
// };

// const sum = memoizeAdd(add);
// console.log(sum(2, 3));

//Q4 Flatten array
// const arr = [1, 2, 3, [4, [5, 6]], 7, 8];
// function flattenArray(arr, res) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") {
//       flattenArray(arr[i], res);
//     } else {
//       res.push(arr[i]);
//     }
//   }
// }

// const newresult = [];
// flattenArray(arr, newresult);
// console.log(newresult);
