interface props {
  color?: string
  dimentions?: number
}
export default function IconCheck ({ color = 'fill-[#00D8FF]', dimentions = 32 }: props): JSX.Element {
  return (
    <svg
      height={dimentions}
      width={dimentions}
      className={color}
      viewBox='0 0 64 64'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M32 64c17.645 0 32-14.355 32-32S49.645 0 32 0 0 14.355 0 32s14.355 32 32 32zM19.538 30.269l6.954 6.869L43.04 16.72l5.092 4.491-21.103 26.036-12.076-11.925 4.585-5.053z' />
    </svg>
  )
}
