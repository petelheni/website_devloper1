import React, { useState } from 'react'

const Example2 = () => {
    const [input, setInput] = useState({
        unmae: "",
        city: "",
    })

    const handleEvent = (e) =>
        setInput({ ...input, [e.target.name]: e.target.value })
}
return (
    <>
        Enter Ant Text : <input type="text" name="uname" value={input.unmae} onChange={handleEvent} />
        <br />
        Enter ctiy : <input type="text" name="city" value={input.city} onChange={handleEvent} />

        <p> You Enterd : {input.name}</p>
        <p> city : {input.city}</p>
    </>
)


export default Example2
