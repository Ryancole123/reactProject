import { useEffect, useState } from "react";
import "./App.css"
import SellerModalForm from "./SellerModalForm";
import { Button } from "react-bootstrap"

let Sellers = () => {

    const isEmptyObj = (obj) => Object.keys(obj).length === 0;

    const [showModal, setShowModal] = useState(false);
    const [sellers, setSellers] = useState([])

    useEffect(() => {
    fetch("http://localhost:3000/seller")
    .then((response) => response.json())
    .then((data) => setSellers(data));
}, []);


const fetchSellers = () => {
    fetch("http://localhost:3000/seller")
        .then((response) => response.json())
        .then((data) => setSellers(data));
};

    useEffect(() => {
        fetchSellers();
    }, []);


    //Comment test
    return(
        <>
        <h3 className='headerline'>List of our current sellers:</h3>
        
        <table  className='data-table'>
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
        {/* <Link to="/create-new-seller"><input type="button" className='submit-button' value="Add a new seller"/></Link> */}
        <br/>
        <SellerModalForm 
            show={showModal} 
            handleClose={() => setShowModal(false)}
            onSellerAdded={fetchSellers} />
            <Button onClick={() => setShowModal(true)}>Add a new seller</Button>
        </tbody>
        
        </table>
        


        </>
    )
};
export default Sellers;
