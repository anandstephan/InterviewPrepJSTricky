//Closure in js

//Question 1 //Guess the Output
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


//Question 3 // Time Optimization
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

//new Implmentation

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

//Question 4 //Guess the Output
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

//without let keyword 
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

//Question 5 //make the private variable
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

//Question 6 //What is Module Pattern(Definition with use case)

//Question 7 Once function polyfill

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

//Question 8 implmentation of memoize function

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

//Question 9 Explain Closure and scope with example of code


//+++++++++++++++++++++++++++++++++++POLYFILL+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//PolyFill 

//Question 1 // map Prototype
// Array.prototype.myMap = function(cb){
//     let newarr = []
//     for(let i=0;i<this.length;i++) newarr.push(cb(arr[i]))
//     return newarr
// }
// let arr = [1,2,3]
// const newarr = arr.myMap(item => item*2)
// console.log(newarr)

//Question 2 //Filter Prototype

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

// const arr = [1,2,3,4]
// arr.reduce(item => item)