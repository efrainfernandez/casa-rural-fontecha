import Link from 'next/link'

import { CONTACT_DETAILS } from '@/content/public-content'
import type { Dictionary } from '@/i18n'

type SiteFooterProps = {
  labels: Dictionary['footer']
}

export default function SiteFooter({ labels }: SiteFooterProps) {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-gutter py-12 md:flex-row md:py-16">
        <div className="mb-8 text-center md:mb-0 md:text-left">
          <div className="font-headline-md mb-2 text-headline-md tracking-tight text-secondary">Casa Rural Fontecha</div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            © {new Date().getFullYear()} Casa Rural Fontecha. {labels.tagline}
          </p>
          <a
            href={`mailto:${CONTACT_DETAILS.email}`}
            className="mt-2 block font-body-md text-body-md text-on-surface-variant hover:text-secondary"
          >
            {CONTACT_DETAILS.email}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-secondary">
            {labels.privacy}
          </Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-secondary">
            {labels.terms}
          </Link>
          <Link
            href={`mailto:${CONTACT_DETAILS.email}`}
            className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-secondary"
          >
            {labels.contact}
          </Link>
          <Link href="#" className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant transition-colors hover:text-secondary">
            <span className="material-symbols-outlined text-lg">photo_camera</span>
            {labels.instagram}
          </Link>
        </div>
      </div>
    </footer>
  )
}
