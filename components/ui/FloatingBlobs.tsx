'use client'

export default function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-royal-purple/8 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-deep-indigo/10 rounded-full blur-[100px] animate-blob-delayed" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-soft-lavender/6 rounded-full blur-[80px] animate-blob-slow" />
    </div>
  )
}
