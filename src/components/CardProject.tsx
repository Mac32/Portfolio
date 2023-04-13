import IconMongoDB from './icons/IconMongoDB'
import IconNext from './icons/IconNext'
import IconTailwindCSS from './icons/IconTailwindCSS'
import Blog from '../assets/Blog.jpg'

export default function CardProject (): JSX.Element {
  return (
    <div className='bg-blue-400/20 hover:shadow-md rounded-md border-blue-200 pt-1 mb-3 '>
      <div className='m-2'>
        <img src={Blog} alt='Miniatura de la pagina web: elblogdemalbo.com' />
      </div>
      <div className='text-center'>
        <h3 className='m-3 mb-0 text-lg'>
          <a className='hover:text-blue-500' href='https://www.elblogdemalbo.com' target='_blank' rel='noreferrer'>El Blog de Malbo</a>
        </h3>
        <hr className='w-2/3 m-auto' />
        <div className='mt-3 grid bg-white py-1 rounded-md grid-flow-col justify-items-center mx-3'>
          <IconNext dimentions={50} />
          <IconTailwindCSS dimentions={50} />
          <IconMongoDB dimentions={50} />
        </div>
        <p className='text-sm text-center my-6 mx-4'>Blog personal, creado con el objetivo de compartir conocimientos adquiridos sobre este maravilloso mundo de la programacion.</p>
        <div className='grid grid-cols-2 gap-3 m-3'>
          <a className='border-2 p-2 rounded-md hover:transition-all hover:ease-in-out hover:shadow-inner hover:animate-pulse  hover:shadow-[#2B1C8C]/90 text-white' target='_blank' href='https://www.elblogdemalbo.com' rel='noreferrer'>Visitar</a>
          <a
            target='_blank'
            className='border-2 p-2 rounded-md hover:bg-purple-500 hover:border-purple-500
          hover:text-white hidden' href='https://github.com/Mac32/Portfolio' rel='noreferrer'
          >Code
          </a>
        </div>
      </div>
    </div>
  )
}
