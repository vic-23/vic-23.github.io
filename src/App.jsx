import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import TechStack from './components/TechStack'
import Workflow from './components/Workflow'
import Github from './components/Github'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      <Navbar />

      <main>
        <Hero />

        <Stats />

        <About />

        <FeaturedProject />

        <Projects />

        <Architecture />

        <TechStack />

        <Workflow />

        <Github />

        <Contact />
      </main>

    </div>
  )
}

export default App