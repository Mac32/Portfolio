import Foto from '../assets/avatar.jpg'
export default function ImageHero (): JSX.Element {
  return (
    <img className='lg:w-1/3 w-4/6 self-center mr-3 lg:m-5 z-10 rounded-full' src={Foto} />
  )
}

// TODO corregir posicion de la foto
