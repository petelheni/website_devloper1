import React from 'react'
import { useSelector } from 'react-redux'

const Showtodo = () => {
    const todo = useSelector(state => state.todos.todos)

    return (
        <>
            <div className="container">
                <table className='table'>
                    <thead className='bg-primary'>
                        <tr>
                            <th>Todo List Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map(items =>
                                <tr key={items.id}>
                                    <td>{items.text}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showtodo