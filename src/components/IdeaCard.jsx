function IdeaCard({ title, description, date }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <span className="text-xs text-gray-400">{date}</span>
    </div>
  )
}

export default IdeaCard