'use client'
import { useEffect, useRef } from 'react'

type Dot = {
  x: number; y: number
  ox: number; oy: number
  vx: number; vy: number
  r: number
  isHub: boolean
  freq: number   // oscillation speed
  phase: number  // phase offset so particles don't sync
  ampX: number   // horizontal drift amplitude
  ampY: number   // vertical drift amplitude
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio, 2)
    let W = 0, H = 0
    let raf = 0
    let t = 0
    const mouse = { x: -999, y: -999, lx: -999, ly: -999 }
    let dots: Dot[] = []

    const init = () => {
      const parent = canvas.parentElement
      if (!parent) return
      W = parent.clientWidth
      H = parent.clientHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      dots = []
      const TOTAL = 110
      const HUBS = 14
      for (let i = 0; i < TOTAL; i++) {
        const isHub = i < HUBS
        const x = Math.random() * W
        const y = Math.random() * H
        dots.push({
          x, y, ox: x, oy: y, vx: 0, vy: 0,
          r: isHub ? Math.random() * 2.2 + 1.6 : Math.random() * 1.0 + 0.3,
          isHub,
          freq: 0.28 + Math.random() * 0.42,
          phase: Math.random() * Math.PI * 2,
          ampX: isHub ? 25 + Math.random() * 30 : 12 + Math.random() * 22,
          ampY: isHub ? 20 + Math.random() * 28 : 10 + Math.random() * 18,
        })
      }
    }

    init()

    // Window-level tracking so the repulsion works even when content layers sit on top
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      if (mx >= 0 && mx <= W && my >= 0 && my <= H) {
        mouse.x = mx
        mouse.y = my
      } else {
        mouse.x = -999
        mouse.y = -999
      }
    }
    const onLeave = () => { mouse.x = -999; mouse.y = -999 }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    const REPEL = 130
    const CONNECT = 150

    const draw = () => {
      t += 0.005
      ctx.clearRect(0, 0, W, H)

      // Smooth mouse lerp
      if (mouse.x > -100) {
        mouse.lx += (mouse.x - mouse.lx) * 0.08
        mouse.ly += (mouse.y - mouse.ly) * 0.08
      }

      // Cursor glow
      if (mouse.x > -100) {
        const mg = ctx.createRadialGradient(mouse.lx, mouse.ly, 0, mouse.lx, mouse.ly, 180)
        mg.addColorStop(0, 'rgba(139,140,201,0.16)')
        mg.addColorStop(0.5, 'rgba(75,74,168,0.05)')
        mg.addColorStop(1, 'rgba(75,74,168,0)')
        ctx.fillStyle = mg
        ctx.fillRect(0, 0, W, H)
      }

      // Update & draw particles
      for (const d of dots) {
        // Sinusoidal drift target — each particle floats on its own rhythm
        const tx = d.ox + Math.sin(t * d.freq + d.phase) * d.ampX
        const ty = d.oy + Math.cos(t * d.freq * 0.73 + d.phase + 1.2) * d.ampY

        // Spring toward drifting target
        d.vx += (tx - d.x) * 0.018
        d.vy += (ty - d.y) * 0.018

        // Mouse repulsion
        if (mouse.x > -100) {
          const dx = d.x - mouse.lx
          const dy = d.y - mouse.ly
          const dist = Math.hypot(dx, dy) || 1
          if (dist < REPEL) {
            const f = (REPEL - dist) / REPEL
            d.vx += (dx / dist) * f * 4
            d.vy += (dy / dist) * f * 4
          }
        }

        d.vx *= 0.87
        d.vy *= 0.87
        d.x += d.vx
        d.y += d.vy

        const nearMouse = mouse.x > -100 && Math.hypot(d.x - mouse.lx, d.y - mouse.ly) < REPEL * 1.4

        // Hub glow aura
        if (d.isHub) {
          const aura = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 6)
          aura.addColorStop(0, nearMouse ? 'rgba(139,140,201,0.22)' : 'rgba(75,74,168,0.13)')
          aura.addColorStop(1, 'rgba(75,74,168,0)')
          ctx.fillStyle = aura
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r * 6, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = nearMouse
          ? d.isHub ? 'rgba(210,210,240,0.9)' : 'rgba(139,140,201,0.85)'
          : d.isHub ? 'rgba(139,140,201,0.65)' : 'rgba(75,74,168,0.45)'
        ctx.fill()
      }

      // Connection lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y)
          if (dist < CONNECT) {
            const alpha = (1 - dist / CONNECT) * (dots[i].isHub || dots[j].isHub ? 0.4 : 0.15)
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(139,140,201,${alpha})`
            ctx.lineWidth = dots[i].isHub && dots[j].isHub ? 0.7 : 0.35
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => init()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 block" />
}
