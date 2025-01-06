// Closure in js

// Question 1 //Guess the Output
// let count = 0;
// (function printCount(){
//     if(count===0){
//         let count = 1
//         console.log(count)
//     }
//     console.log(count)
// })();

// var a = 0;
// var b=1;
// (function printa(){
//     if(a===0){
//        var  a = 1
//         console.log(a)
//     }
//     console.log(a,b)
// })()

// Question 2 implmentation of createBase

// let addSix = createBase(6)
// let x = addSix(10) // return 16
// let y = addSix(21) // return 27
// console.log(x,y)

// function createBase(y){
//     return (x)=>{
//         return x+y
//     }
// }

// Question 3 // Time Optimization
// function find(index){ //Old Implmentation
//     let a = []
//     for(let i=0;i<10000000;i++){
//         a[i] = i*i
//     }
//     console.log(a[index])
// }

// console.time("6")
// find(6);
// console.timeEnd("6")

// console.time("50")
// find(50)
// console.timeEnd("50")

// new Implmentation

// function find(){
//     let a = []
//     for(let i=0;i<1000000;i++){
//         a[i] = i*i
//     }
//    return function(index){
//     console.log(a[index])
//    }
// }

// let closure = find()

// console.time("6")
// closure(6);
// console.timeEnd("6")

// console.time("50")
// closure(50)
// console.timeEnd("50")

// Question 4 //Guess the Output
// function a(){
//     for(var i=0;i<=5;i++){
//         setTimeout(()=>console.log(i),i*1000)
//     }
// }
// With Let keyword
// function a(){
//     for(let i=0;i<=5;i++){
//                 setTimeout(()=>console.log(i),i*1000)
//             }
//         }

// without let keyword
// function a(){
//     for(var b=0;b<=5;b++){
//         console.log(b)
//         inner(b)
//     }

//     function inner(i){
//         setTimeout(()=>console.log(i,b),i*1000)
//     }
// }
// a() // important point console with b and without b

// Question 5 //make the private variable
// function counter(){
//     var _count=0

//     function add(increment){
//         _count+=increment
//     }
//     function retrive(){
//         return `Counter  ${_count}`
//     }
//     return {add,retrive}
// }

// const c = counter()
// c.add(3)

// Question 6 //What is Module Pattern(Definition with use case)

// Question 7 Once function polyfill

// function once(fn,context){
//     let ran;
//     return function(){
//         if(fn){
//             ran = fn.apply(context || this,arguments)

//             fn=null
//         }
//         return ran;
//     }
// }

// const sayHi = once(() =>{
//     console.log("hi")
//     return 2
// })
// sayHi()
// console.log(sayHi())
// console.log(sayHi())
// console.log(sayHi())

// Question 8 implmentation of memoize function

// const memoizedFn = function(fn,context){
//     const res = {}
//     return function(...args){
//         let argsCache = JSON.stringify(args)
//         if(!res[argsCache]){
//             res[argsCache] = fn.call(context || this,...args)
//         }
//         return res[argsCache]
//     }
// }

// const clumssyProduct=(a,b)=>{
//     for(let i=0;i<100000000;i++){

//     }
//     return a*b;
// }

// const testFn = memoizedFn(clumssyProduct)

// console.time("Start")
// console.log(testFn(3,5))
// console.timeEnd("Start")

// console.time("Start")
// console.log(testFn(3,5))
// console.timeEnd("Start")

// Question 9 Explain Closure and scope with example of code

// +++++++++++++++++++++++++++++++++++POLYFILL+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// PolyFill

// Question 1 // map Prototype
// Array.prototype.myMap = function(cb){
//     let newarr = []
//     for(let i=0;i<this.length;i++) newarr.push(cb(arr[i]))
//     return newarr
// }
// let arr = [1,2,3]
// const newarr = arr.myMap(item => item*2)
// console.log(newarr)

// Question 2 //Filter Prototype

