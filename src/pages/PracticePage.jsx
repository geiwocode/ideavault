import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function PracticePage({ ideas }) {
  const { id } = useParams()
  const idea = ideas.find((i) => i.id === Number(id))
  const [timeLeft, setTimeLeft] = useState(60)
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    }
    if (timeLeft === 0) {
      setIsRunning(false)
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isRunning, timeLeft])

  const startTimer = () => setIsRunning(true)
  const pauseTimer = () => setIsRunning(false)
  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(60)
  }

  const copyToClipboard = () => {
    const text = `${idea.title}\n\n${idea.description}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!idea) {
    return (
      <div className="app">
        <div className="main">
          <div className="form-card" style={{ textAlign: 'center' }}>
            <h2>Idea not found</h2>
            <Link to="/">← Back to ideas</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="main">
        <Link to={`/idea/${id}`} style={{ display: 'inline-block', marginBottom: '1rem', color: '#4ade80', fontWeight: 500 }}>
          ← Back to idea
        </Link>

        <div className="form-card" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>
            {idea.title}
          </h2>
          <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem', fontSize: '1.125rem' }}>
            {idea.description}
          </p>

          {/* Timer */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: 700,
              color: timeLeft <= 10 ? '#ef4444' : '#111827',
              fontVariantNumeric: 'tabular-nums',
              transition: 'color 0.3s'
            }}>
              {timeLeft}s
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem' }}>
              {!isRunning ? (
                <button onClick={startTimer} style={{
                  padding: '0.75rem 2rem', background: '#4ade80', color: '#111827',
                  border: 'none', borderRadius: '0.75rem', fontWeight: 700, cursor: 'pointer', fontSize: '1rem'
                }}>
                  Start
                </button>
              ) : (
                <button onClick={pauseTimer} style={{
                  padding: '0.75rem 2rem', background: '#fbbf24', color: '#111827',
                  border: 'none', borderRadius: '0.75rem', fontWeight: 700, cursor: 'pointer', fontSize: '1rem'
                }}>
                  Pause
                </button>
              )}
              <button onClick={resetTimer} style={{
                padding: '0.75rem 2rem', background: '#e5e7eb', color: '#111827',
                border: 'none', borderRadius: '0.75rem', fontWeight: 700, cursor: 'pointer', fontSize: '1rem'
              }}>
                Reset
              </button>
            </div>
          </div>

          {/* Copy Button */}
          <button onClick={copyToClipboard} style={{
            padding: '0.75rem 2rem', background: copied ? '#4ade80' : '#111827',
            color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 700,
            cursor: 'pointer', fontSize: '1rem', transition: 'background 0.2s'
          }}>
            {copied ? '✓ Copied!' : '📋 Copy Pitch'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PracticePage