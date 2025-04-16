import { useEffect } from "react";
import { useState } from "react";

const useFatch = (url) => {
    const [data, getdata] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => getdata(data))
    }, [])

    return [data];

}
export default Unfatch