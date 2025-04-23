import { useState,useEffect } from "react"
// import { useParams } from "react-router-dom"
const Properties = () => {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/property")
            .then((response) => response.json())
            .then((data) => setProperties(data));
    }, []);

    // let { sid } = useParams()

    // let [properties, setProperties] = useState([])
    // const processData = (ListProperties) => {

    //     setProperties(ListProperties.filter((property) => property.sellerId == sid))
    // }
    // const processResponse = (response) => {
    //     let responseObj1 = response.json()
    //     responseObj1.then(processData)
    // }
    // const getProperties = () => {

    //     let propertyObj1 = fetch("http://localhost:3000/property")
    //     propertyObj1.then(processResponse)
    // }

    // getProperties()
    return (
        <>
            <h2> List Of Properties of :</h2>
            {
                properties.map((property) => <div>{property.address}</div>)
            }
        </>
    )
}


export default Properties