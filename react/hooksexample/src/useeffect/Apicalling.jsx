import React, { useEffect, useState } from 'react'

const Apicalling = () => {
    const [user, setUsers] = useState([])
    useEffect(() => {
        const fetchapi = async () => {
            const result = await fatchapi("https://fakestoreapiserver.reactbd.com/users")
            const data = await result.json()
            setUsers(data)
        }
        fetchapi()
    })
    return (
    <>
            <table border={1} className='table>
        <thead>
         <tr>
            <th> ID </th>
            <th>Email</th>
            <th>address.city</th>
         </tr>
        </thead>
        <tbody>
            {user.map((person) => {
             <tr key   
            )}
        </tbody>

      
    </>
  )
}

export default Apicalling
