interface props {
  shadowColor: string
  children: JSX.Element
}

export default function ContentSkill ({ shadowColor, children }: props): JSX.Element {
  return (
    <div className={`shadow-lg ${shadowColor} bg-blue-400/20 rounded-md flex flex-col w-56 h-28 `}>
      <div className='w-24 m-auto hover:scale-110 ease-in duration-300'>
        {children}
      </div>
    </div>

  )
}
