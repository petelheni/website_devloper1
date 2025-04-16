import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import '../App.css'

const Showproduct = () => {
    const catlist = ["Cameras", "Leptop", "Mobile", "Accessories", "TV"]

    const [getdata, setGetdata] = useState([])
    // create state for fetch stored data 
    const [editdata, setEditdata] = useState(null)
    // create state which is excetly update data
    const [updatedata, setUpdatedata] = useState({})

    const fetchdata = () => {
        let get_data = JSON.parse(localStorage.getItem("productdata"))
        setGetdata(get_data)
    }
    useEffect(() => {
        fetchdata()
    }, [])

    const deleteData = (id) => {
        const dataremove = getdata.filter(items => items.id !== id)
        setGetdata(dataremove)
        localStorage.setItem("productdata", JSON.stringify(dataremove))
        fetchdata()
    }
    const handlechange = (e) => {
        const updatealldata = { ...updatedata, [e.target.name]: e.target.value }

        if (e.target.name == "oldprice" || e.target.name == "rate") {
            let price = parseFloat(updatealldata.oldprice)
            let dis = parseFloat(updatealldata.rate)
            if (price > 0 && dis > 0) {
                updatealldata.newprice = Math.round(price - (price * dis / 100))
            } else {
                updatealldata.newprice = ""
            }
        }
        setUpdatedata(updatealldata)
    }

    // for get data 
    const getalldata = (id) => {
        setEditdata(id)
        setUpdatedata(id)
    }

    // for update data 
    const handleUpdate = () => {
        const changedata = getdata.map(items => editdata.id === items.id ? updatedata : items)
        setUpdatedata(changedata)
        localStorage.setItem("productdata", JSON.stringify(changedata))
    }
    return (
        <>
            <Navigation />
            <div className="container py-5">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rate</th>
                            <th>Images</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map(items =>
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.category}</td>
                                    <td>{items.title}</td>
                                    <td>{items.description}</td>
                                    <td>
                                        <div>
                                            <s>₹{items.oldprice}</s>
                                        </div>
                                        <div>₹{items.newprice}</div>
                                    </td>
                                    <td>{items.rate}%</td>
                                    <td>
                                        <img src={items.image} alt="" className='imgsize' />
                                    </td>
                                    <td>
                                        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#updateData" onClick={() => getalldata(items)}>Edit</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => deleteData(items.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {/* for edit data */}
            <div className="modal fade" id="updateData" tabIndex="-1" aria-labelledby="updateDataLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updateDataLabel">Update Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="number" placeholder='Enter Id' className='form-control' value={updatedata.id} onChange={handlechange} name='id' readOnly />
                                    </div>
                                    <div className="col-12">
                                        <select name="category" value={updatedata.category} className='form-select' onChange={handlechange} required>
                                            <option value="">--- select Category ---</option>
                                            {
                                                catlist.map(list =>
                                                    <option value={list} key={list}>{list}
                                                    </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder='Title' className='form-control' value={updatedata.title} onChange={handlechange} name='title' required />
                                    </div>
                                    <div className="col-12">
                                        <textarea placeholder='Description' className='form-control' value={updatedata.description} onChange={handlechange} name='description' required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <input type="number" placeholder='Old Price' className='form-control' value={updatedata.oldprice} onChange={handlechange} name='oldprice' required />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" placeholder='Discount (in %)' className='form-control' value={updatedata.rate} onChange={handlechange} name='rate' required />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" placeholder='New Price' className='form-control' value={updatedata.newprice} onChange={handlechange} name='newprice' readOnly />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder='Image URL' className='form-control' value={updatedata.image} onChange={handlechange} name='image' required />
                                    </div>
                                    <div className="col-12">
                                        <button className='btn btn-primary w-100' type='submit' onClick={handleUpdate}>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showproduct