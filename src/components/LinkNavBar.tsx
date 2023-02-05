interface pro {
  title: string
  href: string
}

export default function NavigationButton ({ title, href = '#' }: pro): JSX.Element {
  return (
    <a href={href} title={title} className='hover:transition-all hover:ease-in-out hover:shadow-inner hover:animate-pulse  hover:shadow-[#2B1C8C]/90 text-white mx-2 py-2 px-3 rounded-md  font-bold'>
      {title}
    </a>
  )
}
