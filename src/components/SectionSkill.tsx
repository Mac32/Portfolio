import ContentSkill from './ContentSkill'
import H2 from './H2'
import HorizontalLine from './HorizontalLine'
import IconCSS from './icons/IconCSS'
import IconGit from './icons/IconGit'
import IconHTML from './icons/IconHTML'
import IconJavaScript from './icons/IconJavaScript'
import IconMongoDB from './icons/IconMongoDB'
import IconNext from './icons/IconNext'
import IconReact from './icons/IconReact'
import IconTailwindCSS from './icons/IconTailwindCSS'

export default function SectionSkill (): JSX.Element {
  return (
    <div id='skills' className='mt-14 relative'>
      <H2 textAlign='text-center'>Habilidades</H2>
      <HorizontalLine />
      <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center lg:justify-between w-11/12 mx-auto my-14'>
        <ContentSkill shadowColor='hover:shadow-orange-500/50'>
          <IconHTML dimentions={85} />
        </ContentSkill>
        <ContentSkill shadowColor='hover:shadow-blue-500/50'>
          <IconCSS dimentions={85} />
        </ContentSkill>
        <ContentSkill shadowColor='hover:shadow-yellow-500/50'>
          <IconJavaScript dimentions={85} />
        </ContentSkill>
        <ContentSkill shadowColor='hover:shadow-red-500/50'>
          <IconGit dimentions={85} />
        </ContentSkill>
        <ContentSkill shadowColor='hover:shadow-sky-500/50'>
          <IconReact dimentions={85} />
        </ContentSkill>
        <ContentSkill shadowColor='hover:shadow-gray-500/50'>
          <IconNext dimentions={85} />
        </ContentSkill>
        <ContentSkill shadowColor='hover:shadow-cyan-500/50'>
          <IconTailwindCSS dimentions={85} />
        </ContentSkill>
        <ContentSkill shadowColor='hover:shadow-lime-500/50'>
          <IconMongoDB dimentions={85} />
        </ContentSkill>
      </div>
    </div>
  )
}
