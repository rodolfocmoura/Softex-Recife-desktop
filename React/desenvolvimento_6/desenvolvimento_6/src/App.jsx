import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Info from './Info'
import Navbar from './Navbar'

function App() {

  return (
    <Router>
    <div>
    <header className='header'>
      <Navbar/>
    </header>
    <body className='body'>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Info" element={<Info/>} />
      </Routes>
    </body>
    
    </div>
    </Router>
  )
}

export default App
