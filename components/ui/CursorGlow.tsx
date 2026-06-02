'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const x = useSpring(mouseX, { stiffness: 400, damping: 30, mass: 0.3 })
  const y = useSpring(mouseY, { stiffness: 400, damping: 30, mass: 0.3 })

  useEffect(() => {
    if (typeof window === 'undefined' || 'ontouchstart' in window) return

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY])

  return (
    <div className="hidden lg:block">
      {/* Arrow cursor — tip anchored at exact mouse position */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{ x, y, translateX: 0, translateY: 0 }}
      >
        <motion.svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            opacity: visible ? 1 : 0,
            scale: clicking ? 0.85 : 1,
          }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          style={{ transformOrigin: '0 0' }}
        >
          {/* Arrow body fill */}
          <path
            d="M1 1L1 19L5.5 14L9 22.5L12.5 21L9 12.5H17L1 1Z"
            fill="#4259A7"
          />
          {/* Arrow outline for crispness */}
          <path
            d="M1 1L1 19L5.5 14L9 22.5L12.5 21L9 12.5H17L1 1Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}
