export default function OrderSummary({ order }) {
  const total = (Number(order.quantity) || 0) * (Number(order.price) || 0)
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-bold text-emerald mb-3">Order Summary</h2>
      <ul className="space-y-1 text-sm">
        <li><strong>Category:</strong> {order.category}</li>
        <li><strong>Quantity:</strong> {order.quantity}</li>
        <li><strong>Breed:</strong> {order.breed}</li>
        <li><strong>Price per chicken:</strong> ₱{order.price}</li>
        <li><strong>Method:</strong> {order.method}</li>
        <li><strong>Date:</strong> {order.date}</li>
        <li><strong>Contact:</strong> {order.contact || '-'}</li>
        <li><strong>Notes:</strong> {order.notes || '-'}</li>
      </ul>
      <div className="mt-3 text-lg font-bold text-amber">Estimated Total: ₱{total.toLocaleString()}</div>
    </div>
  )
}
