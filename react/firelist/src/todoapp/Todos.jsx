import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Showtodos from './Showtodos'
import { collection, onSnapshot, query, updateDoc, doc, deleteDoc } from 'firebase/firestore'

const Todos = () => {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        const qry = query(collection(db, "mylist"))
        const fetchmydata = onSnapshot(qry, (mydata) => {
            let myalldata = []
            mydata.forEach(items => {
                myalldata.push({ ...items.data(), id: items.id })
            })
            setTodo(myalldata)
        })
        return () => fetchmydata()
    }, [])

    const handleEdit = async (todo, input) => {
        if (input.trim()) {
            await updateDoc(doc(db, "mylist", todo.id), { input: input });
        }
    };

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "mylist", todo.id), {
            completed: !todo.completed,
        });
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "mylist", id));
    };
    return (
        <>
            {
                todo.map(items =>
                    <Showtodos
                        key={items.id}
                        todo={items}
                        todocomplete={toggleComplete}
                        todoedit={handleEdit}
                        tododelete={handleDelete} />
                    // <div>
                    //     <p>{items.id}</p>
                    //     <p>{items.input}</p>
                    //     <p>{items.complepted}</p>
                    // </div>
                )
            }
        </>
    )
}

export default Todos