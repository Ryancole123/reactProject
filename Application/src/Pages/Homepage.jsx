import React from "react";
import homepageImg from "../resources/Homepage.png"
import Carousel from 'react-bootstrap/Carousel';
import dealImg from '../resources/deal.png'
import appImg from '../resources/appimg.jpg'

export default function Homepage(){

    return(
        <div className='carousel'>
            <Carousel>
            <Carousel.Item>
                <img src={homepageImg} text="First slide" />
        
            </Carousel.Item>
            <Carousel.Item>
                <img src={dealImg} text="Second slide" />
        
            </Carousel.Item>
            <Carousel.Item>
                <img src={appImg} text="Third slide" />
        
            </Carousel.Item>
            </Carousel>
            <p className='ending-para'>Finding the right place to live is more than just a transaction - it's about finding your community, your sanctuary, your next chapter. At Home Sweet Home, we're passionate about the entire UK property market, and we're dedicated to helping you discover a property where memories are made. Whether you're a first-time buyer, a growing family, or looking for the perfect investment, our friendly team is here to guide you every step of the way.
            <br/><br/>
            Explore Our Properties all over the UK!

            <br/>
            <br/>
            Your Local Property Experts</p> 
        </div>
    )

}