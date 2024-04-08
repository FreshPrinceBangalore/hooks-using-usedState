import React, { useState } from "react"

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployee, setIsEmployee] = useState(false);

    const updateName = () => {
        setName("AlbisAbelDas");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const decrementAge = () => {
        setAge(age - 1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployee(!isEmployee);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>SetName</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <br />
            <button onClick={decrementAge}>DecrementAge</button>
            <p>Is Employeed: { isEmployee ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent