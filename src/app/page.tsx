import { ContainerTextFlip } from '@/components/container-text-flip/container-text-flip'

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <p className='font-medium text-xl md:text-4xl'>Hello, I am a</p>
      <div className='flex w-full justify-center'>
        <ContainerTextFlip
          words={['Software Engineer', 'UI/UX Design', 'Frontend Developer']}
        />
      </div>
    </div>
  )
}
