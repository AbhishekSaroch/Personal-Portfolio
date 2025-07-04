import './App.css'
import About from './mainApp/components/About/About'
import Contact from './mainApp/components/Contact/Contact'
import Experience from './mainApp/components/Experience/Experience'
import Navbar from './mainApp/components/Navbar/Navbar'
import Projects from './mainApp/components/Projects/Projects'
import Skills from './mainApp/components/Skills/Skills'

function App() {
  

  return (
     <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900 font-inter">
      <Navbar />
      <section id='about'>
        <About />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  )
}

export default App
