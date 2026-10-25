export default function Hero({ onStart }) {
  return (
    <section className="bg-sand">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold text-emerald">Fresh Poultry, Quick Orders</h1>
          <p className="mt-4 text-gray-700">Order quality chickens from Feather & Farm Poultry. Fast, simple, and reliable.</p>
          <button onClick={onStart} className="mt-6 bg-amber text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Start Your Order
          </button>
        </div>
        <div className="flex-1 text-center text-8xl">🐓</div>
      </div>
    </section>
  )
}
