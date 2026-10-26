
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { ArrowUp } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-7 text-slate-900 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 min-[400px]:px-5 sm:px-8 sm:py-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 sm:gap-7 lg:flex-row lg:items-center lg:justify-between">

        {/* Logo and description */}
        <a
          href="#home"
          className="group flex max-w-full items-center gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white transition group-hover:bg-emerald-700">
            T
          </div>

          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">
              MERN Stack Developer
            </p>

            <p className="text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
              Building meaningful web experiences
            </p>
          </div>
        </a>

        {/* Quick links */}
        <nav
          aria-label="Footer navigation"
          className="flex max-w-full flex-wrap justify-center gap-x-4 gap-y-3 text-xs text-slate-600 dark:text-slate-300 sm:gap-x-5 sm:text-sm"
        >
          <a href="#about" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            About
          </a>

          <a href="#skills" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Projects
          </a>

          <a href="#education" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Education
          </a>

          <a href="#contact" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Contact
          </a>
        </nav>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/Thazu121"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-600 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/thasleema-p-k"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-600 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-6 w-full max-w-6xl border-t border-slate-100 pt-5 text-center text-xs leading-5 text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:mt-7 sm:text-sm">
        © {currentYear} Thasleema. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
