import React, { useState } from 'react'

const Student = () => {
    const stddata = [
        { rollno: 1, name: "Jitesh", per: "89%", grade: "A" },
        { rollno: 2, name: "Hemant", per: "86%", grade: "B" },
        { rollno: 3, name: "Pooja", per: "91%", grade: "A" },
        { rollno: 4, name: "Priti", per: "88%", grade: "C" },
        { rollno: 5, name: "Jiya", per: "89%", grade: "A" },
        { rollno: 6, name: "Mahesh", per: "81%", grade: "C" },
        { rollno: 7, name: "jayesh", per: "93%", grade: "B" },
        { rollno: 8, name: "mitesh", per: "83%", grade: "A" },
        { rollno: 9, name: "shivani", per: "80%", grade: "C" },
        { rollno: 10, name: "sneha", per: "89%", grade: "A" },
    ]

    const [data, setData] = useState(stddata)
    const [search, setSearch] = useState("")
    const [filterdata, setFilterdata] = useState(data)

    const filter_data = (e) => {
        let val = e.target.value
        setSearch(val)
        if (val) {
            let newdata = data.filter(items => items.grade > F)
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
                        <th>rollno</th>
                        <th>Name</th>
                        <th>per</th>
                        <th>grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterdata.map(items =>
                            <tr key={items.id}>
                                <td>{items.rollno}</td>
                                <td>{items.name}</td>
                                <td>{items.per}</td>
                                <td>{items.grade}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Student