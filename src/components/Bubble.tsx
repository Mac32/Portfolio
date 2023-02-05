interface props {
  duration: string
  position: string
}

export default function Bubble ({ duration, position }: props): JSX.Element {
  const style =
    {
      animationDuration: duration,
      left: `${position}%`
    }

  return (
    <div style={style} className='h-3 w-3 rounded-full bg-white blur-sm left-3 bottom-0 bubble-effect absolute' />
  )
}
