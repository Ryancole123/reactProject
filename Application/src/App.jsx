
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Sellers from './Sellers'

function App() {


  return (
    <>
    <div className='app-container'>
    <h2>System</h2>
    

    
    <BrowserRouter>
    <Link to="/sellers">Sellers</Link>
      <Routes>
        <Route path="/sellers" element={<Sellers/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
