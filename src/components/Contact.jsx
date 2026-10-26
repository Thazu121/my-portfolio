import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useState } from 'react'
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { submitContact } from '../api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
    value: 'thasleemapk2351@gmail.com',
        href: 'mailto:thasleemapk2351@gmail.com',

    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/thasleema-p-k',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Thazu121',
    href: 'https://github.com/Thazu121',
    },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (status.message) {
      setStatus({ type: '', message: '' })
    }
  }
const handleSubmit = async (event) => {
  event.preventDefault()

  setIsSubmitting(true)
  setStatus({ type: '', message: '' })

  try {
    const result = await submitContact(formData)

    if (result.success && result.data?.emailSent) {
      setStatus({
        type: 'success',
        message: result.message || 'Your message was sent successfully!',
      })

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        type: 'error',
        message:
          result.message ||
          'Your message could not be emailed. Please try again later.',
      })
    }
  } catch (error) {
    console.error('Contact form submission error:', error)

    setStatus({
      type: 'error',
      message:
        error.message ||
        'Failed to send your message. Please try again later.',
    })
  } finally {
    setIsSubmitting(false)
  }
}
  const inputClasses =
    'w-full min-w-0 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white sm:text-base'

  return (
    <section
      id="contact"
      className="overflow-hidden bg-white px-4 py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 sm:text-sm">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s Work{' '}
            <span className="text-emerald-500">Together</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
            Have a project in mind or want to discuss an opportunity?
            Feel free to reach out. I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Contact details */}
          <div className="min-w-0">
            <h3 className="text-xl font-bold sm:text-2xl">
              Let&apos;s Connect
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-7">
              I&apos;m always open to discussing new projects, creative
              ideas, and opportunities to be part of your vision.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === 'Email' ? undefined : '_blank'
                    }
                    rel={
                      item.label === 'Email'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 p-3 transition duration-300 hover:border-emerald-500 hover:bg-emerald-50 sm:gap-4 sm:p-4 dark:border-gray-800 dark:hover:bg-gray-900"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white sm:h-12 sm:w-12 dark:bg-emerald-950 dark:text-emerald-400">
                      <Icon size={20} className="sm:hidden" />
                      <Icon size={22} className="hidden sm:block" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                        {item.label}
                      </p>

                      <p className="break-words text-sm font-medium text-gray-900 sm:text-base dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="mt-3 flex items-center gap-3 rounded-xl border border-gray-200 p-3 sm:mt-4 sm:gap-4 sm:p-4 dark:border-gray-800">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 sm:h-12 sm:w-12 dark:bg-emerald-950 dark:text-emerald-400">
                <MapPin size={21} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                  Location
                </p>
                <p className="text-sm font-medium sm:text-base">
                  Kerala, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="min-w-0 rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-bold sm:text-2xl">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Fill out the form below and I&apos;ll get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 sm:mt-8 sm:space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  maxLength={5000}
                  required
                  className={`${inputClasses} min-h-32 resize-y`}
                />

                <p className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">
                  {formData.message.length}/5000
                </p>
              </div>

              {status.message && (
                <div
                  role={status.type === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                  className={`flex items-start gap-2 rounded-xl p-3 text-sm ${
                    status.type === 'success'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base dark:focus:ring-offset-gray-900"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
