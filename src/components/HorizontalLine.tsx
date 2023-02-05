interface props {
  width?: string
}

export default function HorizontalLine ({ width = 'w-1/2' }: props): JSX.Element {
  return (
    <hr className={`border-2 border-transparent border-b-white ${width} m-auto mb-1`} />
  )
}
