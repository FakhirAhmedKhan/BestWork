import { useState, useRef } from 'react'
import { motion as Motion } from 'framer-motion'

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
      setStatus('❌ Please fill out all fields.')
      if (!email) emailRef.current.focus()
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('❌ Please enter a valid email address.')
      emailRef.current.focus()
      return
    }

    console.log('Form submitted:', formData)
    setStatus('✅ Thank you! I will get back to you soon.')
    setFormData({ email: '', message: '' })
  }

  return (
    <Motion.section
      id='contact'
      className='py-16 px-4'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className='text-4xl font-bold text-center mb-12 tracking-tight'>
        Get In Touch
      </h2>

      <Motion.form
        onSubmit={handleSubmit}
        className='max-w-xl mx-auto space-y-6 bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow'
        noValidate
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            ref={emailRef}
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white'
            required
          />
        </div>

        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows='4'
            className='w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white resize-none'
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
          <motion.p
            className='text-center text-sm text-slate-700 dark:text-slate-300 mt-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {status}
          </motion.p>
        )}
      </Motion.form>

      <Motion.footer
        className='py-8 text-center text-sm text-slate-500 dark:text-slate-400'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>
          &copy; {new Date().getFullYear()} Fakhir Ahmed Khan. All rights
          reserved.
        </p>
        <p>Designed and built with ❤️ using React & Tailwind CSS.</p>
      </Motion.footer>
    </Motion.section>
  )
}
