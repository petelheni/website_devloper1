
import React, { useState } from "react";

function Dynamicform() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <p>{text}</p>
        </div>
    );
}

export default Dynamicform;
