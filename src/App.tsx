import { Nav } from './components/Nav/Nav'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { Hobbies } from './components/Hobbies/Hobbies'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

/**
 * Root of the single-page portfolio: nav + the section stack + footer.
 * @returns The full page.
 */
function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
