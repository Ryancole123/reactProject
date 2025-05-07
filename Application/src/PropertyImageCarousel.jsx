import { Carousel } from "react-bootstrap";
import "./properties.css"

export default function PropertyImageCarousel({ propertyType }){
    return(
        <>
            <Carousel interval={null} className="prop-carousel-image">
                <Carousel.Item>
                    <img className="prop-carousel-image" src={`./src/resources/Prop Carousel/${propertyType}1.jpg`} text="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="prop-carousel-image" src={`./src/resources/Prop Carousel/${propertyType}2.jpg`} text="Second slide" />          
                </Carousel.Item>
                <Carousel.Item>
                    <img className="prop-carousel-image" src={`./src/resources/Prop Carousel/${propertyType}3.jpg`} text="Third slide" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}