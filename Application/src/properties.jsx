import { useState,useEffect } from "react"
import "./properties.css"
import PropertyModalForm from "./PropertyForm"
import { Button } from "react-bootstrap"
import PropertyImageCarousel from "./PropertyImageCarousel";


const Properties = () => {
    const [showModal, setShowModal] = useState(false);


    
    const [properties, setProperties] = useState([])
    const [seller, setSeller] = useState([])
    const [price, setPrice] = useState("All prices")
    const [type, setType] = useState("All types")
    const [bedrooms, setBedrooms] = useState("Any number of bedrooms")
    const [bathrooms, setBathrooms] = useState("Any number of bathrooms")
    const [garden, setGarden] = useState("No garden preference")
    const hasGarden=(property)=>property ===1 
    

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function statusColourCheck(e){
        if(e.status === "FOR SALE"){
            return "FOR-SALE"
        }else if(e.status === "WITHDRAWN"){
            return "WITHDRAWN"
        }else{return "SOLD"}
    }


    function changePropertyStatus(prop){
        const updatedProperty = {...prop};
        if(prop.status === "FOR SALE"){
            updatedProperty.status = "WITHDRAWN";
        }else if(prop.status === "WITHDRAWN"){
            updatedProperty.status = "FOR SALE";
        }else{
            return;
        }
        console.log(updatedProperty);
        
        fetch(`http://localhost:3000/property/${prop.id}`,{
            method: "PATCH",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(updatedProperty),
        })

        .then((res) => {
            if(res.ok){
                setProperties((prev) => 
                prev.map((p) =>
                p.id === updatedProperty.id ? updatedProperty : p
                ))
            }
        })
    }

    function withdrawFunction(prop){
        if(prop.status === "WITHDRAWN"){
            return <Button variant="outline-primary" onClick={() => changePropertyStatus(prop)}><b>Resubmit this property</b></Button>
        }else if(prop.status === "FOR SALE"){
            return <Button variant="outline-info" onClick={() => changePropertyStatus(prop)}><b>Withdraw this property</b></Button>
        }
    }

    function resetFilterValues(){
        setPrice("All prices")
        setType("All types")
        setBedrooms("Any number of bedrooms")
        setBathrooms("Any number of bathrooms")
        setGarden("No garden preference")
    }

    const handlePriceChange = (e) =>{
        setPrice(e.target.value)
    }

    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleBedroomsChange = (e) => {
        setBedrooms(e.target.value)
    }

    const handleBathroomsChange = (e) => {
        setBathrooms(e.target.value)
    }

    const handleGardenChange = (e) => {
        setGarden(e.target.value)
    }

    const matchesPriceSelection = (property, price) =>{
        switch(price){
            case "All prices":
                return true
            case "£100,000.00 - £149,999.99":
                return property.price >= 100000 && property.price < 150000
            case "£150,000.00 - £249,999.99":
                return property.price >= 150000 && property.price < 250000
            case "£250,000.00 - £349,999.99":
                return property.price >= 250000 && property.price < 350000
            case "£350,000.00 - No limit":
                return property.price >= 350000 && property.price < 100000000000
            default:
                return false
        }
    }


    const matchesTypeSelection = (property, type) =>{
        switch(type){
            case "All types":
                return true
            case "Detached":
                return property.type === "DETACHED"
            case "Semi-detached":
                return property.type === "SEMI-DETACHED"
            case "Apartment":
                return property.type === "APARTMENT"
            default:
                return false
        }
    }

    const matchesBedroomsSelection = (property, bedrooms) =>{
        switch(bedrooms){
            case "Any number of bedrooms":
                return true
            case "1":
                return property.bedroom === 1
            case "2":
                return property.bedroom === 2  
            case "3":
                return property.bedroom === 3                
            case "4":
                return property.bedroom === 4                
            case "5":
                return property.bedroom === 5
            case "6":
                return property.bedroom === 6
            case "7":
                return property.bedroom === 7
        }
    }


    const matchesBathroomSelection = (property, bathrooms) =>{
        switch(bathrooms){
            case "Any number of bathrooms":
                return true
            case "1":
                return property.bathroom === 1
            case "2":
                return property.bathroom === 2  
            case "3":
                return property.bathroom === 3                
            case "4":
                return property.bathroom === 4                
            case "5":
                return property.bathroom === 5
            case "6":
                return property.bathroom === 6
            case "7":
                return property.bathroom === 7
        }
    }

    const matchesGardenSelection = (property, garden) =>{
        switch(garden){ 
            case "No garden preference":
                return true
            case "Has a garden":
                return property.garden === 1
            case "Has no garden":
                return property.garden === 0
        }
    }

    const filteredProperties = properties.filter(
        (property) =>
            matchesPriceSelection(property, price) &&
            matchesTypeSelection(property, type) &&
            matchesBedroomsSelection(property, bedrooms) &&
            matchesBathroomSelection(property, bathrooms) &&
            matchesGardenSelection(property, garden)
    )  
    

    const fetchProperties = () => {
        fetch("http://localhost:3000/property")
            .then((response) => response.json())
            .then((data) => setProperties(data));
    };
    
    useEffect(() => {
        fetchProperties();
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/seller")
            .then((response) => response.json())
            .then((data) => setSeller(data));
    }, []);

    function findSellerName(sellers,props){
        let nameOfSeller = sellers.find((s) => s.id === props.sellerId)
            
        return nameOfSeller ? `${nameOfSeller.firstName}  ${nameOfSeller.surname}` : "Unknown Seller"        
        
    }


    return (
        <div>
            <h2> List Of Properties of :</h2>
            <PropertyModalForm 
            show={showModal} 
            handleClose={() => setShowModal(false)}
            onPropertyAdded={fetchProperties} />
            <Button className="btn btn-success" onClick={() => setShowModal(true)}>Add Property</Button>

            <div className="filter-options">
            <select name="price" id="price"  className='dropdown' onChange={handlePriceChange} value={price}>
                <option>All prices</option>
                <option>£100,000.00 - £149,999.99</option>
                <option>£150,000.00 - £249,999.99</option>
                <option>£250,000.00 - £349,999.99</option>
                <option>£350,000.00 - No limit</option>
            </select>

            <select name="type" id="type" className='dropdown' onChange={handleTypeChange} value={type}>
                <option>All types</option>
                <option>Detached</option>
                <option>Semi-detached</option>
                <option>Apartment</option>
            </select>
            
            <select name="bedrooms" id="bedrooms" className='dropdown' onChange={handleBedroomsChange} value={bedrooms}>
                <option>Any number of bedrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
            </select>

            <select name="bathrooms" id="bathrooms" className='dropdown' onChange={handleBathroomsChange} value={bathrooms}>
                <option>Any number of bathrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
            </select>

        
            
            <select name="garden" id="garden" className='dropdown' onChange={handleGardenChange} value={garden}>
                <option>No garden preference</option>
                <option>Has a garden</option>
                <option>Has no garden</option>
            </select>

            
            
            </div>
            <Button className="btn btn-secondary ml-5" onClick={resetFilterValues}>Reset filter values</Button>
            <div className="all-properties">
            {filteredProperties.map((property) => 
                <div> 
                    
                <div className="properties-container">
                
                    
                    <PropertyImageCarousel propertyType={property.type}/>
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
                    £{numberWithCommas(property.price)}
                    <br/>
                    {property.type}
                    <br/>
                    <h5>{<b className={statusColourCheck(property)}>{property.status}</b>}</h5>
                </div>
                    <div className="more-prop-info">
                        Property listed by {findSellerName(seller, property)}
                        <br/>
                        
                        {withdrawFunction(property)}
                            
                        
                        
                    </div>
                </div>
                </div>
            )}
            </div>
            
        </div>
    )
}
export default Properties;
