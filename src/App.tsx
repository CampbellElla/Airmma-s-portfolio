//import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./ui/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Page404 from "./pages/404";
import Project from "./pages/Project";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills#experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
