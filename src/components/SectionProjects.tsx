import H2 from './H2'
import CardProject from './CardProject'
import HorizontalLine from './HorizontalLine'

export default function SectionProjects (): JSX.Element {
  return (
    <div id='projects' className='relative'>

      <H2 textAlign='text-center'>Projects</H2>
      <HorizontalLine />
      <div className='grid grid-cols-4 w-11/12 mx-auto my-10'>
        <CardProject />
      </div>
    </div>
  )
}
