import "./index.css"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import DSA from "./pages/DSA"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <About />

      <Projects />

      <DSA />

      <Blog />

      <Contact />
    </>
  )
}

export default App