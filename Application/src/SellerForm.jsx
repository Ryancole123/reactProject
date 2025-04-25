import {useNavigate} from 'react-router-dom'
import "./App.css"


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
        <h2 className='headerline'> New Seller :</h2>
        <br />
        
        <form >
            <table className= 'data-table'>
                <thead>
                <tr>
                    <th>First Name<span className='asterisk'>*</span></th>
                    <td><input className= "inputfield" type="text" required id="firstName"/></td>
                    <th>Surname<span className='asterisk'>*</span></th>
                    <td><input className= "inputfield" type="text" required id="surname"/></td>


                </tr>
                </thead>
                <br/>


                <tr>
                    <th>Address</th>
                    <td><input className= "inputfield" type="text" required id="address"/></td>
                </tr>
                <br />
                <tr>
                    <th>Postcode</th>
                    <td><input className= "inputfield" type="text" required id="postcode"/></td>
                </tr>
                <br />
                <tr>
                    <th>Phone number</th>
                    <td><input className= "inputfield" type="text" id="phoneNumber"/></td>
                </tr>
                <br />
            </table>
            <input  type="button" value="Submit new seller" className='submit-button' onClick={postToJSON}/>
    
        </form>
        </>
    )

}

export default SellerForm