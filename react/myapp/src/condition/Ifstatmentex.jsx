import React from "react";

const Ifstatmentex = () => {
    const Persondetsils = ({ name, address }) => {
        if (address == "surat") {
            return <div>{name} true</div>
        }
        else {
            return <div>{name} false</div>
        }
    }
    return (
        <>
            <Persondetsils name="Heni" address="Navsari" />
            <Persondetsils name="jiya" address="surat" />
            <Persondetsils name="riya" address="Navsari" />
        </>
    )
}

export default Ifstatmentex