import { Link } from 'react-router-dom'

function Home() {
  const communityManagerSkills = [
    'Developer onboarding',
    'Event planning',
    'Discord engagement',
    'Ambassador support',
  ]

  const projectHighlights = [
    {
      title: 'Built for community signals',
      text: 'The dashboard focuses on metrics a community manager actually tracks: member growth, event attendance, follow-ups, and engagement quality.',
    },
    {
      title: 'React skills in context',
      text: 'The project uses routes, props, state, effects, reusable cards, and mapped data without hiding the logic behind complex packages.',
    },
    {
      title: 'Web3 developer focus',
      text: 'The content is framed around builders, education programs, hackathons, governance calls, and contributor journeys.',
    },
  ]

  return (
    <>
      <section className="home-page page-section">
        <div className="hero-content">
          <p className="eyebrow">Web3 Community Intelligence</p>
          <h1>ChainPulse</h1>
          <p className="hero-subtitle">
            A portfolio dashboard for tracking Web3 communities, developer
            programs, events, and ecosystem growth.
          </p>
          <p className="hero-note">
            Built from the perspective of a community manager who understands
            builders, onboarding, event operations, and practical React UI work.
          </p>
          <Link to="/dashboard" className="primary-button">
            Open Dashboard
          </Link>
        </div>

        <div className="hero-panel" aria-label="ChainPulse overview">
          <div className="pulse-line"></div>
          <div className="mini-stat">
            <span>Total reach</span>
            <strong>25K</strong>
          </div>
          <div className="mini-stat">
            <span>Active events</span>
            <strong>35</strong>
          </div>
          <div className="mini-stat">
            <span>Monthly growth</span>
            <strong>18%</strong>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Portfolio Positioning</p>
          <h2>Community management experience, shown through a React product UI</h2>
          <p>
            ChainPulse is not trying to look like a backend-heavy analytics
            platform. It shows that I can understand community goals, organize
            useful information, and turn it into a clean frontend experience.
          </p>
        </div>

        <div className="skill-row">
          {communityManagerSkills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>

        <div className="feature-grid">
          {projectHighlights.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
