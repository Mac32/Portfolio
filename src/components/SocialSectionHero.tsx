import IconGithub from './icons/IconGithub'
import IconLinkedIn from './icons/IconLinkedIn'
import IconTwitter from './icons/IconTwitter'

export default function SocialSectionHero (): JSX.Element {
  return (
    <div className='w-16 ml-1 flex flex-col'>
      <div className=' w-8 m-auto flex flex-col gap-2'>
        <a className='hover:scale-110 ease-in-out duration-300' href='#'>
          <IconLinkedIn color='fill-white' />
        </a>
        <a className='hover:scale-110 ease-in-out duration-300' href=''>
          <IconGithub color='fill-white' />
        </a>
        <a className='hover:scale-110 ease-in-out duration-300' href=''>
          <IconTwitter color='fill-white' />
        </a>
        <p className='-rotate-90 text-white inline-block mt-10 -ml-5 w-20'>Follow Me</p>
      </div>
    </div>

  )
}
