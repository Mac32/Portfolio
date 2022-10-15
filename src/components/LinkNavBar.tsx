import arrow from '../assets/arrow-up-right.svg'

type pro = {
  title: string,
  description: string
}

export default function NavigationButton ({ title, description }: pro) {
  return (
    <a href='#' className="grid text-sm w-32 border border-t-2 border-transparent border-t-slate-900">
      <div className='flex justify-between'>
        <span className="font-bold">{title}</span>
        <img className='w-4' src={arrow} />
        </div>
      <span className="font-light text-justify">{description}</span>
    </a>
  )
}
