import IdeaCard from './IdeaCard'

function IdeaGrid({ ideas }) {
  return (
    <div className="card-grid">
      {ideas.map((idea) => (
        <IdeaCard key={idea.id} title={idea.title} description={idea.description} date={idea.date} />
      ))}
    </div>
  )
}

export default IdeaGrid