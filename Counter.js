import React, {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);
const handleClick1 = () => {setCounter(counter + 1);};

const handleClick2 = () => {setCounter(counter - 1);};

const reset = () => setCounter(0);

return(
    <div>
        <h2>Counter : {counter}</h2>
        <button onClick={handleClick1}>increment</button>
        <button onClick={handleClick2}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
);
};

export default Counter;

