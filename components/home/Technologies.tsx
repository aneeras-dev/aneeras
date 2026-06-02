'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const techStack = [
  { name: 'Next.js',       svg: '/tech/nextjs.svg' },
  { name: 'TypeScript',    svg: '/tech/typescript.svg' },
  { name: 'React',         svg: '/tech/reactjs.svg' },
  { name: 'Tailwind CSS',  svg: '/tech/tailwindcss.svg' },
  { name: 'GSAP',          svg: '/tech/gsap.svg' },
  { name: 'Framer Motion', svg: '/tech/framer.svg' },
  { name: 'Node.js',       svg: '/tech/nodejs.svg' },
  { name: 'MongoDB',       svg: '/tech/mongodb.svg' },
  { name: 'PostgreSQL',    svg: '/tech/postgresql.svg' },
  { name: 'Redis',         svg: '/tech/redis.svg' },
  { name: 'Docker',        svg: '/tech/docker.svg' },
  { name: 'Vercel',        svg: '/tech/vercel.svg' },
  { name: 'Python',        svg: '/tech/python.svg' },
]

const row1 = [...techStack, ...techStack]
const row2 = [...techStack.slice(4), ...techStack.slice(4)]

function TechBadge({ tech }: { tech: typeof techStack[0] }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3.5 glass rounded-2xl mx-2 glow-card cursor-default">
      <Image src={tech.svg} alt={tech.name} width={28} height={28} className="w-7 h-7 object-contain" />
      <span className="font-space font-semibold text-[#4259A7]/80 text-sm whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  )
}

export default function Technologies() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4259A7]/15 to-transparent" />
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-royal-purple/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom text-center mb-14">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Tech Arsenal</span>
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-[#4259A7] mb-5 tracking-tight">
            Built with{' '}
            <span className="text-gradient">Modern Stack</span>
          </h2>
          <p className="font-inter text-[#4259A7]/60 text-lg max-w-xl mx-auto leading-relaxed">
            We use cutting-edge technologies to deliver blazing-fast, scalable, and beautiful digital experiences.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee">
            {row1.map((tech, i) => (
              <TechBadge key={`r1-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
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
