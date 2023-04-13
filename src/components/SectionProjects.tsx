import H2 from './H2'
import CardProject from './CardProject'
import HorizontalLine from './HorizontalLine'

export default function SectionProjects (): JSX.Element {
  return (
    <div id='projects' className='relative'>

      <H2 textAlign='text-center'>Proyectos</H2>
      <HorizontalLine />
      <div className='grid md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto my-10'>
        <CardProject />
      </div>
    </div>
  )
}
