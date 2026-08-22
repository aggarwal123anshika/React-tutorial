import { useState } from "react";

function Toogle() {
    const [display, setDisplay] = useState(true);
    return (
        <>
            <h1>Toogle in React JS</h1>
            <button onClick={() => setDisplay(!display)}>Toggle</button>

            {
                display ? <h1>Anshka Aggarwal</h1> : null
            }
        </>
    )
}
export default Toogle;