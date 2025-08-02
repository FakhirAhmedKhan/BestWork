// Education Section Component
import education from '../Data/education.json'

export default function EducationSection () {
  if (!education?.length) return null

  return (
    <section id='education' className='py-20'>
      <h2 className='text-4xl font-bold text-center mb-16 tracking-tight'>
        My Journey
      </h2>
      <div className='max-w-3xl mx-auto relative'>
        {/* Vertical Timeline Line */}
        <div className='absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500'></div>

        {education.map((item, index) => {
          const isLeft = index % 2 === 0
          return (
            <div
              key={index}
              className={`relative mb-12 flex w-full items-center ${
                isLeft ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Card */}
              <div
                className={`w-full sm:w-1/2 px-4 ${
                  isLeft ? 'text-right sm:pr-8' : 'text-left sm:pl-8'
                }`}
              >
                <div className='p-6 rounded-xl border border-white/10 bg-white/20 dark:bg-slate-800/50 backdrop-blur-md shadow-xl'>
                  <p className='text-sm text-purple-500 dark:text-pink-400 mb-1'>
                    {item.year}
                  </p>
                  <h3 className='text-xl font-bold mb-1'>{item.title}</h3>
                  <p className='text-md font-semibold text-slate-700 dark:text-slate-300'>
                    {item.institution}
                  </p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>
                    {item.description}
                  </p>
                </div>
              </div>
              <div className='hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 rounded-full border-2 border-purple-500'></div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
