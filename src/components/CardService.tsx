import IconDesign from './icons/IconDesign'

type props = {
  number: string,
  title: string,
  description: string,
  children: JSX.Element
}

export default function CardService ({number = '00', title='title', description = 'Description', children}:props) {
  return (
    <div className='w-44'>
      <p
        className='border-transparent font-bold pb-1 border-b-white border-2'
      >{number}
      </p>
      <div className='my-3 mx-auto w-16 '>
      {children}
      </div>
      <h3 className='font-bold mt-2 text-center'>{title}</h3>
      <p className='leading-4 mt-1 text-sm text-center'>{description}</p>
    </div>
  )
}
