import Bubble from './Bubble'

export default function BackgroundHero (): JSX.Element {
  const array = Array.from({ length: 100 }, (_, i) => i + 1)

  return (
    <div className='w-full h-screen absolute '>
      {
      array.map(i => {
        return (
          <Bubble
            key={i} duration={Math.floor(Math.random() * (30 - 4) + 4).toString() + 's'} position={`${i % 5 === 0 ? i : -10}`}
          />
        )
      }
      )
      }
    </div>
  )
}
