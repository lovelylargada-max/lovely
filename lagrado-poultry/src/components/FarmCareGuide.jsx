const GUIDES = {
  '4-Month-Old Chickens': {
    feed: 'Starter/grower feed appropriate for young chickens.',
    water: 'Provide clean, fresh water at all times.',
    housing: 'Clean, well-ventilated coop with enough space.',
    care: 'Daily checks, clean bedding, safe from predators.',
    health: 'Monitor activity, appetite, and droppings.',
    vet: 'Keep vaccination records; consult a vet for schedules.',
  },
  '5-Month-Old Chickens': {
    feed: 'Grower/layer transition feed as appropriate.',
    water: 'Constant access to clean water.',
    housing: 'Adequate ventilation and nesting areas.',
    care: 'Regular cleaning and observation.',
    health: 'Watch for signs of illness or stress.',
    vet: 'Maintain records; seek veterinary advice when needed.',
  },
  '6-Month-Old & Older': {
    feed: 'Layer/maintenance feed suited to purpose.',
    water: 'Fresh water available daily.',
    housing: 'Spacious, ventilated housing with roosts.',
    care: 'Daily monitoring and coop hygiene.',
    health: 'Check egg production and general condition.',
    vet: 'Keep vaccination history; consult vet for boosters.',
  },
}

export default function FarmCareGuide({ category }) {
  const g = GUIDES[category]
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-bold text-emerald mb-3">Farm Care Guide — {category}</h2>
      <ul className="space-y-2 text-sm">
        <li><strong>Feed:</strong> {g.feed}</li>
        <li><strong>Water:</strong> {g.water}</li>
        <li><strong>Housing:</strong> {g.housing}</li>
        <li><strong>Daily care:</strong> {g.care}</li>
        <li><strong>Health:</strong> {g.health}</li>
        <li><strong>Vaccination/Vet:</strong> {g.vet}</li>
      </ul>
      <p className="text-xs text-gray-600 mt-3">Recommendations depend on breed, purpose, health, and vaccination history.</p>
    </div>
  )
}
