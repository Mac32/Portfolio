import H2 from './H2'
import HorizontalLine from './HorizontalLine'
import Label from './Label'
import TextInput from './TextInput'
import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
export default function SectionContact (): JSX.Element {
  const [templateForm, setTemplateForm] = useState({})
  const [sended, setSended] = useState(false)

  if (sended) return (<h3>Mensaje enviado con exito! </h3>)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    emailjs.send('service_fgwvyva', 'template_695fg4e', templateForm, 'WD-Lh4KXqoNe1lmJk').then((result) => {
      alert('Correo enviado con exito')
      if (e.currentTarget.form != null) {
        e.currentTarget.form.reset()
      }
      setSended(true)
    }, (error) => {
      console.log(error.text)
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >): void => {
    e.preventDefault()
    const { name, value } = e.target
    setTemplateForm({
      ...templateForm,
      [name]: value
    })
  }

  return (
    <div id='contactMe'>
      <H2 textAlign='text-center'>Trabajemos juntos</H2>
      <HorizontalLine width='w-3/4' />

      <div className='mt-16'>
        <form className='grid gap-6 w-11/12 md:w-9/12 lg:w-2/5 mx-auto' onSubmit={(e: React.FormEvent<HTMLFormElement>) => sendEmail}>
          <Label htmlFor='name'>Nombre:</Label>
          <TextInput required onChange={handleChange} name='name' placeholder='Nombre' />
          <Label htmlFor='email'>Correo:</Label>
          <TextInput required onChange={handleChange} name='email' placeholder='Correo' />
          <Label htmlFor='message'>Como te puedo ayudar?</Label>
          <textarea required onChange={handleChange} className='border-2 rounded-md border-gray-500 p-3' name='message' id='message' cols={30} rows={5} />
          <button className='hover:transition-all hover:ease-in-out hover:shadow-inner hover:animate-pulse  hover:shadow-[#2B1C8C]/90 border-2 border-gray-500 rounded-md py-1 w-40 mx-auto' type='submit'>Enviar mensaje</button>
        </form>
      </div>

      <div className='mx-auto bg-blue-400/20 text-center my-10 w-11/12 md:w-9/12 lg:w-2/5 rounded-md py-6'>
        <p className='text-2xl mb-2'>Mi correo:</p>
        <address className='text-lg underline underline-offset-4'>alberth.bompart22@gmail.com</address>
      </div>
    </div>
  )
}
