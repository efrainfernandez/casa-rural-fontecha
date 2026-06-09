import { FadeIn } from './reveal'

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <FadeIn className="max-w-2xl space-y-4 text-white">
      <p className="inline-flex w-fit rounded-full border border-white/14 bg-black/16 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/88 backdrop-blur-md">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">{title}</h2>
      <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">{description}</p>
    </FadeIn>
  )
}
