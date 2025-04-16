import React, { useState } from 'react'
import { Addtodos } from '../feature/Todoslice'
import { useDispatch } from 'react-redux';

const Addtodo = () => {
    const [input, setInput] = useState("");
    const dispath = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispath(AddTodos(input))
        alert("Data added successfully");
        setInput("")
    }

    return (
        <div>
            <div className="container py-3">
                <div className="row">
                    <div className="col-8">
                        <input type="text" placeholder="Enter todos...." className='form-control' value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={handleSubmit}>Add Todos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addtodos