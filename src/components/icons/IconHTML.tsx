import ContentSkill from '../ContentSkill'

type props ={
  dimentions: number
}
// '#e34f26'
export default function IconHTML ({dimentions = 32}:props) {
  const color = 'fill-orange-600'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-label='HTML5'
      viewBox='0 0 512 512'
      width={dimentions}
      height={dimentions}
    >
      <path className={color} d='M71 460 30 0h451l-41 460-185 52' />
      <path className={color} d='m256 472 149-41 35-394H256' />
      <path
        fill='#fff'
        d='M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147-63-17-4-45h-56l7 89 116 32z'
      />
      <path
        fill='#fff'
        d='M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z'
      />
    </svg>
  )
}
