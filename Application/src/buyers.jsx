import { useEffect,useState } from "react";
import "./App.css"
import { Button } from "react-bootstrap"
import BuyerModalForm from "./BuyerModalForm";


let Buyers = () => {
    const [Buyers,setBuyers] = useState([])

    const [showModal, setShowModal] = useState(false);




    const fetchBuyers = () => {
        fetch("http://localhost:3000/buyer")
            .then((response) => response.json())
            .then((data) => setBuyers(data));
    };
    
        useEffect(() => {
            fetchBuyers();
        }, []);

    useEffect(() => {
        fetch("http://localhost:3000/buyer")
        .then( (response) => response.json())
        .then((data)=> setBuyers(data));
       },   []);

       return(
        <>
        <h3 className='headerline'> List of our current buyers</h3>

        <table className= 'data-table'> 
            <thead>
                <tr>
                    <th>Buyer Name</th>
                    <th> Buyer Address</th>
                    <th> Buyer Postcode</th>
                    <th> Buyer Contact Number</th>
                    
                </tr>
            </thead>
            <tbody>
             { Buyers.map((buyer) =>   
             <tr>
                <td>{buyer.surname}, {buyer.firstName}</td>
               
                <td>{buyer.address}</td>
                 <td>{buyer.postcode}</td>
                <td>{buyer.phone}</td>
        
             </tr>
             )}
             <BuyerModalForm 
            show={showModal} 
            handleClose={() => setShowModal(false)}
            onBuyerAdded={fetchBuyers} />
            <br/>
            <Button onClick={() => setShowModal(true)}>Add new buyer</Button>

            </tbody>
            <br/>
        </table>
         

        </>
       )
    };
    export default Buyers;

