import { useEffect, useState } from "react";

let Sellers = () => {

    const [sellers, setSellers] = useState([])

    useEffect(() => {
    fetch("http://localhost:3000/seller")
    .then((response) => response.json())
    .then((data) => setSellers(data));
}, []);

    return(
        <>
        <h3>Sellers Placeholder Text</h3>
        {
        sellers.map((seller) => <div>{seller.firstName}</div>)
        }


        </>
    )
};
export default Sellers;
