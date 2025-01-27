// console.log("asdfsad")

// // var, let, const
// let x=10
// console.log(x)

// x="10"
// console.log(x)

// const m=10

// console.log(m)

function scope() {
    const x = 20
    console.log(x)
    if (true) {
        const x = 10
        console.log(x)
    }
    console.log(x)
}
// scope()

// function sum(...numbers){
//     var count = 0;
//     console.log(count);
//     for (let i in numbers){
//         console.log(typeof(parseInt(i)))
//         count+=parseInt(i)
//         console.log("iteration"+i+"Count "+count);
//     }
//     // console.log("sum"+ (numbers[5]+numbers[4]))

// }
// sum(1, 2, 3, 4)
// sum(1, 2, 3)
// console.log(2+6)

// Egma Script 6( ES6 )


// console.log("Start");

// setTimeout(()=>{
//     console.log("Processed ");
// });

// console.log("end");

// Prmoise In async
// console.log("Start")
// const fetchData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Data Fetched Succceccfully");  
//     },2000);
// });
// fetchData.then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log("Error")
// })

//Closure
/*
A Closure is a function that has access to its outer functions variable even after the outer function has returned 
*/
function outerFunction(outerVar){
    return function innerFunction(innerVar){
        console.log(`Outer Value : ${outerVar}`)
        console.log(`Inner Value : ${innerVar}`)
        return true
    }
}
// const closureFunc = outerFunction("Outer Value");
// console.log(closureFunc("Inner Value"));

// console.log(innerFunction("Sperate Value"))

// Currying

// It is the process of transforming a function with multipile arguments with a seires of function, 
// each taking a  single argument

// function multiply(a){
//     a++
//     console.log(a);
//     return function(b){
//         b++;
//         console.log(b)
//         return function(c){
//             return a*b*c;
//         };
//     };
// };
// const multi = multiply(10);
// console.log(multi)

// Prototype
//Example 1
// function Person(name,age){
//     this.name = name
//     this.age = age
// }
// const alice = new Person("Alice",40) ;
// console.log(alice.age)
// const alice2 = new Person("Alice @")
// console.log(alice2.age)

// Example 2
// function Person(name,age){
//     this.name = name
//     this.age = age
// }
// Person.prototype.greet = function(){
//     console.log(`Welcome ${this.name}!!! ${this.age}`)
// }
// const alice = new Person("Alice",40) ;
// alice.greet()
// console.log(alice)
// const alice2 = new Person("Alice @")
// console.log(alice2.age)

//  Nested Function
function outerFunction(){
    const outerVariable = "Outer"
    function innnerFunction(){
        console.log("Accessing innerfunction "+outerVariable)
    }
    console.log("Accessing innerfunction "+outerVariable)

    innnerFunction()
}
outerFunction()