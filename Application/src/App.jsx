
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Sellers from './Sellers'

function App() {


  return (
    <>
    <div className='app-container'>
    <nav className='navbar'>
      <h2>System</h2>
      <BrowserRouter>
        <ul>
          <li><Link to="/sellers">Sellers</Link></li>
          <li><Link to="/#">Placeholder</Link></li>
          <li><Link to="/#">Placeholder</Link></li>
          <li><Link to="/#">Placeholder</Link></li>
        </ul>
        <Routes>
          <Route path="/sellers" element={<Sellers/>}/>
        </Routes>
      </BrowserRouter>
    </nav>

    

    

    </div>
    </>
  )
}

export default App
