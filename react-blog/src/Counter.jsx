// import { useState } from "react";

import { useEffect } from "react";

// function Counter() {
//     const [count, setCount] = useState(0);
//     function handleIncrement() {
//         setCount(count + 1);
//     }
//     function handledecrement() {
//         setCount(count - 1);
//     }
//     function Update() {
//         setCount(0);
//     }
//     return (
//         <>
//             <h1>Counter App:{count}</h1>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handledecrement}>Decrement</button>
//             <button onClick={Update}>Reset</button>
//         </>
//     )
// }
// export default Counter;






// USE EFFECT HOOK FOR LIFE CYCLE METHODS IN REACT JS

const Counter = ({count, data}) => {
    const handleCounter = () => {
        console.log("handleCounter called");
    }
    const handleData = () => {
        console.log("handleData called");
    }
    useEffect(() => {
        handleCounter();
    },[])

    useEffect(() => {
        handleData();
    }, [data,count])
    
    
    return (
        <div>
            <h1>Counter Value {count} Data value {data}</h1>
        </div>
    )
}
export default Counter;
