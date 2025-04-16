import React from 'react'

const List = ({ designation, cities }) => {
    const des = ["Software Developer", "Manager", "Worker", "Superwiser", "Peon"]
    const city = ["Surat", "Baroda", "Vapi", "Bharuch", "Valsad", "Navsari"]

    return [des, city]
}

export default List