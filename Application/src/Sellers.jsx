import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SellerForm from "./SellerForm";
import "./App.css"

let Sellers = () => {

    const isEmptyObj = (obj) => Object.keys(obj).length === 0;

    const [sellers, setSellers] = useState([])

    useEffect(() => {
    fetch("http://localhost:3000/seller")
    .then((response) => response.json())
    .then((data) => setSellers(data));
}, []);

    return(
        <>
        <h3>List of our current sellers</h3>
        
        <table border="1"  className='data-table'>
            <thead>
            <tr>
                <th>Seller Name</th>
                <th>Seller Address</th>
                <th>Seller Postcode</th>
                <th>Seller Contact Number</th>

            </tr>
            </thead>
            <tbody>
        {sellers.map((seller) => 

            <tr>
                <td>{isEmptyObj(seller.surname)? "No data" : `${seller.surname}`}, {isEmptyObj(seller.firstName)? "No data" : `${seller.firstName}`}</td>
                <td>{isEmptyObj(seller.address)? "No data" : `${seller.address}`}</td>
                <td>{isEmptyObj(seller.postcode)? "No data" : `${seller.postcode}`}</td>
                <td>{isEmptyObj(seller.phone)? "No data" : `${seller.phone}`}</td>

            </tr>

        
        )}
        <Link to="/create-new-seller"><input type="button" value="Add a new seller"/></Link>
        </tbody>
        <br/>
        </table>
        


        </>
    )
};
export default Sellers;
