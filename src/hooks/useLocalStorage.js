import { useState, useEffect } from 'react'

function useLocalStorage(key, initialValue) {
  // Step 1: Get stored value from localStorage (if it exists)
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  // Step 2: Every time value changes, save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Silently fail if storage is full
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage