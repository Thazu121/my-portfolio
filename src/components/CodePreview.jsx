function CodePreview() {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-xl">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-emerald-200/30 blur-2xl dark:bg-emerald-500/10 sm:-inset-4 sm:bg-emerald-200/40 sm:dark:bg-emerald-500/15" />

      {/* Main code card */}
      <div className="relative min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-2xl dark:border-slate-700 sm:rounded-2xl">
        {/* Window header */}
        <div className="flex min-w-0 items-center justify-between gap-2 border-b border-white/10 bg-slate-900 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4">
          <div className="flex shrink-0 gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 sm:h-3 sm:w-3" />
          </div>

          <span className="min-w-0 truncate text-xs text-slate-400 sm:text-sm">
            SpendWise / App.jsx
          </span>

          <span className="shrink-0 rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-400 sm:text-xs">
            JSX
          </span>
        </div>

        {/* Code content */}
        <div className="overflow-x-auto p-3 font-mono text-[10px] leading-6 sm:p-5 sm:text-xs sm:leading-7 lg:p-7 lg:text-sm">
          <p className="mb-4 text-slate-500 sm:mb-5">
            {'// Building useful experiences'}
          </p>

          <p className="whitespace-nowrap">
            <span className="text-purple-400">const</span>{' '}
            <span className="text-sky-300">developer</span>{' '}
            <span className="text-slate-300">= {'{'}</span>
          </p>

          <p className="whitespace-nowrap pl-3 sm:pl-5">
            <span className="text-emerald-300">focus</span>
            <span className="text-slate-300">: </span>
            <span className="text-amber-200">
              'Full Stack Development'
            </span>
            <span className="text-slate-300">,</span>
          </p>

          <p className="whitespace-nowrap pl-3 sm:pl-5">
            <span className="text-emerald-300">frontend</span>
            <span className="text-slate-300">: [</span>
          </p>

          <p className="whitespace-nowrap pl-6 text-amber-200 sm:pl-10">
            'React', 'Redux Toolkit'
          </p>

          <p className="pl-3 text-slate-300 sm:pl-5">],</p>

          <p className="whitespace-nowrap pl-3 sm:pl-5">
            <span className="text-emerald-300">backend</span>
            <span className="text-slate-300">: [</span>
          </p>

          <p className="whitespace-nowrap pl-6 text-amber-200 sm:pl-10">
            'Node.js', 'Express', 'MongoDB'
          </p>

          <p className="pl-3 text-slate-300 sm:pl-5">],</p>

          <p className="whitespace-nowrap pl-3 sm:pl-5">
            <span className="text-emerald-300">mindset</span>
            <span className="text-slate-300">: </span>
            <span className="text-amber-200">
              'Always learning'
            </span>
          </p>

          <p className="text-slate-300">{'}'}</p>

          {/* Featured project */}
          <div className="mt-5 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
            <p className="mb-3 text-xs text-slate-400 sm:text-sm">
              <span className="text-emerald-400">●</span>{' '}
              Featured project
            </p>

            <div className="flex min-w-0 flex-col items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:rounded-xl sm:p-4">
              <div className="min-w-0">
                <p className="font-sans text-sm font-semibold text-white">
                  SpendWise
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Frontend receipt &amp; expense manager
                </p>
              </div>

              <span className="max-w-full shrink-0 rounded-lg bg-emerald-400/10 px-2.5 py-2 font-sans text-[10px] text-emerald-300 sm:px-3 sm:text-xs">
                React + Redux
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodePreview