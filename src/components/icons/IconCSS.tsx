interface props {
  dimentions?: number
}

export default function IconCSS ({ dimentions = 32 }: props): JSX.Element {
  const color = 'fill-blue-600'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      width={dimentions}
      height={dimentions}
    >
      <path
        className={color}
        d='m32 0 40.8 460.8L256 512l183.136-51.168L480 0z'
      />
      <path
        className='fill-gray-50'
        d='m392.768 150.688-5.152 57.888-15.552 173.536L256 414.208l-.096.032-116-32.128-8.096-90.752h56.832l4.224 47.072 63.072 17.024.032-.032 63.168-17.024 8.608-78.432-198.656.544-5.632-53.632 209.056-2.464 4.224-57.408-218.88.608-3.68-53.408h283.648z'
      />
    </svg>
  )
}
