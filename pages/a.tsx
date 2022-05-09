import type { NextPage } from 'next';
import { useState } from 'react';


const a: NextPage = () => {
    let [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}


export default a;