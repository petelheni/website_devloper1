import React from 'react'

const RenderList = () => {

    const fruit = ["Apple", "Banana", "Orange", "Mango", "Grapes"]

    return (
        <>
            <h2> List of fruit Names </h2>
            <ul>
                {fruit.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}

            </ul>

        </>
    )
}

export default RenderList