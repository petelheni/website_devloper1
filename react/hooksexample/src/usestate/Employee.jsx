import React, { useState } from 'react'

const Employee = () => {
    const empdata = [
        { id: 1, name: "Jitesh", salary: 50000 },
        { id: 2, name: "Hemant", salary: 20000 },
        { id: 3, name: "Pooja", salary: 30000 },
        { id: 4, name: "Priti", salary: 25000 },
        { id: 5, name: "Jiya", salary: 35000 },
        { id: 6, name: "Mahesh", salary: 18000 },
    ]
    // first state for set initial data
    const [data, setData] = useState(empdata)
    // search from input
    const [search, setSearch] = useState("")
    // for filter data
    const [filterdata, setFilterdata] = useState(data)

    const filter_data = (e) => {
        let val = e.target.value
        setSearch(val)
        if (val) {
            let newdata = data.filter(items => items.salary > val)
            setFilterdata(newdata)
        } else {
            setFilterdata(data)
        }
    }
    return (
        <>
            search : <input type="search" name="search" value={search} placeholder='Search Here' onChange={filter_data} />
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterdata.map(items =>
                            <tr key={items.id}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.salary}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Employee