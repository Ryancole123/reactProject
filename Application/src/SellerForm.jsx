import {useNavigate} from 'react-router-dom'


let SellerForm = () =>{
    let navigate = useNavigate();


    function postToJSON(){
        let firstNameField = document.getElementById("firstName").value
        let surnameField = document.getElementById("surname").value
        if(firstNameField.trim() !== '' && surnameField.trim() !== ''){
        
        let data = {
            "firstName" : document.getElementById("firstName").value,
            "surname" : document.getElementById("surname").value,
            "address" : document.getElementById("address").value,
            "postcode" : document.getElementById("postcode").value,
            "phone" : document.getElementById("phoneNumber").value
        }

        const postObject = fetch("http://localhost:3000/seller",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(data)
        })
        postObject.then(() => console.log()
        )

        document.getElementById("firstName").value = ""
        document.getElementById("surname").value = ""
        document.getElementById("address").value = ""
        document.getElementById("postcode").value = ""
        document.getElementById("phoneNumber").value = ""

        navigate("/sellers")}
        else alert("Please ensure that at least the seller's names are entered")
    }


    return(
        <>
        <form>
            <table>
                <tr>
                    <td>First Name</td>
                    <td><input type="text" required id="firstName"/></td>
                    <td>Surname</td>
                    <td><input type="text" required id="surname"/></td>


                </tr>
                <br/>


                <tr>
                    <td>Address</td>
                    <td><input type="text" required id="address"/></td>
                </tr>
                <tr>
                    <td>Postcode</td>
                    <td><input type="text" required id="postcode"/></td>
                </tr>

                <tr>
                    <td>Phone number</td>
                    <td><input type="text" id="phoneNumber"/></td>
                </tr>
            </table>
            <input type="button" value="Submit new seller" onClick={postToJSON}/>
    
        </form>
        </>
    )

}

export default SellerForm