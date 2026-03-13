import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Blog from './components/Blog'
import FunFacts from './components/FunFacts'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Awards />
        <Blog />
        <FunFacts />
      </main>
      <Footer />
      <CommandPalette />
    </div>
  )
}
