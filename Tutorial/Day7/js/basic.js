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


console.log("Start")
const fetchData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data Fetched Succceccfully");
    },2000);
});
fetchData.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("Error")
})
