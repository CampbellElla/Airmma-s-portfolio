//import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./ui/Header"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Skills from "./pages/Skills"

function App() {
  //const [count, setCount] = useState(0)

  return (
  
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
