import { useParams, Link } from 'react-router-dom'

function IdeaDetailPage({ ideas }) {
  const { id } = useParams()
  const idea = ideas.find((i) => i.id === Number(id))

  if (!idea) {
    return (
      <div className="app">
        <div className="main">
          <div className="form-card" style={{ textAlign: 'center' }}>
            <h2>Idea not found</h2>
            <Link to="/" style={{ color: '#4ade80' }}>← Back to ideas</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="main">
        <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#4ade80', fontWeight: 500 }}>
          ← Back to ideas
        </Link>
        
        <div className="form-card">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' }}>
            {idea.title}
          </h2>
          <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '1rem' }}>
            {idea.description}
          </p>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#9ca3af' }}>
            {idea.date}
          </span>
        </div>
      </div>
    </div>
  )
}

export default IdeaDetailPage