import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header      from "./ui/Header";
import Home        from "./pages/Home";
import About       from "./pages/About";
import Skills      from "./pages/Skills";
import Experience  from "./pages/Experience";
import Projects    from "./pages/Project";
import Contact     from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Page404     from "./pages/404";
import CustomCursor  from "./components/CustomCursor";
import Preloader     from "./components/Preloader";
import ScrollBar     from "./components/ScrollBar";

function App() {
  return (
    <BrowserRouter>
      {/* Custom cursor — desktop only */}
      <CustomCursor />
      <Preloader />
      <ScrollBar />

      <Header />

      <main>
        <Routes>
          <Route path="/"              element={<Home />}        />
          <Route path="/about"          element={<About />}        />
          <Route path="/skills"         element={<Skills />}       />
          <Route path="/experience"     element={<Experience />}   />
          <Route path="/projects"       element={<Projects />}     />
          <Route path="/contact"        element={<Contact />}      />
          <Route path="/certificates"   element={<Certificates />} />
          <Route path="*"               element={<Page404 />}      />
        </Routes>
      </main>

      {/* ── Scroll progress bar layer ── */}
      <div id="scroll-progress-bar" />
    </BrowserRouter>
  );
}

export default App;
