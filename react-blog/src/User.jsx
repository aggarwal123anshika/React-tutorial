import { useState } from "react";

function User() {
    const [counter, setCounter] = useState(0);
    return(
        <>
        <h1>Counter value:{counter}</h1>
        <button onClick={(e) => setCounter(counter+1)}>Increment Counter value</button>
        <button onClick={(e) => setCounter(counter-1)}>Decrement Counter Value</button>
        </>
    )
}
export default User;