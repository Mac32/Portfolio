import LinkNavBar from './LinkNavBar'
import Name from './Name'

export default function NavBar () {
  return (
    <nav className='flex justify-between p-3'>
      <Name />
      <div className='grid grid-cols-3 gap-x-20'>
        <LinkNavBar title='My Project' description='Amazing service. It sets us apart' />
        <LinkNavBar title='About Me' description='Do great things every day' />
        <LinkNavBar title='Contact Me' description='Value en innovation. Real innovation' />
      </div>
    </nav>
  )
}
