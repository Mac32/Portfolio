import LinkNavBar from './LinkNavBar'
import Name from './Name'
import ButtonMenu from './ButtonMenu'

export default function NavBar (): JSX.Element {
  return (
    <nav className='flex justify-between items-center bg-[#013397]/30 lg:bg-inherit pb-3 lg:justify-around top-0 w-full z-50 m-auto'>
      <Name />
      <div id='contentMenu' className='flex flex-col hidden absolute w-full lg:w-auto top-20 items-center lg:items-stretch rounded-b-md bg-[#013397]/30 lg:static lg:block lg:py-6'>
        <LinkNavBar href='#aboutMe' title='About Me' />
        <LinkNavBar href='#helpYou' title='What Do I Help' />
        <LinkNavBar href='#skills' title='Skills' />
        <LinkNavBar href='#projects' title='Project' />
        <LinkNavBar href='#contactMe' title='Contact Me' />
      </div>
      <ButtonMenu />
    </nav>
  )
}
