interface props {
  color?: string
  dimentions?: number
}
export default function IconDesign ({ color = 'fill-[#00D8FF]', dimentions = 32 }: props): JSX.Element {
  return (
    <svg
      width={dimentions}
      height={dimentions}
      className={color}
      viewBox='0 0 88 88' xmlns='http://www.w3.org/2000/svg'
    >
      <title />
      <path d='M79 36h-2.023a32.801 32.801 0 0 0-21.6-30h16.765a4 4 0 1 0 0-2H48V2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2H15.858a4 4 0 1 0 0 2h16.765a32.801 32.801 0 0 0-21.6 30H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-1.977A30.815 30.815 0 0 1 40 6.263V8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.263A30.815 30.815 0 0 1 74.977 36H73a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z' />
      <path d='M46.895 13.553A1 1 0 0 0 45 14v32.41a1 1 0 0 0 .595.914 4 4 0 1 1-3.19 0A1 1 0 0 0 43 46.41V14a1 1 0 0 0-1.895-.447l-19 38a1 1 0 0 0 0 .894L29.383 67h29.236l7.276-14.553a1 1 0 0 0 0-.894Z' />
      <rect height={8} rx={1} ry={1} width={36} x={26} y={69} />
      <path d='M29 86a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1v-7H29Z' />
    </svg>
  )
}
