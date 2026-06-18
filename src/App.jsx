import IdeaGrid from './components/IdeaGrid'

const SAMPLE_IDEAS = [
  {
    id: 1,
    title: "Hackathon App Idea",
    description: "Build a pitch preparation tool for Imagine Hack participants",
    date: "June 19, 2026"
  },
  {
    id: 2,
    title: "Learn React Properly",
    description: "Understand components, props, state, and hooks deeply",
    date: "June 19, 2026"
  },
  {
    id: 3,
    title: "Graduate with Honors",
    description: "Finish the degree strong and land a great role",
    date: "June 19, 2026"
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-900">IdeaVault</h1>
        <p className="text-gray-500 mt-2">Capture your ideas</p>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <IdeaGrid ideas={SAMPLE_IDEAS} />
      </main>
    </div>
  )
}

export default App