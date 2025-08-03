import type { HTMLAttributes } from 'react'

type IconProps = HTMLAttributes<SVGElement>

export const LinkedIn = (props: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    {...props}
  >
    <title>LinkedIn</title>
    <path d='M3.476 2.001h17.042A1.46 1.46 0 0 1 22 3.442v17.115A1.464 1.464 0 0 1 20.518 22H3.476A1.46 1.46 0 0 1 2 20.557V3.443a1.46 1.46 0 0 1 1.476-1.442m12.602 17.04h2.962l.003-5.235c0-2.57-.554-4.546-3.557-4.546a3.12 3.12 0 0 0-2.807 1.542h-.04V9.497H9.794v9.544h2.962v-4.722c0-1.244.237-2.45 1.78-2.45 1.522 0 1.542 1.425 1.542 2.532zM5.234 7.689a1.72 1.72 0 1 0 2.432-2.432 1.72 1.72 0 0 0-2.432 2.432m-.269 11.352H7.93V9.497H4.965z' />
  </svg>
)

// Export all lucide icons
export * from 'lucide-react'

// Build Icon object
import * as LucideIcons from 'lucide-react'

export const Icon = {
  ...LucideIcons,
  LinkedIn,
}

export default Icon
