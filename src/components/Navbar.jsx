import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react'
import { toggleTheme } from '../redux/features/themeSlice'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const dispatch = useDispatch()
  const mode = useSelector((state) => state.theme.mode)
  const isDark = mode === 'dark'

  const closeMenu = () => setMenuOpen(false)

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  const themeButton = (
    <button
      type="button"
      onClick={handleThemeToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:bg-slate-800"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-3 min-[400px]:gap-3 min-[400px]:px-5 sm:px-8 sm:py-4 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white transition-colors hover:bg-emerald-700 sm:h-10 sm:w-10 sm:text-base">
            T
          </span>

          <span className="truncate text-sm font-bold tracking-tight text-slate-900 dark:text-white min-[400px]:text-base sm:text-lg">
            THASLEEMA PK<span className="text-emerald-600 dark:text-emerald-400">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          {themeButton}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 xl:px-5"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile and tablet actions */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          {themeButton}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile and tablet dropdown */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 min-[400px]:px-5 sm:px-8 lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700"
            >
              Let's Talk
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
