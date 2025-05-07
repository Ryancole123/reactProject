
import './App.css'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Sellers from './Sellers'
import Buyers  from './buyers'
import Properties from './properties'
import PropertyForm from './PropertyForm'
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './Pages/Homepage'


function App() {

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
          <Route path="/properties" element={<Properties/>}/>
          <Route path="/buyers" element={<Buyers/>}/>
          <Route path="/create-new-property" element={<PropertyForm/>} />
        </Routes>
    


    </div>
    </>
    </BrowserRouter>
  )
}
export default App
