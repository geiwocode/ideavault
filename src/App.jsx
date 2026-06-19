import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IdeaGrid from './components/IdeaGrid'
import IdeaForm from './components/IdeaForm'
import IdeaDetailPage from './pages/IdeaDetailPage'
import useLocalStorage from './hooks/useLocalStorage'
import PracticePage from './pages/PracticePage'

const SAMPLE_IDEAS = [
  { id: 1, title: "Hackathon App Idea", description: "Build a pitch preparation tool for Imagine Hack participants", date: "June 19, 2026" },
  { id: 2, title: "Learn React Properly", description: "Understand components, props, state, and hooks deeply", date: "June 19, 2026" },
  { id: 3, title: "Graduate with Honors", description: "Finish the degree strong and land a great role", date: "June 19, 2026" }
]

function App() {
  const [ideas, setIdeas] = useLocalStorage('ideas', SAMPLE_IDEAS)

  const addIdea = (newIdea) => {
    setIdeas([newIdea, ...ideas])
  }

  const deleteIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <header className="header">
              <h1>IdeaVault</h1>
              <p>Capture your ideas</p>
            </header>
            <main className="main">
              <IdeaForm onAddIdea={addIdea} />
              <IdeaGrid ideas={ideas} onDelete={deleteIdea} />
            </main>
          </div>
        } />
        <Route path="/idea/:id" element={
          <IdeaDetailPage ideas={ideas} onDelete={deleteIdea} />
        } />
        <Route path="/practice/:id" element={
          <PracticePage ideas={ideas} />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App