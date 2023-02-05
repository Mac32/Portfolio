import BackgroundContact from './BackgroundContact'
import H2 from './H2'
import HorizontalLine from './HorizontalLine'
import Label from './Label'
import TextInput from './TextInput'
import emailjs, { send } from '@emailjs/browser'
import React, { useState } from 'react'

export default function SectionContact () {
  const [templateForm, setTemplateForm] = useState({})
  const [sended, setSended] = useState(false)

  if (sended) return (<h3>Mensaje enviado con exito! </h3>)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.send('service_fgwvyva', 'template_695fg4e', templateForm, 'WD-Lh4KXqoNe1lmJk').then((result) => {
      alert('Correo enviado con exito')
      e.target.reset()
      setSended(true)
    }, (error) => {
      console.log(error.text)
    })
  }
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setTemplateForm({
      ...templateForm,
      [name]: value
    })
  }

  return (
    <div id='contactMe'>
      <H2 textAlign='text-center'>Let's work together</H2>
      <HorizontalLine width='w-3/4' />

      <div className='mt-16'>
        <form className='grid gap-6 w-2/5 mx-auto' onSubmit={sendEmail}>
          <Label htmlFor='name'>Name:</Label>
          <TextInput required onChange={handleChange} name='name' placeholder='Name' />
          <Label htmlFor='email'>Email:</Label>
          <TextInput required onChange={handleChange} name='email' placeholder='Email' />
          <Label htmlFor='message'>How can I help you?</Label>
          <textarea required onChange={handleChange} className='border-2 rounded-md border-gray-500 p-3' name='message' id='message' cols={30} rows={5} />
          <button className='hover:bg-purple-500 hover:text-white hover:border-purple-500 border-2 border-gray-500 rounded-md py-1 w-40 mx-auto' type='submit'>Submit message</button>
        </form>
      </div>

      <div className='mx-auto bg-blue-400/20 text-center my-10 w-2/5 rounded-md py-6'>
        <p className='text-2xl mb-2'>My email:</p>
        <address className='text-lg underline underline-offset-4'>alberth.bompart22@gmail.com</address>
      </div>
    </div>
  )
}
