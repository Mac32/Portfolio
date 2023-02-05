interface props {
  color: string
  dimentions?: number
}

export default function IconLinkedIn ({ color = 'fill-blue-800', dimentions = 32 }: props): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={dimentions}
      height={dimentions}
      xmlSpace='preserve'
    >
      <path className={color} d='M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2z' />
      <path
        style={{
          fill: 'none'
        }}
        d='M0 0h32v32H0z'
      />
    </svg>
  )
}
