import { PinContainer } from '@/ui/shadcn/components/ui/3d-pin'
import type { JSX } from 'react'

export default function CardLocation(): JSX.Element {
  return (
    <>
      <div className='flex aspect-[3/4] w-[322px] items-stretch justify-center rounded-[16px] border-0'>
        <PinContainer title='Juazeiro do Norte - CE'>
          <div
            className='flex h-[464px] w-[322px] basis-full flex-col text-slate-100/50 tracking-tight sm:basis-1/2'
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 6px 0px',
              opacity: 1,
            }}
          >
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            <div className='!h-[464px] flex aspect-[3/4] w-[322px] flex-1 justify-end rounded-lg'>
              <img src='/ceara.svg' className='w-full self-end' alt='Ceará' />
            </div>
          </div>
        </PinContainer>
      </div>
    </>
  )
}
