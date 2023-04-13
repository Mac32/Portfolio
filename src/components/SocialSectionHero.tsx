import IconGithub from './icons/IconGithub'
import IconLinkedIn from './icons/IconLinkedIn'
import IconTwitter from './icons/IconTwitter'

export default function SocialSectionHero (): JSX.Element {
  return (
    <div className='lg:w-16 lg:ml-1 flex flex-col w-1/6'>
      <div className=' w-8 m-auto flex flex-col gap-2'>
        <a className='hover:scale-110 ease-in-out duration-300' href='https://www.linkedin.com/in/alberth-bompart-developer' target='_blank' rel='noreferrer'>
          <IconLinkedIn color='fill-white' />
        </a>
        <a className='hover:scale-110 ease-in-out duration-300' href='https://github.com/Mac32' target='_blank' rel='noreferrer'>
          <IconGithub color='fill-white' />
        </a>
        <a className='hover:scale-110 ease-in-out duration-300' href='https://twitter.com/AlberthBompart' target='_blank' rel='noreferrer'>
          <IconTwitter color='fill-white' />
        </a>
        <p className='-rotate-90 text-white inline-block mt-10 -ml-5 w-20'>Sígueme</p>
      </div>
    </div>

  )
}
