import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Communities from './pages/Communities'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import Home from './pages/Home'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <div className="app-shell">
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
