import { useState, useRef } from 'react'

export default function ContactSection () {
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [status, setStatus] = useState('')
  const emailRef = useRef(null)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { email, message } = formData

    if (!email || !message) {
      setStatus('Please fill out all fields.')
      if (!email) emailRef.current.focus()
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('Please enter a valid email address.')
      emailRef.current.focus()
      return
    }

    console.log('Form submitted:', formData)
    setStatus('✅ Thank you! I will get back to you soon.')
    setFormData({ email: '', message: '' })
  }

  return (
    <section id='contact' className='py-16 px-4'>
      <h2 className='text-4xl font-bold text-center mb-12 tracking-tight'>
        Get In Touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className='max-w-xl mx-auto space-y-6 bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow'
        noValidate
      >
        <div>
          <label htmlFor='email' className='block mb-1 font-medium'>
            Email
          </label>
          <input
            ref={emailRef}
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div>
          <label htmlFor='message' className='block mb-1 font-medium'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
        >
          Send Message
        </button>

        {status && (
          <p className='text-center text-sm text-slate-700 dark:text-slate-300 mt-4'>
            {status}
          </p>
        )}
      </form>

      <footer className='py-8 text-center text-sm text-slate-500 dark:text-slate-400'>
        <p>
          &copy; {new Date().getFullYear()} Fakhir Ahmed Khan. All rights
          reserved.
        </p>
        <p>Designed and built with ❤️ using React & Tailwind CSS.</p>
      </footer>
    </section>
  )
}
