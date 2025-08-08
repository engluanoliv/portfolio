'use client'
import type React from 'react'
import { useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import { cn } from '@/lib/utils'

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  title?: string
  href?: string
  className?: string
  containerClassName?: string
}) => {
  const [transform, setTransform] = useState(
    'translate(-50%,-50%) rotateX(0deg)',
  )

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100])

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`

  const onMouseEnter = () => {
    setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)')
  }
  const onMouseLeave = () => {
    setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)')
  }

  return (
    <div
      className={cn(
        'group/pin relative z-50 h-[464px] w-[322px] cursor-pointer',
        containerClassName,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // href={href || "/"}
    >
      <div
        style={{
          perspective: '1000px',
          transform: 'rotateX(70deg) translateZ(0deg)',
        }}
        className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 ml-[0.09375rem] h-[464px] w-[322px]'
      >
        <motion.div
          style={{
            transform: transform,
            background: glareBackground,
            boxShadow:
              'rgba(0, 0, 0, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px',
          }}
          className='absolute top-1/2 left-1/2 flex aspect-[3/4] h-[464px] w-[322px] items-start justify-start overflow-hidden rounded-2xl p-0 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700'
        >
          <div
            className={cn(
              ' relative z-50 aspect-[3/4] h-[464px] w-[322px] ',
              className,
            )}
          >
            {children}
          </div>
          <motion.div
            className='pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay'
            style={{
              background: glareBackground,
              opacity: 0.6,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  )
}

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string
  href?: string
}) => {
  return (
    <motion.div className='!w-[322px] pointer-events-none z-[60] flex aspect-[3/4] h-[464px] items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100'>
      <div className='inset-0 h-full w-full flex-none'>
        <div className='absolute inset-x-0 top-0 flex justify-center'>
          <a
            href={href}
            target={'_blank'}
            className='relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10 '
            rel='noreferrer'
          >
            <span className='relative z-20 inline-block py-0.5 font-bold text-white text-xs'>
              {title}
            </span>

            <span className='-bottom-0 absolute left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40' />
          </a>
        </div>

        <div
          style={{
            perspective: '1000px',
            transform: 'rotateX(70deg) translateZ(0)',
          }}
          className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem]'
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                // biome-ignore lint/style/useNumberNamespace: <explanation>
                repeat: Infinity,
                delay: 0,
              }}
              className='absolute top-1/2 left-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                // biome-ignore lint/style/useNumberNamespace: <explanation>
                repeat: Infinity,
                delay: 2,
              }}
              className='absolute top-1/2 left-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                // biome-ignore lint/style/useNumberNamespace: <explanation>
                repeat: Infinity,
                delay: 4,
              }}
              className='absolute top-1/2 left-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
            />
          </>
        </div>

        <>
          <motion.div className='absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40' />
          <motion.div className='absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40 ' />
          <motion.div className='absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]' />
          <motion.div className='absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300 ' />
        </>
      </div>
    </motion.div>
  )
}
