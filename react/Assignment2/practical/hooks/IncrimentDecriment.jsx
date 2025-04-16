import React, { useState } from 'react'

const IncrementDecrement = () => {

    const [count, setcount] = useState("0")


    return (
        <>
            <div>
                <h2>{count}</h2>
                <button onClick={() => setcount(count + 1)}>Increment</button>
                <br />
                <button onClick={() => setcount(count - 1)}>Decrement</button>
            </div>

        </>
    )
}

export default IncrementDecrement