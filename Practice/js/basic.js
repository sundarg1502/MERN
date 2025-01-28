// var x_y = 0
// console.log("safsd")
// console.log(x_y)
// x_y+1
// console.log(x_y)

// if (true){
//     const x=10
// }
// console.log(x)  // Throws error

// function test(){  
//     var x=undefined
//     console.log(x);
// }

// test()

// Operators

// x="10.34c45"
// y=1
// console.log(parseInt(x) + y)

// String Conversion

// number/float + ""   => empty str
// variable.toString()
// String(variable)

// String => " "  ' '   ` `

// Operator

// Array
const arr = new Array()
arr[0] = 10
arr[1] = 20
arr[2]=30
arr[3] = 40
arr[10] = 100
// console.log(arr)

// const arr2 =  Array.from(arr)
// console.log(arr2.length)
// console.log(arr2)

// Array methods 
// const random = [1,2,"xxx",true]
// random.push(10)           // Push the element to the end 
// random.unshift("Start")  // Push element to the start of the index
// console.log(random)

// random.pop()            // pop the last element
// random.shift()        // pop the first elemnt
// console.log(random)

// console.log(random.indexOf(100))

// //  Concatenation
// // const arrConcat = arr.concat(random) 
// // const arrPlus = arr+random
// // console.log(arrConcat)
// // // console.log(typeof(arrPlus))
// // console.log(arrPlus)
// // console.log(arrConcat.indexOf("xxx"))
// // console.log(arrConcat.indexOf(40))

// // Slicing and Splicing

// const sliceArr = random.slice(2,5)
// console.log(sliceArr)

// const splicearr = random.splice(1,2)  // removing the element form the arr and store them in the var
// console.log(splicearr)
// console.log(random)

// Spread (mostly used to copy the array)  x=[1,2,3,4] y=[...x]
var [x,y] = [1,2]
console.log(x)
var z= [1,2,3]
var [x,...y]=[1,2,3,4,5,6]  // ... spread oprator 
console.log(typeof(x),typeof(y),typeof(z))  