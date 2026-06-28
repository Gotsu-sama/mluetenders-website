'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5CA3E0]/40 focus:border-[#5CA3E0]/60 transition-all duration-200 text-sm'

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-[#080E1A] dark:to-[#0B1220]" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blob opacity-[0.08] dark:opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #5CA3E0 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left */}
          <motion.div variants={slideInLeft}>
            <div className="inline-flex mb-6">
              <span className="px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium">
                Get in touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
              We&apos;re here to{' '}
              <span className="text-gradient">help you grow</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              Have a question about Mlue Tenders? Want to explore an enterprise plan or partnership? We&apos;d love to hear from you.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:support@mluetenders.com"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03] hover:border-[#5CA3E0]/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#5CA3E0]/10 flex items-center justify-center text-[#5CA3E0] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">Email Support</p>
                  <p className="text-sm text-[#5CA3E0]">support@mluetenders.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03]">
                <div className="w-11 h-11 rounded-xl bg-[#14754E]/10 flex items-center justify-center text-[#14754E] dark:text-[#1A9663]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">In-App Support</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Reply within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={slideInRight}>
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03] shadow-xl shadow-slate-200/30 dark:shadow-black/30">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ahmed Benali"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ahmed@example.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company (optional)"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help you?"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#5CA3E0] to-[#3D8DD4] shadow-lg shadow-[#5CA3E0]/25 hover:shadow-[#5CA3E0]/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#14754E]/10 flex items-center justify-center text-[#14754E] dark:text-[#1A9663] mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