// Array.prototype.myFilter = function(cb){
//     let newarr = []
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i])){
//             newarr.push(this[i])
//         }
//     }
//     return newarr
// }

// let arr = [1,2,3,4,5,6,7,8]

// console.log(arr.myFilter(item => item%2==0?true:false))

// Question 3 // Reduce Prototype

// const arr = [1, 2, 3, 4];

// Array.prototype.myReduce = function (cb, initial) {
//   let acc = initial;
//   let result = acc;
//   for (let i = 0; i < this.length; i++) {
//     result = cb(result, this[i]);
//   }
//   return result;
// };

// const result = arr.myReduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(result);

// +++++++++++++++++++++++++++Function++++++++++++++++++++++++++++

// Question 1 Guess the output
// (function (x) {
//   return (function (y) {
//     console.log(y);
//   })(2);
// })(1);

// Question 2 Guess the output
// for (let i = 0; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// Question 3 Example of spread operator in the context of function

// function multiply(num1, ...num2) { // num2 using rest operator to take all the value in the array
//   console.log(num1, num2);
//   return num1 * num2;
// }

// const arr = [5, 6];
// console.log(multiply(4, ...arr)); // important point spread operator is always the second parameter in the function call()

// Question 4 Output Question
// const fn = (a,...num,x,y) =>{
//     console.log(a,...nums)
// }
// const fn = (a, x, y, ...num) => {
//   console.log(a, x, y, num);
// };
// fn(1, 2, 4, 5, 8);

// +++++++++++++++++++++++++++++++++++This keyword++++++++++++++++++++++++
// Question 1 Guess the Output
// const user = {
//   firstName: "steve",
//   getName() {
//     const firstName = "kruzz";
//     return this.firstName;
//   },
// };
// console.log(user.getName());

// Question 2 Guess the Output

// function makeUser() {
//   return {
//     name: "steve",
//     ref: this,
//     nmFn: function () {
//       return this;
//     },
//     arrFn: () => this,
//   };
// }

// let user = makeUser();
// console.log(user);

// Question 3  Guess the Output
// const user = {
//   name: "Steve",
//   logMessage() {
//     console.log(this);
//   },
// };
// setTimeout(user.logMessage, 1000);
// Solution
// setTimeout(user.logMessage.bind(user), 1000);
// setTimeout(() => user.logMessage(), 1000);
// setTimeout(function () {
//   user.logMessage();
// }, 1000);

// Question 4
// const user = {
//   name: "steve",
//   greet() {
//     return `Hello ${this.name}`;
//   },
//   farewell: () => {
//     return `Hello ${this.name}`;
//   },
// };

// console.log(user.greet());
// console.log(user.farewell());

// Question 5

// var length = 4;

// function callback() {
//   console.log(this.length);
// }

// const obj = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };
// obj.method(callback);

// Question 6

// let calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   sub(s) {
//     this.total -= s;
//     return this;
//   },
//   mul(m) {
//     this.total *= m;
//     return this;
//   },
//   div(d) {
//     this.total /= d;
//     return this;
//   },
// };

// const result = calc.add(5).sub(4).mul(10).div(2);
// console.log(result.total);

// +++++++++++++++++++++Object++++++++++++++++++++++++++++++++++++++++

// Question 1 Create a function multiplyByTwo(obj) that multpiles all numeric property values of nums by 2

// let nums = {
//   a: 100,
//   b: 200,
//   c: "My Object",
// };

// function multiplyByTwo(nums) {
//   for (val in nums) {
//     if (typeof nums[val] === "number") nums[val] = nums[val] * 2;
//   }
// }
// multiplyByTwo(nums);
// console.log(nums);

// Question 2  Guess the output

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// Question 3 Guess the output
// console.log([..."steve"]);

// Question 4 Guess the output
// const user = { name: "steve", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

// Question 5 Guess the output
// const settings = {
//   username: "piyush",
//   level: 19,
//   health: 90,
// };
// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(settings);

// Question 6 Guess the output
// function getItems(fruitList, favoriteList, ...args) {
//   return [...fruitList, ...args, favoriteList];
// }

// console.log(getItems(["banana", "apple"], "pears", "orange", "chowmein"));

// Question 7 Guess the output
// let c = { greeting: "hi" };
// let d;
// d = c;
// c.greeting = "hello";
// console.log(d.greeting);

// Question 8 Guess the output
// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });

// Question 9 Guess the output //Confuision
// let person = { name: "Steve" };
// const member = [person];
// person = null;
// person.name=null

// console.log(member);

// Question 10 Guess the output //Confusion
// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// Question 11 What is shallow copy and deep copy

// let user = {
//   name: "Steve",
//   salary: "1cr",
// };
// Object.Assign
// let newObj = Object.assign({}, user); // Note : This will not clone nested Object
// newObj.name = "Anand";
// console.log(newObj, user);

// JSON.stringify and JSON.parse method
// let newObj = JSON.parse(JSON.stringify(user));
// newObj.name = "Anand";
// console.log(newObj, user);

// Rest Operator
// const newObj = { ...user };
// newObj.name = "Anand";
// console.log(newObj, user);

// Question 12 Guess the output confusion

// function changeAgeAndRef(person) {
//   person.age = 25;
//   person = {
//     name: "john doe",
//     age: 50,
//   };
//   return person;
// }

// const person1 = {
//   name: "Alex",
//   age: 50,
// };

// const person2 = changeAgeAndRef(person1);
// console.log(person1, person2);
