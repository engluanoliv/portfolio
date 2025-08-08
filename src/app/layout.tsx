import type { Metadata } from 'next'
import './globals.css'
// import { SmoothCursor } from '@/ui/shadcn/components/ui/smooth-cursor'
import DockerMenu from '@/components/docker-menu/docker-menu'
// import Template from './template'

export const metadata: Metadata = {
  icons: [{ url: './avatar.svg' }],
  title: 'Chico Luan',
  description: 'My Personal Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {/* <SmoothCursor /> */}

        <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
          <main className='row-start-2 flex flex-col items-center justify-center gap-[32px] sm:items-start'>
            {/* <Template>{children}</Template> */}
            {children}
            <DockerMenu />
          </main>
        </div>
      </body>
    </html>
  )
}
