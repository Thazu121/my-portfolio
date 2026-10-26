import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const contactLinks = [
  {
    label: 'Email',
    value: 'thasleemapk2351@gmail.com',
    href: 'mailto:thasleemapk2351@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/thasleema-p-k',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    value: 'Thazu121',
    href: 'https://github.com/Thazu121',
    icon: FaGithub,
  },
]


function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const subject = encodeURIComponent(
      `Portfolio contact from ${name}`
    )

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    window.location.href =
      `mailto:thasleemapk2351@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="overflow-hidden bg-[#f7faf8] px-4 py-14 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 min-[400px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl min-w-0">

        {/* Heading */}
        <div className="mb-9 text-center sm:mb-12">
          <span className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 sm:px-4 sm:text-sm">
            Get in touch
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white min-[400px]:text-3xl sm:text-4xl">
            Let's work together
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-base">
            Have an opportunity, project idea, or just want to connect?
            Feel free to send me a message.
          </p>
        </div>

        {/* Responsive columns */}
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2">

          {/* Contact information */}
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 min-[400px]:p-5 sm:rounded-3xl sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
              Contact information
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
              I'm open to discussing web development opportunities
              and interesting projects.
            </p>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {contactLinks.map((item) => {
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
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-slate-100 p-3 transition duration-200 hover:border-emerald-200 hover:bg-emerald-50 dark:border-slate-800 dark:hover:border-emerald-800 dark:hover:bg-slate-800 min-[400px]:gap-4 min-[400px]:p-4 sm:rounded-2xl"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950 dark:text-emerald-300 dark:group-hover:bg-emerald-600 dark:group-hover:text-white sm:h-12 sm:w-12">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                        {item.label}
                      </p>

                      <p className="break-all text-sm font-semibold text-slate-800 dark:text-slate-100 min-[400px]:break-words sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="mt-6 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/60 sm:mt-8 sm:rounded-2xl sm:p-5">
              <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 sm:text-base">
                Let's build something meaningful.
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-700 dark:text-emerald-200">
                I'm interested in learning, collaborating, and
                creating useful web applications.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 min-[400px]:p-5 sm:rounded-3xl sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
              Send me a message
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
              Fill in the details below to prepare an email.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 sm:mt-8 sm:space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className="w-full min-w-0 rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-emerald-950 sm:px-4 sm:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Your email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-emerald-950 sm:px-4 sm:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  required
                  className="w-full min-w-0 resize-y rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-emerald-950 sm:px-4 sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 dark:focus:ring-emerald-900 motion-reduce:transition-none sm:text-base"
              >
                Send message
                <Send size={18} />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                This form opens your default email application.
                It does not send messages directly from the website.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
