import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';


let PropertyForm = () => {
    let navigate = useNavigate();
    let matchedSeller;    
    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/seller")
        .then((response) => response.json())
        .then((data) => setSellers(data));
    }, []);

    function postToJSON() {

            function sellerID(sellers){
                matchedSeller.find((s) => s.firstName && s.surname)
            }

            let gardenValue = document.getElementById("garden").value === "Yes" ? 1 : 0;
            let typeValue = document.getElementById("type").value
            let statusValue = document.getElementById("status").value 

            let data = {
                "address": document.getElementById("address").value,
                "postcode": document.getElementById("postcode").value,
                "type": typeValue,
                "price": document.getElementById("price").value,
                "bedroom": document.getElementById("bedroom").value,
                "bathroom": document.getElementById("bathroom").value,
                "garden": gardenValue,
                "seller": document.getElementById("seller").value,
                "buyer": document.getElementById("buyer").value,
                "status": statusValue,
                "sellerId": matchedSeller,

            }

            const postObject = fetch("http://localhost:3000/property", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            postObject.then(() => console.log()
            )

            document.getElementById("address").value = ""
            document.getElementById("postcode").value = ""
            document.getElementById("type").value = ""
            document.getElementById("price").value = ""
            document.getElementById("bedroom").value = ""
            document.getElementById("bathroom").value = ""
            document.getElementById("garden").value = ""
            document.getElementById("seller").value = ""
            document.getElementById("buyer").value = ""
            document.getElementById("status").value = ""

            navigate("/properties")
        
        
    }


    return (
        <>
            <form>
                <table>
                    <tr>
                        <td>Address</td>
                        <td><input type="text" required id="address" /></td>
                        <td>Postcode</td>
                        <td><input type="text" required id="postcode" /></td>


                    </tr>
                    <br />


                    <tr>
                        <td><label htmlFor="type">Property Type</label></td>
                        <td> 
                            <select name="type" id="type">
                                <option value="DETACHED">DETACHED</option>
                                <option value="SEMI-DETACHED">SEMI-DETACHED</option>
                                <option value="APARTMENT">APARTMENT</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td><input type="text" required id="price" /></td>
                    </tr>

                    <tr>
                        <td>Bedroom</td>
                        <td><input type="text" id="bedroom" /></td>
                    </tr>

                    <tr>
                        <td>Bathroom</td>
                        <td><input type="text" id="bathroom" /></td>
                    </tr>

                    <tr>
                    <td><label htmlFor="garden">Garden</label></td>
                    <td>        
                        <select name="garden" id="garden">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </td>

                    </tr>

                    <tr>
                    <td><label htmlFor="seller">Seller</label></td>
                    <td>        
                        <select name="seller" id="seller">
                            {sellers.map((seller) => 
                            <option key={seller.id} value={`${seller.firstName} ${seller.surname}`}>{`${seller.firstName} ${seller.surname}`}</option>
                            )}
                        </select>
                    </td>

                    </tr>

                    <tr>
                        <td>Buyer</td>
                        <td><input type="text" id="buyer" /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="status">Property Status</label></td>
                        <td><select name="status" id="status">
                            <option value="FOR SALE">FOR SALE</option>
                            <option value="SOLD">SOLD</option>
                            <option value="WITHDRAWN">WITHDRAWN</option>
                        </select>
                        </td>
                    </tr>
                </table>
                <br/>
                <input type="button" value="Submit new property" className='submit-button' onClick={postToJSON} />

            </form>
        </>
    )

}

export default PropertyForm