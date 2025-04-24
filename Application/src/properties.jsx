import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import "./properties.css"

const Properties = () => {
    const [properties, setProperties] = useState([])
        const hasGarden=(property)=>property ===1 
    useEffect(() => {
        fetch("http://localhost:3000/property")
            .then((response) => response.json())
            .then((data) => setProperties(data));
    }, []);
    return (
        <div>
            <h2> List Of Properties of :</h2>
            
            {properties.map((property) => 
                <div className="gridContainer"> 
                <div className="gridChild">
                <table>
                    <thead>
                        <tr>
                            <td> Address </td>
                            <td> Property Type </td>
                            <td> Price </td>
                            <td> No of Bedrooms </td>
                            <td> No of Bathrooms </td>
                            <td> Garden </td>
                        </tr>
                    
                    </thead>
                    <tr>
                    <td> {property.address} </td>
                        <td> {property.type} </td>
                        <td> {property.price} </td>
                        <td> {property.bedroom} </td>
                        <td> {property.bathroom} </td>
                        <td> {hasGarden(property.garden)?"Yes":"No"} </td>
                    </tr>
                </table>
                </div>
                </div>
            )}
            <Link to="/create-new-property"><input type="button" value="Add a new property"/></Link>
            
        </div>
    )
}
export default Properties;
