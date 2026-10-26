import { useSelector } from 'react-redux'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const mode = useSelector((state) => state.theme.mode)
  const isDark = mode === 'dark'

  return (
    <div
      className={`${isDark ? 'dark' : ''} min-h-screen w-full overflow-x-clip`}
    >
      <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App