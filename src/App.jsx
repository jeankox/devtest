import { useState } from 'react'
import Navigationpanel from './components/Navigationpanel'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import  Home from './pages/Home'
import Geography from './pages/Geography'
import Holidays from './pages/Holidays'
import Sports from './pages/Sports'
import Language from './pages/Language'
import Currency from './pages/Currency'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div class="flex flex-row w-screen h-screen " >     
          <Navigationpanel class="w-1/4"/>
          
          <div class="w-full bg-gray-100">
            
              <div className="p-4">
                <Routes>  { /* Routes here */}
                  <Route path="/" element={<Home />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="/holidays" element={<Holidays />} />
                  <Route path="/sports" element={<Sports />} />
                  <Route path="/language" element={<Language />} />
                  <Route path="/currency" element={<Currency />} />
                </Routes>
              </div>           
          </div>
        </div>
      </Router>
    </>
      
  )
}

export default App
