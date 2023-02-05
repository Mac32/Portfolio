type props = {
  placeholder: string,
  name: string,
  required: boolean,
  onChange: any
}

export default function TextInput ({placeholder = 'Ingrese Texto', name = 'Ingrese Name', onChange, required}) {
  return (
    <input name={name} required={required} onChange={onChange} type='text' className='border-2 border-gray-500 rounded-md p-1' placeholder={placeholder} />
  )
}
