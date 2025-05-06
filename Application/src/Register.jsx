import { useNavigate } from "react-router-dom";

let Register = ()=> {
    let navigate = useNavigate();

    function postToJSON(){
        let data = {
            "firstName" : document.getElementById("firstName").value,
            "surname" : document.getElementById("surname").value,
            "address" : document.getElementById("address").value,
            "postcode" : document.getElementById("postcode").value,
            "phone" : document.getElementById("phoneNumber").value,
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
        <h2 className='headerline'> New Buyer:</h2>
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
export default Register;
