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
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }

    onAddIdea(newIdea)
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Idea</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's your idea?"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition text-sm"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your idea..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition resize-none text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`relative w-full h-14 rounded-2xl text-xl font-semibold text-center transition-all ${
          isValid
            ? 'bg-white text-black cursor-pointer group border border-gray-200'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        <div className={`absolute left-1 top-[4px] h-12 w-12 rounded-xl flex items-center justify-center z-10 duration-500 ${
          isValid
            ? 'bg-green-400 group-hover:w-[calc(100%-8px)]'
            : 'bg-gray-300'
        }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="25px"
            width="25px"
            fill="none"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <p className="translate-x-2">Save Idea</p>
      </button>
    </form>
  )
}

export default IdeaForm
