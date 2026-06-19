import { NavLink } from 'react-router-dom'

function Navbar() {
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
      </nav>
    </header>
  )
}

export default Navbar
