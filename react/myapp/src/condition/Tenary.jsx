import React from "react";

const Tenary = () => {
    const Persondetsils = ({ name, address }) => {
        return (address == "surat") ?
            <div>{name} true</div>
            :
            <div>{name} false</div>

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