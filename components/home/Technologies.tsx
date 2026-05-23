'use client'
import { motion } from 'framer-motion'

const techStack = [
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
  { name: 'React', icon: '⚛', color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: '🌊', color: '#38BDF8' },
  { name: 'GSAP', icon: '✦', color: '#88CE02' },
  { name: 'Framer Motion', icon: '◉', color: '#BB4B96' },
  { name: 'Node.js', icon: '◈', color: '#68A063' },
  { name: 'MongoDB', icon: '◎', color: '#47A248' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
  { name: 'Redis', icon: '⬡', color: '#DC382D' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'Vercel', icon: '▲', color: '#ffffff' },
]

const row1 = [...techStack, ...techStack]
const row2 = [...techStack.slice(4), ...techStack.slice(4)]

function TechBadge({ tech }: { tech: typeof techStack[0] }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3.5 glass rounded-2xl mx-2 glow-card cursor-default">
      <span
        className="text-xl font-bold w-7 h-7 flex items-center justify-center"
        style={{ color: tech.color }}
      >
        {tech.icon}
      </span>
      <span className="font-space font-semibold text-white/80 text-sm whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  )
}

export default function Technologies() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-royal-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Tech Arsenal</span>
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 tracking-tight">
            Built with{' '}
            <span className="text-gradient">Modern Stack</span>
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            We use cutting-edge technologies to deliver blazing-fast, scalable, and beautiful digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        {/* Row 1: left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee">
            {row1.map((tech, i) => (
              <TechBadge key={`r1-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2: right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee-reverse">
            {row2.map((tech, i) => (
              <TechBadge key={`r2-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
