import { Link } from 'react-router-dom'

function IdeaCard({ title, description, date, id, onDelete }) {
  return (
    <div className="card">
      <Link to={`/idea/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
      <div className="card-footer">
        <span className="date">{date}</span>
        <button className="delete-btn" onClick={(e) => { e.preventDefault(); onDelete(); }}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default IdeaCard