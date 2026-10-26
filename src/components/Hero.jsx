import CodePreview from './CodePreview'

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white to-emerald-50/60 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 -top-16 h-48 w-48 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-500/10 sm:-right-32 sm:-top-24 sm:h-80 sm:w-80" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 min-[400px]:px-5 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24 xl:py-28">
        {/* Hero content */}
        <div className="min-w-0 w-full">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 min-[400px]:text-sm sm:mb-7 sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            MERN Stack Developer
          </div>

          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white [overflow-wrap:anywhere] min-[400px]:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl">
            Turning ideas into{' '}
            <span className="text-emerald-600 dark:text-emerald-400">
              meaningful
            </span>{' '}
            web experiences.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 min-[400px]:text-base sm:mt-6 sm:text-lg sm:leading-8">
            I'm a Computer Science graduate who recently completed
            MERN Stack training and builds modern web applications
            using React, Redux Toolkit, Node.js, Express, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex w-full flex-col gap-3 min-[400px]:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 motion-reduce:transition-none min-[400px]:px-5 min-[400px]:text-base sm:w-auto"
            >
              Explore My Projects ↗
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 transition duration-200 hover:border-emerald-300 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 motion-reduce:transition-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:bg-slate-800 min-[400px]:px-5 min-[400px]:text-base sm:w-auto"
            >
              Get In Touch
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-3 text-xs text-slate-500 dark:text-slate-400 min-[400px]:text-sm sm:mt-10 sm:gap-x-6">
            <span>✓ Responsive UI</span>
            <span>✓ Hands-on Projects</span>
          </div>
        </div>

        {/* Code preview */}
        <div className="min-w-0 w-full">
          <CodePreview />
        </div>
      </div>
    </section>
  )
}

export default Hero