import IconGithub from './icons/IconGithub'
import IconLinkedIn from './icons/IconLinkedIn'
import IconTwitter from './icons/IconTwitter'

export default function SocialSectionHero () {
  return (
    <div className='w-16 flex flex-col'>
      <div className=' w-8 m-auto flex flex-col gap-2'>

        <IconLinkedIn />
        <IconGithub />
        <IconTwitter />
        <p className='-rotate-90 inline-block mt-10 -ml-5 w-20'>Follow Me</p>
      </div>
    </div>

  )
}
