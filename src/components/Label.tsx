type props = {
  children: string,
  htmlFor: string
}

export default function Label ({children = 'children', htmlFor = 'htmlFor'}) {
  return (
    <label className='-mb-6' htmlFor={htmlFor}>{children}<span className='text-red-500' title='Campo requerido'> *</span></label>
  )
}