'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  // Raw mouse position — drives the inner dot (no lag)
  const dotX = useMotionValue(-200)
  const dotY = useMotionValue(-200)

  // Ring follows with spring lag for the trailing effect
  const ringX = useSpring(dotX, { stiffness: 130, damping: 22, mass: 0.4 })
  const ringY = useSpring(dotY, { stiffness: 130, damping: 22, mass: 0.4 })

  // Ambient glow trails even further behind
  const glowX = useSpring(dotX, { stiffness: 60, damping: 18, mass: 0.6 })
  const glowY = useSpring(dotY, { stiffness: 60, damping: 18, mass: 0.6 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      if (!visible) setVisible(true)

      // Detect interactive elements under cursor
      const target = e.target as Element
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
      )
      setHovering(!!interactive)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [dotX, dotY, visible])

  return (
    <div className="hidden lg:block">
      {/* ── Ambient glow blob ── */}
      <motion.div
        className="fixed pointer-events-none z-[9996]"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="w-[380px] h-[380px] rounded-full bg-royal-purple/8 blur-[80px]"
        />
      </motion.div>

      {/* ── Outer ring (spring lag) ── */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: hovering ? 44 : 30,
            height: hovering ? 44 : 30,
            opacity: visible ? 1 : 0,
            backgroundColor: hovering
              ? 'rgba(139, 140, 201, 0.08)'
              : 'rgba(139, 140, 201, 0)',
            borderColor: hovering
              ? 'rgba(139, 140, 201, 0.9)'
              : 'rgba(139, 140, 201, 0.45)',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{ borderWidth: 1.5, borderStyle: 'solid' }}
          className="rounded-full"
        />
      </motion.div>

      {/* ── Inner dot (exact position, no lag) ── */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: hovering ? 0 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="w-[5px] h-[5px] rounded-full bg-white"
        />
      </motion.div>
    </div>
  )
}
