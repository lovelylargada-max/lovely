import { useState } from 'react'

const CATEGORIES = [
  { label: '4-Month-Old Chickens', min: 150, max: 250 },
  { label: '5-Month-Old Chickens', min: 250, max: 350 },
  { label: '6-Month-Old & Older', min: 350, max: 450 },
]
const BREEDS = ['Rhode Island Red', 'Australorp', 'Plymouth Rock', 'Native Chicken', 'No Preference']

export default function OrderForm({ order, setOrder }) {
  const cat = CATEGORIES.find((c) => c.label === order.category) || CATEGORIES[0]
  const [errors, setErrors] = useState({})

  const validate = (field, value) => {
    let msg = ''
    if (field === 'quantity') {
      if (!value || Number(value) < 1) msg = 'Quantity must be at least 1'
    }
    if (field === 'price') {
      if (Number(value) < cat.min || Number(value) > cat.max) msg = `Price must be ${cat.min}-${cat.max}`
    }
    if (field === 'contact') {
      if (!value) msg = 'Contact required'
    }
    if (field === 'date') {
      if (!value) msg = 'Date required'
    }
    setErrors((e) => ({ ...e, [field]: msg }))
  }

  const update = (field, value) => {
    setOrder((o) => ({ ...o, [field]: value }))
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Chicken Age Group</label>
        <select value={order.category} onChange={(e) => { update('category', e.target.value); const c = CATEGORIES.find(x=>x.label===e.target.value); update('price', c.min) }} className="w-full border rounded p-2">
          {CATEGORIES.map((c) => <option key={c.label}>{c.label}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Quantity</label>
        <input type="number" min="1" value={order.quantity} onChange={(e)=>{update('quantity', e.target.value); validate('quantity', e.target.value)}} className="w-full border rounded p-2" />
        {errors.quantity && <p className="text-red-600 text-xs">{errors.quantity}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Breed</label>
        <select value={order.breed} onChange={(e)=>update('breed', e.target.value)} className="w-full border rounded p-2">
          {BREEDS.map((b)=><option key={b}>{b}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Price per Chicken (₱{cat.min}-₱{cat.max})</label>
        <input type="number" min={cat.min} max={cat.max} value={order.price} onChange={(e)=>{update('price', e.target.value); validate('price', e.target.value)}} className="w-full border rounded p-2" />
        {errors.price && <p className="text-red-600 text-xs">{errors.price}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Preferred Date</label>
        <input type="date" min={today} value={order.date} onChange={(e)=>{update('date', e.target.value); validate('date', e.target.value)}} className="w-full border rounded p-2" />
        {errors.date && <p className="text-red-600 text-xs">{errors.date}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Pickup or Delivery</label>
        <select value={order.method} onChange={(e)=>update('method', e.target.value)} className="w-full border rounded p-2">
          <option>Pickup</option>
          <option>Delivery</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Contact (Phone or Email)</label>
        <input type="text" value={order.contact} onChange={(e)=>{update('contact', e.target.value); validate('contact', e.target.value)}} className="w-full border rounded p-2" />
        {errors.contact && <p className="text-red-600 text-xs">{errors.contact}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Additional Notes</label>
        <textarea value={order.notes} onChange={(e)=>update('notes', e.target.value)} className="w-full border rounded p-2" rows="3" />
      </div>
    </form>
  )
}
