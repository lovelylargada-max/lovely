export default function Header() {
  return (
    <header className="bg-emerald text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐔</span>
          <span className="font-bold text-xl">LAGRADO Poultry</span>
        </div>
        <span className="text-sm opacity-90 hidden sm:block">Feather & Farm Poultry</span>
      </div>
    </header>
  )
}
