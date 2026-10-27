
const projects = [
 
{
  number: '01',
  title: 'SpendWise',
  type: 'Full Stack Application',
  description:
    'A full-stack receipt and expense management application for tracking expenses, managing receipts, categorizing transactions, and monitoring spending through an interactive dashboard.',
  technologies: [
    'React',
    'Redux Toolkit',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
  ],
    live: 'https://receipt-expense-manager.vercel.app/',
  },
  {
    number: '02',
    title: 'MERN E-commerce',
    type: 'Full Stack Project',
    description:
      'An e-commerce project with product browsing, authentication, and cart functionality.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
    ],
    live: 'https://ecommerce-frontend-theta-bay.vercel.app/',
  },
  {
    number: '03',
    title: 'CRM Application',
    type: 'Full Stack Application',
    description:
      'A CRM application for managing customer records and workflows.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    live: 'https://crm-frontend-iaym.vercel.app/',
  },
  {
    number: '04',
    title: 'Travel Buddy',
    type: 'Frontend Website',
    description:
      'A modern, responsive travel website featuring popular destinations, destination cards with images and descriptions, a hero section, a contact form, and a newsletter section.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Thazu121/Travels',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-white px-4 py-14 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 min-[400px]:px-5 sm:px-8 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 sm:text-sm">
              My Work
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white min-[400px]:text-3xl sm:mt-4 sm:text-4xl">
              Projects I've worked on
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-base">
              Practical projects that showcase my development
              skills and learning journey.
            </p>
          </div>

          <span className="self-start rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 sm:text-sm md:mb-1 md:shrink-0">
            {projects.length} Selected Projects
          </span>
        </div>

        {/* Project cards */}
        <div className="mt-7 grid grid-cols-1 gap-4 min-[600px]:grid-cols-2 sm:mt-10 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800 dark:hover:shadow-black/20 sm:p-5 lg:p-6 motion-reduce:transform-none motion-reduce:transition-none"
            >
              {/* Card header */}
              <div className="flex min-w-0 items-start justify-between gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 sm:h-11 sm:w-11">
                  {project.number}
                </span>

                <span className="max-w-[75%] rounded-full bg-slate-100 px-2.5 py-1.5 text-right text-[10px] font-medium leading-4 text-slate-600 dark:bg-slate-800 dark:text-slate-300 min-[400px]:text-xs">
                  {project.type}
                </span>
              </div>

              {/* Project details */}
              <h3 className="mt-5 break-words text-lg font-bold text-slate-950 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400 sm:mt-6 sm:text-xl">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:leading-7">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="max-w-full break-words rounded-md border border-emerald-100 bg-emerald-50 px-2 py-1.5 text-[11px] font-medium leading-4 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300 min-[400px]:text-xs sm:px-2.5"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800 sm:mt-6">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
