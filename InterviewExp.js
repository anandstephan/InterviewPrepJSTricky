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


//+++++++++++++++++++++++++++Second Video++++++++++++++++++++++
//https://www.youtube.com/watch?v=_tNErId8xlc&list=PL4CFloQ4GGWIXCJJHwT6FPb5yVZcybuQW&index=2
// Question 1 Guess the output
// let obj = {
//     helloWorld:function(){
//         console.log('Hi World',this.name)
//     },
//     name:"Anand"
// }
// let obj2 = {
//     helloWorld:obj.helloWorld.bind(obj),
//     name:"stephan"
// }
// obj2.helloWorld()

//Question 2 complete the function compute

function compute(amount){
    this.total = amount
    this.lacs= function(amt){
        this.total +=amt
        return this
    }
    this.crore= function(amt){
        this.total +=amt
        return this
    }
    this.thousand= function(amt){
        this.total +=amt
        return this
    }
    this.value = function(){
        return this.total.toString()
    }
    return this
}

// console.log(compute(300).crore(200).lacs(2).thousand(44).value())

//function to mimmic two way binding

let input = document.getElementById("input")

let uibindObj = {
    value:"test"
}
let heading = document.getElementById("heading")
heading.innerText = uibindObj.value

function changeObjValToInput(state,input){
    Object.defineProperty(state,'value',{
        get(){
            return state.value
        },
        set(newVal){
                console.log("newval",this)
                input.value = newVal
                state.value = newVal    
                console.log("af",this)
            return;
        }
    })

    input.addEventListener("input",function(e){
        // console.log(e.target.value)
        uibindObj.value = e.target.value
    })
}
changeObjValToInput(uibindObj,input)