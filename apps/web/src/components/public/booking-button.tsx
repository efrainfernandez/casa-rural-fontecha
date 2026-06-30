import { cn } from '@casa-rural-fontecha/ui/lib/utils'

import { BOOKING_URL } from '@/content/public-content'

type BookingButtonProps = {
  className?: string
  children?: React.ReactNode
}

export default function BookingButton({ className, children }: BookingButtonProps) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'inline-block bg-primary px-6 py-2.5 font-label-md text-label-md uppercase tracking-widest text-on-primary transition-transform duration-150 hover:scale-95',
        className,
      )}
    >
      {children}
    </a>
  )
}
