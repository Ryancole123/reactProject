import { useNavigate } from 'react-router-dom'


let PropertyForm = () => {
    let navigate = useNavigate();
     


    function postToJSON() {
        let gardenValue = document.getElementById("garden")
       if (gardenValue === "Yes"){gardenValue=1}
       else {gardenValue=0}

            let data = {
                "address": document.getElementById("address").value,
                "postcode": document.getElementById("postcode").value,
                "type": document.getElementById("type").value,
                "price": document.getElementById("price").value,
                "bedroom": document.getElementById("bedroom").value,
                "bathroom": document.getElementById("bathroom").value,
                "garden": gardenValue,
                "seller": document.getElementById("seller").value,
                "buyer": document.getElementById("buyer").value,
                "status": document.getElementById("status").value,

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
                        <td>Type</td>
                        <td><input type="text" required id="type" /></td>
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

                    {/* <tr> */}
                        {/* <td>Garden</td> */}
                        {/* <td><input type="text" id="garden" /></td> */}
                    {/* </tr> */}

                    <tr>
                        <td>Seller</td>
                        <td><input type="text" id="seller" /></td>
                    </tr>

                    <tr>
                        <td>Buyer</td>
                        <td><input type="text" id="buyer" /></td>
                    </tr>

                    <tr>
                        <td>Status</td>
                        <td><input type="text" id="status" /></td>
                    </tr>
                </table>
                <label htmlFor="garden">Garden</label>
                <select name="garden" id="garden">
                    <option value={parseInt ("1")}>Yes</option>
                    <option value={0}>No</option>
                </select>
                <input type="button" value="Submit new seller" className='submit-button' onClick={postToJSON} />

            </form>
        </>
    )

}

export default PropertyForm