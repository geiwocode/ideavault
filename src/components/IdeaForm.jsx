import { useState } from 'react'

function IdeaForm({ onAddIdea }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const isValid = title.trim() !== '' && description.trim() !== ''

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid) return
    const newIdea = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
    onAddIdea(newIdea)
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Add New Idea</h2>
      
      <div className="form-group">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What's your idea?" />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your idea..." rows={4} />
      </div>

      <button type="submit" disabled={!isValid} className="btn-submit">
        <div className="green-dot">
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <span className="btn-text">Save Idea</span>
      </button>
    </form>
  )
}

export default IdeaForm