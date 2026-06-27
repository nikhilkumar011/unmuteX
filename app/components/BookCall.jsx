import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Toaster,toast } from 'react-hot-toast'

const BookCall = () => {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_9208yki',     // your Service ID
        'template_lyfm12f',    // your Template ID
        {
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.number.value,
          message: e.target.message.value,
        },
        'G9aUSDGvoorNyRFZm'     // your Public Key
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
    <section className="w-full bg-white dark:bg-neutral-950 py-20 px-6 transition-colors">
        <Toaster position='bottom-center'/>
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-6 text-center">
          Book a call with us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            name="number"
            type="number"
            required
            placeholder="+91..."
            className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What would you like to talk about?"
            className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50"
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