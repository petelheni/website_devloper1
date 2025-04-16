import React, { useEffect, useState } from 'react'


const Api = () => {

    const [data, getData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapiserver.reactbd.com/photos")
            .then(response => response.json())
            .then(data => getData(data))

    })

    return (
        <>
            <div className="container">
                <h2>Fake Store API Carts</h2>
                <table border={1} className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Thumbnail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(items =>
                                <tr key={items._id}>
                                    <td>{items._id}</td>
                                    <td>{items.title}</td>
                                    <td>
                                        <img src={items.url} alt="" className='setimg' />
                                    </td>
                                    <td>
                                        <img src={items.thumbnailUrl} alt="" className='setimg' />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Api