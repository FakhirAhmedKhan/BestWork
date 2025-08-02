import { motion as Motion } from 'framer-motion'

export default function SkillsSection ({ skills }) {
  return (
    <section id='skills' className='py-20'>
      {/* Title */}
      <Motion.h2
        className='text-4xl font-bold text-center mb-12 tracking-tight'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills & Toolkit
      </Motion.h2>

      {/* Skills Grid */}
      <div className='max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
        {skills.map((skill, index) => (
          <Motion.div
            key={skill.name}
            className='flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/20 dark:bg-slate-800/50 backdrop-blur-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={skill.icon} alt={skill.name} className='h-12 w-12 mb-4' />
            <span className='font-semibold text-sm'>{skill.name}</span>
          </Motion.div>
        ))}
      </div>
    </section>
  )
}
