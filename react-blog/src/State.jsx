import { useState } from "react";

function State() {
    const [fruit, setFruit] = useState("Apple");
    function handleFruit() {
        setFruit("grapes🍇");
    }
    return (
        <>
            <h1>State in React JS</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change Fruit</button>

        </>
    )
}
export default State;