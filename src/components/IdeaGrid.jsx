import IdeaCard from './IdeaCard'

function IdeaGrid({ ideas }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ideas.map((idea) => (
        <IdeaCard 
          key={idea.id}
          title={idea.title}
          description={idea.description}
          date={idea.date}
        />
      ))}
    </div>
  )
}

export default IdeaGrid