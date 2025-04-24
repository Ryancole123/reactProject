import { useEffect,useState } from "react";
// import{link} from "react-router-dom"

let Buyers = () => {
    const [Buyers,setBuyers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/buyer")
        .then( (response) => response.json())
        .then((data)=> setBuyers(data));
       },   []);

       return(
        <>
        <h3> Buyers Placeholder Text</h3>

        <table border = "1"> 
            <thead>
                <tr>
                    <td>Buyer Name</td>
                    <td> Buyer Address</td>
                    <td> Buyer Postcode</td>
                    <td> Buyer Contact Number</td>
                    
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
             <input type="button"value= " Add new Buyer" onClick={<Buyers/>}/>
            </tbody>
        </table>
         

        </>
       )
    };
    export default Buyers;

