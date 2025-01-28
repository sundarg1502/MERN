import  {useState} from "react";

// class Counter extends Component{
//     render(){
//         return <h1>Hello</h1>
//     }
// }
// export default Counter
function Counter(){
    const [count, seCount] = useState(0);
    console.log(seCount)
    // var count = 0;
    const increment = ()=> {
        seCount(count+1);
        // count=count+1;
        return count
    }

    const decremanet = ()=>{
        if(count>0){
            seCount(count-1) ;
            // count--;
        }
        else{
            alert("Count cant go below Zero")
        }
    } 
    return (
        <div>
            <h1>{count} {increment}</h1>
            <button onClick={increment} >Plus</button>
            <button onClick={decremanet}>Minus</button>
        </div>
    )
}

export default Counter