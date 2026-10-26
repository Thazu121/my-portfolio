
function Education() {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-emerald-50/50 to-white px-5 py-20 text-slate-900 transition-colors duration-300 dark:from-slate-900 dark:to-slate-950 dark:text-slate-100 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Education & Training
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            My learning journey
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            My academic background and technical training in
            web application development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mt-12 space-y-6 border-l-2 border-emerald-200 pl-6 dark:border-emerald-900 sm:pl-8">

          {/* B.Tech Education */}
          <article className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-emerald-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800 sm:p-8">
            <span className="absolute -left-[35px] top-8 h-4 w-4 rounded-full border-4 border-white bg-emerald-600 dark:border-slate-900 sm:-left-[43px]" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Academic Education
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                  B.Tech in Computer Science and Engineering
                </h3>

                <p className="mt-2 font-medium text-slate-700 dark:text-slate-300">
                  College of Engineering Thalassery
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
              Studied Computer Science and Engineering, building
              a foundation in computing and software development.
            </p>
          </article>

          {/* MERN Stack Training */}
          <article className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-emerald-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800 sm:p-8">
            <span className="absolute -left-[35px] top-8 h-4 w-4 rounded-full border-4 border-white bg-emerald-600 dark:border-slate-900 sm:-left-[43px]" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Technical Training
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                  MERN Stack Development
                </h3>

                <p className="mt-2 font-medium text-slate-700 dark:text-slate-300">
                  Entri Elevate
                </p>
              </div>

              <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                August 2026
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
              Completed MERN Stack training covering modern web
              development with React, Node.js, Express.js, and
              MongoDB, supported by practical project work.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Education
