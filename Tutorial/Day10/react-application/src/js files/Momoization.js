function expensiveCalculation(n){
    console.log("Calculating.....")
    return 2*n
}

let cache = {};
function memoizedCalculation(n){
    // console.log(cache)
    if (cache[n]!==undefined){
        return cache(n);
    }
    cache[n] = expensiveCalculation(n);
    return cache[n];
}

console.log(memoizedCalculation(10))
// console.log(memoizedCalculation(5))