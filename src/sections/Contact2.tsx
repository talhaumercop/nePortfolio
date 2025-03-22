'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
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
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    }).catch((error) => {
      setLoading(false);
      console.error(error);
      alert('Something went wrong.');
    });
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      style={{
        backgroundSize: '200% 200%',
        backgroundImage: 'linear-gradient(45deg, #000000, #333333, #666666, #000000, #333333, #666666)',      
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
      >
        <div className="text-center">
          <p className="text-lg text-black font-semibold">Get in touch</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-800">Contact.</h3>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
          <label className="block">
            <span className="text-gray-600 text-sm font-semibold mb-2 block">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-emerald-300 focus:border-emerald-400 transition duration-200"
            />
          </label>

          <label className="block">
            <span className="text-gray-600 text-sm font-semibold mb-2 block">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-emerald-300 focus:border-emerald-400 transition duration-200"
            />
          </label>

          <label className="block">
            <span className="text-gray-600 text-sm font-semibold mb-2 block">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-emerald-300 focus:border-emerald-400 transition"
            />
          </label>

          <motion.button
            type="submit"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundSize: '200% 200%',
              backgroundImage: 'linear-gradient(45deg, #000000, #333333, #666666, #000000, #333333, #666666)'
            }}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-200"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
