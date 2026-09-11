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
    <section className="w-full bg-white py-20 px-6 border-b border-zinc-200">
      <Toaster position='bottom-center' />
      <div className="max-w-md mx-auto">
        <span className="inline-flex items-center px-4 py-1.5 border border-blue-600/30 bg-blue-50/80 text-xs font-bold uppercase tracking-wider text-blue-700 mb-5 rounded-sm">
          Get In Touch
        </span>
        <h2 className="text-3xl font-black text-zinc-950 mb-8 tracking-tight uppercase">
          Book a call with us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full border border-zinc-300 bg-white text-zinc-900 px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 transition-colors rounded-sm shadow-2xs"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full border border-zinc-300 bg-white text-zinc-900 px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 transition-colors rounded-sm shadow-2xs"
          />
          <input
            name="number"
            type="number"
            required
            placeholder="+91..."
            className="w-full border border-zinc-300 bg-white text-zinc-900 px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 transition-colors rounded-sm shadow-2xs"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What would you like to talk about?"
            className="w-full border border-zinc-300 bg-white text-zinc-900 px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 transition-colors rounded-sm shadow-2xs"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-blue-600 text-white py-3 text-sm font-bold uppercase tracking-wide hover:bg-blue-700 transition-all shadow-sm active:scale-95 disabled:opacity-50 rounded-sm"
          >
            {status === 'sending' ? 'Sending…' : 'Send & book a call'}
          </button>

          {status === 'sent' && (
            <p className="text-sm text-green-600 text-center">
              Thanks! We'll get back to you shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 text-center">
              Something went wrong — please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default BookCall