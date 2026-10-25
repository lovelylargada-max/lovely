import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import OrderForm from './components/OrderForm.jsx'
import OrderSummary from './components/OrderSummary.jsx'
import MessageBuilder from './components/MessageBuilder.jsx'
import FarmCareGuide from './components/FarmCareGuide.jsx'
import Footer from './components/Footer.jsx'

const CATEGORIES = ['4-Month-Old Chickens', '5-Month-Old Chickens', '6-Month-Old & Older']

export default function App() {
  const [tab, setTab] = useState('order')
  const [order, setOrder] = useState({
    category: CATEGORIES[0],
    quantity: 1,
    breed: 'No Preference',
    price: 150,
    date: '',
    method: 'Pickup',
    contact: '',
    notes: '',
  })

  const start = () => setTab('order')

  return (
    <div className="min-h-screen bg-sand">
      <Header />
      <Hero onStart={start} />
      <nav className="max-w-6xl mx-auto px-4 py-4 flex gap-2 flex-wrap">
        {[
          ['order', 'Place an Order'],
          ['message', 'Order Message'],
          ['care', 'Farm Care Guide'],
        ].map(([key, label]) => (
          <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded ${tab === key ? 'bg-emerald text-white' : 'bg-white text-emerald border'}`}>
            {label}
          </button>
        ))}
      </nav>
      <main className="max-w-6xl mx-auto px-4 pb-8 grid md:grid-cols-2 gap-6">
        {tab === 'order' && (
          <>
            <OrderForm order={order} setOrder={setOrder} />
            <OrderSummary order={order} />
          </>
        )}
        {tab === 'message' && <MessageBuilder order={order} />}
        {tab === 'care' && <FarmCareGuide category={order.category} />}
      </main>
      <Footer />
    </div>
  )
}
