import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'react-hot-toast'

const BookCall = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_9208yki',
        'template_lyfm12f',
        {
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.number.value,
          message: e.target.message.value,
        },
        'G9aUSDGvoorNyRFZm'
      )
      setStatus('sent')
      toast.success("Mail sent successfully!");
    } catch (err) {
      console.error(err)
      setStatus('error')
      toast.error("Error send the Mail! please try again")
    }
  }

  return (
    <section className="w-full bg-white dark:bg-zinc-950 py-20 px-6 transition-colors">
      <Toaster position='bottom-center' />
      <div className="max-w-md mx-auto">
        <span className="inline-flex items-center px-4 py-1.5 border border-orange-600/40 dark:border-orange-500/40 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-500 mb-5">
          Get In Touch
        </span>
        <h2 className="text-3xl font-black text-zinc-950 dark:text-white mb-8 tracking-tight uppercase">
          Book a call with us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white px-4 py-2.5 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-600 dark:focus:border-orange-500 transition-colors"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white px-4 py-2.5 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-600 dark:focus:border-orange-500 transition-colors"
          />
          <input
            name="number"
            type="number"
            required
            placeholder="+91..."
            className="w-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white px-4 py-2.5 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-600 dark:focus:border-orange-500 transition-colors"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What would you like to talk about?"
            className="w-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white px-4 py-2.5 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-orange-600 dark:focus:border-orange-500 transition-colors"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-orange-600 text-white py-3 text-sm font-bold uppercase tracking-wide hover:bg-orange-500 transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send & book a call'}
          </button>

          {status === 'sent' && (
            <p className="text-sm text-green-600 dark:text-green-400 text-center">
              Thanks! We'll get back to you shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400 text-center">
              Something went wrong — please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default BookCall