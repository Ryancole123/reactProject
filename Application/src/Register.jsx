import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Register = ()=> {
    let navigate = useNavigate();

    function postToJSON(){
        let data = {
            "firstName" : document.getElementById("firstName").value,
            "surname" : document.getElementById("surname").value,
            "address" : document.getElementById("address").value,
            "postcode" : document.getElementById("posrcode").value,
            "phone" : document.getElementById("phone").value,
        }
        const postObject = fetch('http://localhost:3000/buyer' ,{
            method:"POST",
            headers:{"content-type": "application/json"},
            body:JSON.stringify(data)
        })
        postObject.then(()=> console.log()
    )
        document.getElementById("firstName").value = ""
        document.getElementById("surname").value = ""
        document.getElementById("address").value = ""
        document.getElementById("postcode").value = ""
        document.getElementById("phoneNumber").value = ""

        navigate("/buyers")

    }

    return(
        <>
        <form>
            <table>
                <tr>
                    <td>Fist Name</td>
                    <td><input type="text" required id="firstName" /></td>
                    <td>Surname</td>
                    <td><input type="text" required id="surname"/></td>
                    

                </tr>
                <br/>
                <tr>
                <td>Address</td>
                    <td><input type="text" required id="address"/></td>
                </tr> 
                <tr>
                    <td>PostCode</td>
                    <td><input type="text" required id="postcode"/></td>
                    </tr>
                    <tr>

                    
                    <td>PhoneNumber</td>
                    <td><input type="number" required id="PhoneNumber"/></td>
                    </tr>

            </table>
            <input type="button" value="Submit new Buyer" onClick={postToJSON} />
        </form>
        </>
    ) 
}
export default Register;
