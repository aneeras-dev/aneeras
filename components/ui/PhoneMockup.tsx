'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const screens = [
  { src: '/screens/screen-explore.png', alt: 'Explore trip packages on Tripknot' },
  { src: '/screens/screen-ooty.png', alt: 'Ooty Misty Hills trip on Tripknot' },
  { src: '/screens/screen-itinerary.png', alt: 'Build your itinerary on Tripknot' },
  { src: '/screens/screen-auroville.png', alt: 'Discover Auroville on Tripknot' },
]

export default function PhoneMockup() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % screens.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  return (
    <div className="relative w-[270px] h-[560px] select-none">
      {/* Outer phone frame */}
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 border-[3px] border-gray-600 shadow-[0_40px_80px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)]">

        {/* Inner screen */}
        <div className="absolute top-[6px] left-[6px] right-[6px] bottom-[6px] rounded-[43px] overflow-hidden bg-[#f5f5f0]">

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[88px] h-[26px] bg-black rounded-full z-30 shadow-md" />

          {/* Rotating screenshot */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={screens[current].src}
                alt={screens[current].alt}
                fill
                className="object-cover object-top"
                sizes="270px"
                priority={current === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
            {screens.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`View screen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-5 bg-deep-indigo'
                    : 'w-1.5 bg-gray-400/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Physical side buttons */}
        <div className="absolute right-[-4px] top-[130px] w-[3px] h-14 bg-gray-600 rounded-l-sm" />
        <div className="absolute left-[-4px] top-[100px] w-[3px] h-9 bg-gray-600 rounded-r-sm" />
        <div className="absolute left-[-4px] top-[118px] w-[3px] h-9 bg-gray-600 rounded-r-sm" />
      </div>

      {/* Ambient glow beneath the phone */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-royal-purple/30 rounded-full blur-xl pointer-events-none" />
    </div>
  )
}
