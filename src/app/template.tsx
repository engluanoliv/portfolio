'use client'

import type { JSX, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Template({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const pathname = usePathname()
  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={pathname}
        initial={{ rotateY: 180, opacity: 0.6, scale: 0.98 }}
        animate={{ rotateY: 0, opacity: 1, scale: 1 }}
        exit={{ rotateY: -180, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.9, ease: [0.45, 0, 0.55, 1] }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1200,
          backfaceVisibility: 'hidden',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
