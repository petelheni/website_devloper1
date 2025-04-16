import React, { useState } from 'react'

const Adddata = ({ fetchdata }) => {
    const des = ["Software Developer", "Manager", "Worker", "Superwiser", "Peon"]
    const city = ["Surat", "Baroda", "Vapi", "Bharuch", "Valsad", "Navsari"]

    const [input, setInput] = useState({
        id: "",
        ename: "",
        designation: "",
        doj: "",
        salary: "",
        city: "",
        profile: ""
    })

    const handlechange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const submitdata = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3000/employee", {
            method: "POST",
            body: JSON.stringify(input)
        })

        if (res.ok) {
            alert("Data added successfully")
            setInput({
                id: "",
                ename: "",
                designation: "",
                doj: "",
                salary: "",
                city: "",
                profile: ""
            })
            fetchdata()
        }
    }
    return (
        <>
            <div className="container pt-3 pb-5">
                <h2>Add Data</h2>
                <form onSubmit={submitdata}>
                    <div className="row g-2">
                        <div className="col-4">
                            <input type="number" name="id" placeholder='Enter Id' className='form-control' onChange={handlechange} value={input.id} />
                        </div>
                        <div className="col-4">
                            <input type="text" name="ename" placeholder='Enter Name' className='form-control' onChange={handlechange} value={input.ename} />
                        </div>
                        <div className="col-4">
                            <select name="designation" className='form-select' onChange={handlechange} value={input.designation}>
                                <option value="">--- select Designation ---</option>
                                {
                                    des.map(des =>
                                        <option key={des} value={des}>{des}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-4">
                            <input type="date" name="doj" placeholder='Date of join' className='form-control' value={input.doj} onChange={handlechange} />
                        </div>
                        <div className="col-4">
                            <input type="number" name="salary" placeholder='Salary' className='form-control' value={input.salary} onChange={handlechange} />
                        </div>
                        <div className="col-4">
                            <select name="city" className='form-select' value={input.city} onChange={handlechange}>
                                <option value="">--- select City ---</option>
                                {
                                    city.map(des =>
                                        <option key={des} value={des}>{des}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-8">
                            <input type="text" name="profile" placeholder='Image URL' className='form-control' value={input.profile} onChange={handlechange} />
                        </div>
                        <div className="col-4">
                            <button className='btn btn-dark w-100'>Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Adddata