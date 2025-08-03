import DynamicIcon from '@/ui/shadcn/components/dynamic-icon'
import { Dock, DockIcon } from '@/ui/shadcn/components/magicui/dock'
import Link from 'next/link'
import { DOCK_DATA } from './data'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/ui/shadcn/components/ui/button'
import { SmoothCursor } from '@/ui/shadcn/components/ui/smooth-cursor'

export default function Home() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <SmoothCursor />
        <Dock direction='middle'>
          {Object.entries(DOCK_DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Link
                href={social.url}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'size-12 rounded-full',
                )}
              >
                <social.icon className='size-6' />
              </Link>
            </DockIcon>
          ))}
        </Dock>
      </main>
    </div>
  )
}
