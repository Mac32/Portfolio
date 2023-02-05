import LinkNavBar from './LinkNavBar'
import Name from './Name'

export default function NavBar (): JSX.Element {
  return (
    <nav className='flex justify-around top-0 w-full z-50 m-auto'>
      <Name />
      <div className='flex items-center rounded-b-md bg-[#013397]/30 '>
        <LinkNavBar href='#aboutMe' title='About Me' />
        <LinkNavBar href='#helpYou' title='What Do I Help' />
        <LinkNavBar href='#skills' title='Skills' />
        <LinkNavBar href='#projects' title='Project' />
        <LinkNavBar href='#contactMe' title='Contact Me' />
      </div>
    </nav>
  )
}
