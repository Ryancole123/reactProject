
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Sellers from './Sellers'
import Buyers  from './buyers'
import Properties from './properties'
import Register from './Register'
import SellerForm from './SellerForm'

function App() {


  return (
    <>
    <BrowserRouter>
    <div className='app-container'>
    <nav className='navbar'>
      <h2>System</h2>

        <ul>
          <li><Link to="/sellers">Sellers</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/buyers">Buyers</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>


    </nav>
    <Routes>
          <Route path="/sellers" element={<Sellers/>}/>
          <Route path="/sellers" element={<Sellers/>}/>
          <Route path="/properties" element={<Properties/>}/>
          <Route path="/buyers" element={<Buyers/>}/>
          <Route path="/create-new-seller" element={<SellerForm/>}/>
          <Route path="/create-new-buyer" element={<Register/>}/>
        </Routes>
    

    

    </div>
    </BrowserRouter>
    </>
  )
}

export default App
