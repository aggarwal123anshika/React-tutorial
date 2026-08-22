import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrement() {
        setCount(count + 1);
    }
    function handledecrement() {
        setCount(count - 1);
    }
    function Update() {
        setCount(0);
    }
    return (
        <>
            <h1>Counter App:{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handledecrement}>Decrement</button>
            <button onClick={Update}>Reset</button>
        </>
    )
}
export default Counter;