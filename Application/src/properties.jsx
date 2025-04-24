import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import "./properties.css"

const Properties = () => {
    const [properties, setProperties] = useState([])
    const [seller, setSeller] = useState([])
    const hasGarden=(property)=>property ===1 


    useEffect(() => {
        fetch("http://localhost:3000/property")
            .then((response) => response.json())
            .then((data) => setProperties(data));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/seller")
            .then((response) => response.json())
            .then((data) => setSeller(data));
    }, []);

    function findSellerName(sellers,props){
        let nameOfSeller = sellers.find((s) => s.id === props.sellerId)
            
        //console.log(nameOfSeller);
        return nameOfSeller ? `${nameOfSeller.firstName}  ${nameOfSeller.surname}` : "Unknown Seller"        
        
    }


    return (
        <div>
            <h2> List Of Properties of :</h2>
            
            {properties.map((property) => 
                <div> 
                    
                <div className="properties-container">
                
                <img src="https://placehold.co/150x150" className="property-images" alt="" />
                <span className="address-card-amenities">
                    <table className="property-table">
                        <tr>
                            <td><img src={"../src/resources/bedrooms.png"} className="property-icons" alt="" /></td>
                            <td>{property.bedroom}</td>
                        </tr>
                        <tr>
                            <td><img className="property-icons" src={"../src/resources/bathrooms.png"} alt="" /></td>
                            <td>{property.bathroom}</td>
                        </tr>
                        <tr>
                            <td><img className="property-icons" src={"../src/resources/garden.png"} alt="" /></td>
                            <td>{hasGarden(property.garden)?"Yes":"No"}</td>
                        </tr>
                    </table>
                    
                    
                </span>
                    
                
                

            
                
                <div className="address-div">
                    {property.address}
                    <br/>
                    {property.postcode}
                    <br/>
                    £{property.price}
                    <br/>
                    {property.type}
                    <br/>
                    {<b className="property-status">{property.status}</b>}
                </div>
                    <div className="more-prop-info">
                        Property listed by {findSellerName(seller, property)}
                    </div>
                </div>
                </div>
            )}
            <Link to="/create-new-property"><input type="button" value="Add a new property"/></Link>
            
        </div>
    )
}
export default Properties;
