import { NavLink } from 'react-router-dom'

function Navbar({ theme, setTheme }) {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/communities', label: 'Communities' },
    { path: '/events', label: 'Events' },
  ]

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-mark">CP</span>
        ChainPulse
      </NavLink>

      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}

        {/* Theme toggle: uses setTheme from App to change theme state */}
        <button
          type="button"
          className="secondary-button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
