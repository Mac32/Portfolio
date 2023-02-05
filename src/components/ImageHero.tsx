import Foto from '../assets/avatar.jpg'
export default function ImageHero (): JSX.El {
  return (
    <img className='w-1/3 flex-1 self-center m-5 z-10 h-1/3 rounded-full' src={Foto} />
  )
}
