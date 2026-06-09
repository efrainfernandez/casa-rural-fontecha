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
    <FadeIn className="max-w-2xl space-y-4">
      <p className="inline-flex w-fit rounded-full border border-emerald-700/12 bg-emerald-700/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:border-emerald-300/15 dark:bg-emerald-300/10 dark:text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>
    </FadeIn>
  )
}
