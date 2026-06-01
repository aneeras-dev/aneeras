'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Linkedin, } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'
import { staggerContainer, staggerItem } from '@/lib/animations'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@aneeras.com',
    href: 'mailto:hello@aneeras.com',
    description: 'Drop us a line anytime',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8428166373',
    href: 'tel:+918428166373',
    description: 'Mon–Fri, 9am–6pm IST',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Puducherry, India',
    href: '#',
    description: 'France of India',
  },
]

const socials = [
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/aneerasofficial",
    color: "hover:text-blue-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aneeras/",
    color: "hover:text-blue-500",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {contactDetails.map((detail) => (
          <motion.div key={detail.label} variants={staggerItem}>
            <GlowCard className="p-5">
              <a
                href={detail.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-royal-purple/15 flex items-center justify-center flex-shrink-0 group-hover:bg-royal-purple/25 transition-colors duration-200">
                  <detail.icon size={20} className="text-soft-lavender" />
                </div>
                <div>
                  <div className="font-inter text-white/40 text-xs mb-0.5">{detail.label}</div>
                  <div className="font-space font-semibold text-white text-base group-hover:text-soft-lavender transition-colors duration-200">
                    {detail.value}
                  </div>
                  <div className="font-inter text-white/35 text-xs mt-0.5">{detail.description}</div>
                </div>
              </a>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass rounded-2xl p-6"
      >
        <p className="font-space font-semibold text-white/70 text-sm mb-4 uppercase tracking-wider text-xs">Follow Us</p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 ${social.color} hover:border-white/20 hover:bg-white/10 hover:shadow-glow-soft transition-all duration-200`}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Quick response note */}
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-royal-purple/15 to-deep-indigo/10 border border-royal-purple/20 rounded-2xl p-6"
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl flex-shrink-0">⚡</div>
          <div>
            <p className="font-space font-semibold text-white text-sm mb-1">Fast Response Guaranteed</p>
            <p className="font-inter text-white/45 text-xs leading-relaxed">
              We respond to all inquiries within 24 hours on business days. For urgent matters, reach us on Twitter.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
