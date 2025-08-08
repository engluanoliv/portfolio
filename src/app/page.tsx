import { ContainerTextFlip } from '@/components/container-text-flip/container-text-flip'

export default function Home() {
  return (
    <div className='w-full'>
      <p className='w-full font-medium text-xl md:text-4xl'>Hello, I am a</p>
      <ContainerTextFlip
        words={['Software Engineer', 'UI/UX Design', 'Frontend Developer']}
      />
      {/* <CardAbout /> */}
    </div>
  )
}
