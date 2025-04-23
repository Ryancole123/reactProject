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
        { Sellers.map((buyer) => <div>{buyer.firstName}</div>)
        }

        </>
       )
    };
    Export default Buyers;
    
