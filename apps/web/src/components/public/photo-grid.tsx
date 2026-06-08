type PhotoItem = {
  title: string
  description: string
}

export default function PhotoGrid({
  items,
  accent,
}: {
  items: readonly PhotoItem[]
  accent: 'emerald' | 'amber'
}) {
  const panelClassName =
    accent === 'emerald'
      ? 'bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(6,78,59,0.78))]'
      : 'bg-[linear-gradient(135deg,rgba(251,191,36,0.18),rgba(120,53,15,0.78))]'

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => {
        return (
          <div key={item.title} className={`min-h-56 border border-white/10 p-5 text-white ${panelClassName}`}>
            <div className="flex h-full flex-col justify-end gap-3 bg-[linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.24)_100%)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Galería</p>
              <h3 className="text-2xl font-semibold text-balance">{item.title}</h3>
              <p className="text-sm leading-7 text-white/80">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
