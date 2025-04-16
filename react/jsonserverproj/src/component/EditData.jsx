import React, { useState } from 'react'
import List from './List'

const EditData = ({ edit, editdata, fetchdata }) => {
    // const [edit,editdata] = useState()
    const des = ["Software Developer", "Manager", "Worker", "Superwiser", "Peon"]
    const city = ["Surat", "Baroda", "Vapi", "Bharuch", "Valsad", "Navsari"]

    const handlechange = (e) => {
        editdata({ ...edit, [e.target.name]: e.target.value })
    }

    const updateUserdata = async (e) => {
        e.preventDefault()

        await fetch(`http://localhost:3000/employee/${edit.id}`, {
            method: "PUT",
            body: JSON.stringify(edit)
        })
            .then(res => res.json())
            .then(data =>
                fetchdata(),
                editdata({})
            )
        alert("Updated successfully")
    }
    return (
        <>
            <div className="modal fade" id="updatedata" tabIndex="-1" aria-labelledby="updatedataLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updatedataLabel">Update Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-2">
                                    <div className="col-12">
                                        <input type="number" name="id" placeholder='Enter Id' className='form-control' value={edit.id} disabled />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="ename" placeholder='Enter Name' className='form-control' onChange={handlechange} value={edit.ename} />
                                    </div>
                                    <div className="col-12">
                                        <select name="designation" className='form-select' onChange={handlechange} value={edit.designation}>
                                            <option value="">--- select Designation ---</option>
                                            {
                                                des.map(des =>
                                                    <option key={des} value={des}>{des}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <input type="date" name="doj" placeholder='Date of join' className='form-control' value={edit.doj} onChange={handlechange} />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" name="salary" placeholder='Salary' className='form-control' value={edit.salary} onChange={handlechange} />
                                    </div>
                                    <div className="col-12">
                                        <select name="city" className='form-select' value={edit.city} onChange={handlechange}>
                                            <option value="">--- select City ---</option>
                                            {
                                                city.map(des =>
                                                    <option key={des} value={des}>{des}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="profile" placeholder='Image URL' className='form-control' value={edit.profile} onChange={handlechange} />
                                    </div>
                                    <div className="col-12">
                                        <button className='btn btn-dark w-100' onClick={updateUserdata}>Submit</button>
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

export default EditData