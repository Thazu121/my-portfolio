
function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white px-4 py-14 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 min-[400px]:px-5 sm:px-8 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">

        {/* About content */}
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 sm:text-sm">
            About Me
          </p>

          <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white min-[400px]:text-3xl sm:mt-4 sm:text-4xl">
            Passionate about building useful web applications.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
            I'm a Computer Science graduate who recently completed
            MERN Stack training. I enjoy developing responsive,
            user-friendly applications and improving my skills
            through hands-on projects.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
            My learning journey includes frontend development with
            React and Redux Toolkit, as well as backend development
            with Node.js, Express, and MongoDB. I focus on writing
            organized code and creating intuitive user experiences.
          </p>
        </div>

        {/* Skill overview cards */}
        <div className="grid min-w-0 grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4">

          {/* Frontend */}
          <div className="min-w-0 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-emerald-900 dark:bg-emerald-950/40 dark:hover:shadow-emerald-950/30 sm:p-5 lg:p-6 motion-reduce:transform-none motion-reduce:transition-none">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
              Frontend
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Responsive interfaces with React, JavaScript,
              Tailwind CSS, and Redux Toolkit.
            </p>
          </div>

          {/* Backend */}
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-black/20 sm:p-5 lg:p-6 motion-reduce:transform-none motion-reduce:transition-none">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
              Backend
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Server-side development with Node.js and Express,
              and data storage with MongoDB.
            </p>
          </div>

          {/* Problem solving */}
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-black/20 sm:p-5 lg:p-6 motion-reduce:transform-none motion-reduce:transition-none">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
              Problem Solving
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Learning through practical tasks, debugging,
              and building application features.
            </p>
          </div>

          {/* Continuous learning */}
          <div className="min-w-0 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-emerald-900 dark:bg-emerald-950/40 dark:hover:shadow-emerald-950/30 sm:p-5 lg:p-6 motion-reduce:transform-none motion-reduce:transition-none">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
              Continuous Learning
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Strengthening my development skills through
              hands-on projects and practice.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
