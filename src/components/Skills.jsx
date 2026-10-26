const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-gradient-to-b from-emerald-50/60 to-white px-4 py-14 transition-colors duration-300 dark:from-slate-900 dark:to-slate-950 min-[400px]:px-5 sm:px-8 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 sm:text-sm">
            My Skills
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white min-[400px]:text-3xl sm:mt-4 sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-base sm:leading-7">
            Technologies and tools I've learned and practiced
            through training and project development.
          </p>
        </div>

        {/* Skill group cards */}
        <div className="mt-7 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:mt-10 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-emerald-700 sm:p-5 lg:p-6 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 sm:h-10 sm:w-10">
                  {group.title === 'Frontend'
                    ? '01'
                    : group.title === 'Backend'
                      ? '02'
                      : group.title === 'Database'
                        ? '03'
                        : '04'}
                </div>

                <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="max-w-full break-words rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-1.5 text-xs font-medium leading-5 text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-300 sm:px-3 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
