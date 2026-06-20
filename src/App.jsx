import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Communities from './pages/Communities'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import Home from './pages/Home'

function App() {
  // Theme state: 'light' or 'dark'
  // useState stores the current theme in React state
  const [theme, setTheme] = useState('light')

  // Load saved theme when the app starts
  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    if (saved) setTheme(saved)
  }, [])

  // Apply theme to document body and persist when it changes
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <div className="app-shell">
        {/* Pass theme and setter down so Navbar can toggle it */}
        <Navbar theme={theme} setTheme={setTheme} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
