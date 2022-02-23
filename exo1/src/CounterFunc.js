import React, { useState } from 'react';

export default function CounterFunc(){
    const [counter, setCounter] = useState(0);
    return (
        <button className="btn btn-danger" onClick={() => setCounter(counter + 1)}>Clique aussi : {counter}</button>
    )
}