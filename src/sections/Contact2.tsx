'use client'
import React from 'react'
import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '', 
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_c9e1cnl',
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
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-300 to-sky-300 py-12 px-4 sm:px-6 lg:px-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-md w-full space-y-8 bg-gray-800 p-10 rounded-xl shadow-2xl'
      >
        <div className="text-center">
          <p className="text-lg text-emerald-300 font-semibold">Get in touch</p>
          <h3 className="mt-2 text-3xl font-bold text-white">Contact.</h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 space-y-6'
        >
          <label className='block'>
            <span className='text-gray-300 text-sm font-semibold mb-2 block'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-300 transition duration-200'
            />
          </label>
          <label className='block'>
            <span className='text-gray-300 text-sm font-semibold mb-2 block'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-300 transition duration-200'
            />
          </label>
          <label className='block'>
            <span className='text-gray-300 text-sm font-semibold mb-2 block'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-300 transition duration-200'
            />
          </label>
          <button
            type='submit'
            className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-emerald-300 to-sky-300 hover:from-emerald-400 hover:to-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 transition duration-200'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact
