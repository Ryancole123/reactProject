
import './App.css'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Sellers from './Sellers'
import Buyers  from './buyers'
import Properties from './properties'
import Register from './Register'
import SellerForm from './SellerForm'
import PropertyForm from './PropertyForm'
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './Pages/Homepage'


function App() {

// comment 
  return (
    <BrowserRouter>
    <>
    
    
    <nav className='navbar'>

      <h3>Home Sweet Home</h3>


        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/sellers">Sellers</NavLink></li>
          <li><NavLink to="/properties">Properties</NavLink></li>
          <li><NavLink to="/buyers">Buyers</NavLink></li>
        </ul>


    </nav>
    <div className='app-container'>
    <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/sellers" element={<Sellers/>}/>
          <Route path="/sellers" element={<Sellers/>}/>
          <Route path="/properties" element={<Properties/>}/>
          <Route path="/buyers" element={<Buyers/>}/>
          <Route path="/create-new-seller" element={<SellerForm/>}/>
          <Route path="/create-new-buyer" element={<Register/>}/>
          <Route path="/create-new-property" element={<PropertyForm/>} />
        </Routes>
    







    
{/* 
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
    </div>

    <p className='ending-para'>Finding the right place to live is more than just a transaction - it's about finding your community, your sanctuary, your next chapter. At Home Sweet Home, we're passionate about the entire UK property market, and we're dedicated to helping you discover a property where memories are made. Whether you're a first-time buyer, a growing family, or looking for the perfect investment, our friendly team is here to guide you every step of the way.
<br/><br/>
Explore Our Properties all over the UK!

<br/>
<br/>
Your Local Property Experts</p>  */}

    </div>
    
      

    {/* <HomepageCarousel/> */}
    </>
    </BrowserRouter>
  )
}

export default App
