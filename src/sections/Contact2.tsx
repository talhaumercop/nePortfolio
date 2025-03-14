'use client'
import React, { useState, useRef, FormEvent, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string;
  email: string; 
  message: string;
}

const Contact2: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_ovkq5or',
      'template_0p6qexj',
      {
        from_name: form.name,
        to_name: 'Talha Umar',
        from_email: form.email,
        to_email: 'yourzlove56@gmail.com',
        message: form.message,
      },  
      'qc18ktF-HDbAcROh-'
    ).then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong.')
    })
  }

  return (
    <div className='xl:mt-0 md:mt-8 mt-12 flex flex-col md:flex-row gap-10 items-center justify-center px-6 sm:px-12 lg:px-20'>
      <div className='flex-[0.75] bg-gray-900 p-8 rounded-2xl w-full max-w-2xl shadow-lg'>
        <h3 className='text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-300 to-sky-500 bg-clip-text'>Contact Me</h3>
        <p className='text-gray-400 mt-2'>Feel free to reach out for collaborations or just a friendly hello! 👋</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='John Doe'
              className='bg-gray-800 py-3 px-4 text-white rounded-lg outline-none border border-gray-700 focus:border-emerald-400 transition'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='johndoe@example.com'
              className='bg-gray-800 py-3 px-4 text-white rounded-lg outline-none border border-gray-700 focus:border-emerald-400 transition'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-gray-800 py-3 px-4 text-white rounded-lg outline-none border border-gray-700 focus:border-emerald-400 transition resize-none'
            />
          </label>
          <button
            type='submit'
            className='bg-emerald-500 hover:bg-emerald-600 transition py-3 px-6 w-full sm:w-fit text-white font-bold shadow-lg rounded-xl flex justify-center items-center'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact2;