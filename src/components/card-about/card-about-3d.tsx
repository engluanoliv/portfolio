import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/ui/shadcn/components/ui/3d-card'
import type { JSX } from 'react'

export default function CardAbout(): JSX.Element {
  return (
    <>
      <CardContainer className='inter-var'>
        <CardBody className='group/card relative h-[420px] w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-sm dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] '>
          <CardItem
            translateZ='50'
            className='font-bold text-neutral-600 text-xl dark:text-white'
          >
            Software Engineer
          </CardItem>
          <CardItem
            as='p'
            translateZ='60'
            className='mt-2 max-w-sm text-neutral-500 text-sm dark:text-neutral-300'
          >
            React.js | Next.js | Vue.js | Node.js | MySQL | Typescript | Prisma
          </CardItem>
          <CardItem translateZ='100' className='mt-4 w-full'>
            <img
              src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              height='1000'
              width='1000'
              className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
              alt='thumbnail'
            />
          </CardItem>
          <div className='mt-14 flex items-center justify-between' />
        </CardBody>
      </CardContainer>
    </>
  )
}
