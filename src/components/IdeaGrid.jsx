import IdeaCard from './IdeaCard'

function IdeaGrid({ ideas, onDelete }) {
  if (ideas.length === 0) {
    return (
      <div className="form-card" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>✨</p>
        <h3 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>No ideas yet</h3>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Capture your first one above!</p>
      </div>
    )
  }

  return (
    <div className="card-grid">
      {ideas.map((idea) => (
        <IdeaCard 
          key={idea.id}
           id={idea.id}
          title={idea.title}
          description={idea.description}
          date={idea.date}
          onDelete={() => onDelete(idea.id)}
        />
      ))}
    </div>
  )
}

export default IdeaGrid