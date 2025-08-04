import { useState, useMemo, useCallback } from 'react'
import { motion as Motion } from 'framer-motion'
import renderIcon from '../utility/renderIcon'

const categoriesFrom = data => ['All', ...new Set(data.map(p => p.category))]

const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={() => onClick(label)}
    className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
      active
        ? 'bg-purple-600 text-white shadow-lg'
        : 'bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm'
    }`}
  >
    {label}
  </button>
)

const ProjectCard = ({ project, index }) => (
  <Motion.div
    key={project.id}
    className='group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/20 dark:bg-slate-800/50 backdrop-blur-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2'
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <img
      src={project.imageUrl}
      alt={project.title}
      className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110'
    />
    <div className='p-6 flex flex-col flex-grow'>
      <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
      <p className='text-slate-600 dark:text-slate-400 text-sm flex-grow mb-4'>
        {project.description}
      </p>
      <div className='mt-auto flex justify-between items-center'>
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-pink-400 hover:underline'
        >
          Live Demo
        </a>
        <a
          href={project.codeLink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-slate-500 dark:text-slate-400 hover:text-purple-500 dark:hover:text-pink-400 transition-colors'
        >
          {renderIcon('GithubIcon', 'w-6 h-6')}
        </a>
      </div>
    </div>
  </Motion.div>
)

export default function ProjectSection ({ projectData }) {
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const categories = useMemo(() => categoriesFrom(projectData), [projectData])

  const handleFilterChange = useCallback(cat => {
    setFilter(cat)
    setShowAll(false)
  }, [])

  const filtered = useMemo(() => {
    return filter === 'All'
      ? projectData
      : projectData.filter(p => p.category === filter)
  }, [filter, projectData])

  const visibleProjects = showAll ? filtered : filtered.slice(0, 3)

  return (
    <section id='projects' className='py-20'>
      <Motion.h2
        className='text-4xl font-bold text-center mb-12 tracking-tight'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Creations
      </Motion.h2>

      <Motion.div
        className='flex justify-center flex-wrap gap-2 md:gap-4 mb-12'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map(cat => (
          <FilterButton
            key={cat}
            label={cat}
            active={filter === cat}
            onClick={handleFilterChange}
          />
        ))}
      </Motion.div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filtered.length > 3 && (
        <Motion.div
          className='text-center mt-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300'
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </Motion.div>
      )}
    </section>
  )
}
