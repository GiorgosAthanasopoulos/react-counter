import React, {useState} from "react";

import "../stylesheets/App.css";

export default function App(): JSX.Element {
    const [counter, setCounter] = useState(0);

    function incrementCounter(): void {
        setCounter(counter + 1);
    }

    function decrementCounter(): void {
        if(counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div id={"container"}>
                <h1>Counter: {counter}</h1>
                <button className={"button"} onClick={decrementCounter}>-</button>
                <button className={"button"} onClick={incrementCounter}>+</button>
            </div>
        </>
    );
};