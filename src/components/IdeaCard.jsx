function IdeaCard({ title, description, date }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <span className="date">{date}</span>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  )
}

export default IdeaCard