import React, { useState } from "react"

function Counter() {

    const [count, isCount] = useState(0);
    const increment = () => {
        isCount(count + 1);
    }
    const decrement = () => {
        isCount(count - 1);
    }
    const reset = () => {
        isCount(0);
    }

    return(
        <div className="DivClass">
            <p className="p1">Hey</p>
            <p className="p2">Count = {count}</p>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={decrement}>Decremnet</button>  
        </div>
    );
}

export default Counter