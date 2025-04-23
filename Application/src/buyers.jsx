import { useEffect,useState } from "react";

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
                    <td>Buyers Name</td>
                    <td> Buyers Adress</td>
                    <td> Buyers Postcode</td>
                    <td> Buyers Contact Number</td>
                    
                </tr>
            </thead>
            <tbody>
             { Buyers.map((buyer) =>   
             <tr>
                <td>{Buyers.surname}, {Buyers.firstName}</td>
                <td>{Buyers.address}</td>
                <td>{Buyers.postcode}</td>
                <td>{Buyers.phone}</td>
             </tr>
             )}
            </tbody>
        </table>
         

        </>
       )
    };
    export default Buyers;

