import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        
        <table border="1">
            <thead>
            <tr>
                <td>Seller Name</td>
                <td>Seller Address</td>
                <td>Seller Postcode</td>
                <td>Seller Contact Number</td>

            </tr>
            </thead>
            <tbody>
        {sellers.map((seller) => 

            <tr>
                <td>{seller.surname}, {seller.firstName}</td>
                <td>{seller.address}</td>
                <td>{seller.postcode}</td>
                <td>{seller.phone}</td>

            </tr>

        
        )}
        </tbody>
        </table>
        


        </>
    )
};
export default Sellers;
