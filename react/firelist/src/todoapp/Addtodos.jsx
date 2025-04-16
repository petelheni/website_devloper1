import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

const Addtodos = () => {
    const [input, setInput] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (input !== "") {
            await addDoc(collection(db, "mylist"), {
                input,
                completed: false,
            });
            alert("Data added successfully")
            setInput("")
        }
    }
    return (
        <>
            <div className="container">
                <h2>Add todos</h2>
                <div className="row">
                    <div className="col-8">
                        <input type="text" name="" className='form-control' placeholder='Add todo' value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={handleSubmit}>Add List</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addtodos