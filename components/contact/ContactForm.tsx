'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

const subjects = [
  'General Inquiry',
  'Investment',
  'Career',
  'Other',
]

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: subjects[0],
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  const inputBase =
    'w-full bg-[#CBD3E5]/25 border border-[#4259A7]/20 rounded-xl px-4 pt-6 pb-3 text-[#4259A7] font-inter text-sm outline-none transition-all duration-200 placeholder-transparent focus:border-[#4259A7]/60 focus:bg-[#4259A7]/5 focus:shadow-[0_0_0_1px_rgba(66,89,167,0.25)]'

  const labelBase =
    'absolute left-4 font-inter text-[#4259A7]/50 transition-all duration-200 pointer-events-none'

  const floatingLabel = (field: string, value: string) =>
    focusedField === field || value
      ? 'top-2 text-[10px] text-[#9CAED9]'
      : 'top-[18px] text-sm'

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10 text-center flex flex-col items-center gap-5"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
        >
          <CheckCircle size={56} className="text-emerald-500" />
        </motion.div>
        <h3 className="font-space font-bold text-[#4259A7] text-2xl">Message Sent!</h3>
        <p className="font-inter text-[#4259A7]/60 text-sm max-w-xs leading-relaxed">
          Thanks, {form.name.split(' ')[0]}! A confirmation has been sent to <span className="text-[#9CAED9]">{form.email}</span>. We'll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle')
            setForm({ name: '', email: '', subject: subjects[0], message: '' })
          }}
          className="px-6 py-3 rounded-xl border border-[#4259A7]/20 text-[#4259A7]/70 hover:text-[#4259A7] hover:border-[#4259A7]/40 font-inter text-sm transition-all duration-200"
        >
          Send Another
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-3xl p-8 lg:p-10 space-y-5"
    >
      <h2 className="font-space font-bold text-[#4259A7] text-2xl mb-2">Send a Message</h2>
      <p className="font-inter text-[#4259A7]/55 text-sm mb-6">
        Fill in the form and we'll get back to you shortly.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            placeholder="Your name"
            className={inputBase}
          />
          <label htmlFor="name" className={`${labelBase} ${floatingLabel('name', form.name)}`}>
            Full Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            placeholder="your@email.com"
            className={inputBase}
          />
          <label htmlFor="email" className={`${labelBase} ${floatingLabel('email', form.email)}`}>
            Email Address
          </label>
        </div>
      </div>

      <div className="relative">
        <select
          name="subject"
          id="subject"
          value={form.subject}
          onChange={handleChange}
          onFocus={() => setFocusedField('subject')}
          onBlur={() => setFocusedField(null)}
          className={`${inputBase} appearance-none cursor-pointer`}
        >
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-[#CBD3E5] text-[#4259A7]">
              {s}
            </option>
          ))}
        </select>
        <label htmlFor="subject" className="absolute left-4 top-2 text-[10px] text-[#9CAED9] font-inter pointer-events-none">
          Subject
        </label>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-[#4259A7]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative">
        <textarea
          name="message"
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          placeholder="Your message..."
          className={`${inputBase} resize-none`}
        />
        <label htmlFor="message" className={`${labelBase} ${floatingLabel('message', form.message)}`}>
          Your Message
        </label>
      </div>

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 font-inter text-sm"
        >
          <AlertCircle size={16} className="flex-shrink-0" />
          {errorMsg}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-accent-gradient text-white font-inter font-semibold text-base transition-all duration-300 hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </>
        )}
      </button>
    </motion.form>
  )
}
