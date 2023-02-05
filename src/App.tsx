import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import SectionService from './components/SectionService'
import SectionSkill from './components/SectionSkill'
import SectionProjects from './components/SectionProjects'
import SectionContact from './components/SectionContact'

function App (): JSX.Element {
  return (
    <div className='text-white bg-gradient-to-br overflow-hidden to-[#04020D] from-[#021F59]'>
      <Hero />
      <SectionService />
      <SectionSkill />
      <SectionProjects />
      <SectionContact />
    </div>
  )
}

export default App
