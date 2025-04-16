import React, { useState } from 'react'
import Todos from './Todos'

const Showtodo = ({ todo, todocomplete, todoedit, tododelete }) => {
    const [newinput, setNewinput] = useState(todo.input)
    const [isEdit, setIsedit] = useState(false)

    const saveData = () => {
        todoedit(todo, newinput)
        setIsedit(false)
    }
    return (
        <>
            <div className="container pt-3">
                <div className='w-50'>
                    <div className="row g-2">
                        <div className="col-8">
                            {
                                isEdit ?
                                    <input type="text" className='form-control' value={newinput} onChange={(e) => setNewinput(e.target.value)} /> :
                                    <span
                                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                    >
                                        {todo.input}
                                    </span>
                            }
                        </div>
                        <div className="col-1">
                            <button className='btn btn-success' onClick={() => todocomplete(todo)}>
                                <i class="fa-solid fa-circle-check"></i>
                            </button>
                        </div>
                        <div className="col-1">
                            {
                                isEdit ?
                                    <button className='btn btn-primary' onClick={saveData}>
                                        <i class="fa-solid fa-check"></i>
                                    </button> :
                                    <button className='btn btn-primary' onClick={() => setIsedit(true)}>
                                        <i class="fa-solid fa-pen"></i>
                                    </button>
                            }
                        </div>
                        <div className="col-1">
                            <button className='btn btn-danger' onClick={() => tododelete(todo.id)}>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showtodo