import React, { useState } from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

const Productpage = () => {
    const catlist = ["Cameras", "Leptop", "Mobile", "Accessories", "TV"]

    const [input, setInput] = useState({
        id: "",
        category: "",
        title: "",
        description: "",
        oldprice: "",
        rate: "",
        newprice: "",
        image: "",
    })
    const handlechange = (e) => {
        // setInput({ ...input, [e.target.name]: e.target.value })
        const updatedata = { ...input, [e.target.name]: e.target.value }

        if (e.target.name == "oldprice" || e.target.name == "rate") {
            let price = parseFloat(updatedata.oldprice)
            let dis = parseFloat(updatedata.rate)
            if (price > 0 && dis > 0) {
                updatedata.newprice = Math.round(price - (price * dis / 100))
                console.log(updatedata.newprice);
            } else {
                updatedata.newprice = ""
            }
        }
        setInput(updatedata)
    }
    const handleprosubmit = (e) => {
        e.preventDefault()
        let getdata = JSON.parse(localStorage.getItem("productdata")) || []
        getdata.push(input)
        localStorage.setItem("productdata", JSON.stringify(getdata))
        alert("Data added successfully")

        setInput({
            id: "",
            category: "",
            title: "",
            description: "",
            oldprice: "",
            rate: "",
            newprice: "",
            image: "",
        })
    }


    return (
        <>
            <Navigation />

            <div className="container py-3">
                <h5 className='bg-dark text-white p-3'>Add Product</h5>

                <form className='pt-3' onSubmit={handleprosubmit}>
                    <div className="row g-3">
                        <div className="col-4">
                            <input type="number" placeholder='Enter Id' className='form-control' value={input.id} onChange={handlechange} name='id' required />
                        </div>
                        <div className="col-4">
                            <select name="category" value={input.category} className='form-select' onChange={handlechange} required>
                                <option value="">--- select Category ---</option>
                                {
                                    catlist.map(list =>
                                        <option value={list} key={list}>{list}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-4">
                            <input type="text" placeholder='Title' className='form-control' value={input.title} onChange={handlechange} name='title' required />
                        </div>
                        <div className="col-12">
                            <textarea placeholder='Description' className='form-control' value={input.description} onChange={handlechange} name='description' required></textarea>
                        </div>
                        <div className="col-4">
                            <input type="number" placeholder='Old Price' className='form-control' value={input.oldprice} onChange={handlechange} name='oldprice' required />
                        </div>
                        <div className="col-4">
                            <input type="number" placeholder='Discount (in %)' className='form-control' value={input.rate} onChange={handlechange} name='rate' required />
                        </div>
                        <div className="col-4">
                            <input type="number" placeholder='New Price' className='form-control' value={input.newprice} onChange={handlechange} name='newprice' readOnly />
                        </div>
                        <div className="col-8">
                            <input type="text" placeholder='Image URL' className='form-control' value={input.image} onChange={handlechange} name='image' required />
                        </div>
                        <div className="col-4">
                            <button className='btn btn-primary w-100' type='submit'>Add</button>
                        </div>
                        <div className="col-12 text-center">
                            <h4>
                                <Link to="/Home/Showproduct">Show Product</Link>
                            </h4>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Productpage