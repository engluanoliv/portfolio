import type { JSX, ElementType } from 'react'

import Icon from './icon'

export type DynamicIconProps = {
  icon: keyof typeof Icon
  className: string
}

export default function DynamicIcon({
  icon,
  className,
}: DynamicIconProps): JSX.Element {
  const Ikon = Icon[icon] as ElementType

  return <Ikon className={className} />
}
