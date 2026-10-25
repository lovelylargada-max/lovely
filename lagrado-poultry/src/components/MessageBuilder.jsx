import { useState } from 'react'

export default function MessageBuilder({ order }) {
  const total = (Number(order.quantity) || 0) * (Number(order.price) || 0)
  const msg = `Hi Feather & Farm! I would like to reserve:
Quantity: ${order.quantity} chickens
Category: ${order.category}
Breed: ${order.breed}
Price per chicken: ₱${order.price}
Estimated total: ₱${total.toLocaleString()}
Preferred Date: ${order.date}
Pickup/Delivery: ${order.method}
Contact: ${order.contact}
Additional Notes: ${order.notes}

Please confirm availability and the final order details. Thank you!`

  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(msg).then(() => { setCopied(true); setTimeout(()=>setCopied(false),2000) })
  }

  const encoded = encodeURIComponent(msg)
  const smsLink = `sms:0991-436-6688?body=${encoded}`
  const emailLink = `mailto:gladys_alboro@sjp2cd.edu.ph?subject=${encodeURIComponent('Poultry Order')}&body=${encoded}`

  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-3">
      <h2 className="text-xl font-bold text-emerald">Order Message</h2>
      <pre className="whitespace-pre-wrap bg-sand p-3 rounded text-sm">{msg}</pre>
      <div className="flex flex-wrap gap-2">
        <a href={smsLink} className="bg-emerald text-white px-4 py-2 rounded">Send via SMS</a>
        <a href={emailLink} className="bg-amber text-white px-4 py-2 rounded">Send Email</a>
        <button onClick={copy} className="border border-emerald text-emerald px-4 py-2 rounded">{copied?'Copied!':'Copy Order Message'}</button>
      </div>
      <p className="text-xs text-gray-600">You must confirm and send the message in your messaging or email app.</p>
    </div>
  )
}
