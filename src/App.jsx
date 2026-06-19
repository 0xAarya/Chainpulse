import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Communities from './pages/Communities'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

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
