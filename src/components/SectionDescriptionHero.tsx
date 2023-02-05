export default function SectionDescriptionHero (): JSX.Element {
  return (
    <div id='aboutMe' className='ml-3 rounded-l-full px-6 pb-6 flex flex-col justify-around z-10 bg-[#021F59]/70'>
      <div>
        <p className='italic m-3 ml-48 border border-transparent border-r-white border-b-white inline-block pr-2'>A WEB DEVELOPER</p>
      </div>

      <h1 className='my-6 ml-16 text-8xl font-sans'>
        <span>Alberth</span>
        <span className='block -mt-6'>Bompart</span>
      </h1>
      <p className='mb-10 ml-10'> Me encanta trabajar en proyectos desafiantes y estoy constantemente buscando aprender nuevas tecnologías y mejorar mis habilidades. Creo que la colaboración y la comunicación son fundamentales para el éxito de un proyecto y me esfuerzo por trabajar en equipo para lograr resultados sorprendentes. Mi objetivo es ayudar a las empresas a alcanzar sus metas a través del desarrollo de software de alta calidad </p>
      <div className='my-9 ml-40 '>
        <a className='border hover:border-[#2B1C8C] transition-all ease-in-out hover:animate-pulse bg-[#021F59]/80 border-white rounded-full px-4 py-9' href='#contactMe'><hr className='w-32 -rotate-45 border-t-white -z-10 absolute mt-3' />Let's talk</a>
      </div>
    </div>
  )
}
