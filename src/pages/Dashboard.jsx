import { useEffect, useState } from 'react'
import ContractPanel from '../components/ContractPanel'
import StatCard from '../components/StatCard'

function Dashboard() {
  const [stats, setStats] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const programInsights = [
    {
      label: 'Builder onboarding',
      detail: 'Track which communities convert new members into active builders.',
    },
    {
      label: 'Event follow-up',
      detail: 'Spot where post-event resources and recaps can improve retention.',
    },
    {
      label: 'Contributor paths',
      detail: 'Measure whether members understand how to join working groups.',
    },
  ]

  const weeklyTasks = [
    'Review Discord questions from new developers',
    'Share event recap and useful links',
    'Identify active members for ambassador support',
    'Prepare one beginner-friendly React or Web3 explainer',
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      const dashboardStats = [
        {
          title: 'Total Members',
          value: '25000',
          description: 'Across tracked groups',
        },
        { title: 'Communities', value: '12', description: 'Active Web3 spaces' },
        { title: 'Events', value: '35', description: 'Meetups and online sessions' },
        { title: 'Growth', value: '18%', description: 'Month over month' },
      ]

      setStats(dashboardStats)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Dashboard</p>
        <h1>Community growth overview</h1>
        <p>
          Simple metrics and operations notes for managing Web3 developer
          communities, events, and engagement quality.
        </p>
      </div>

      {isLoading ? (
        <p className="loading-text">Loading dashboard...</p>
      ) : (
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      )}

      <div className="dashboard-layout">
        <section className="panel">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Community Manager Lens</p>
            <h2>What these numbers help decide</h2>
          </div>

          <div className="stack-list">
            {programInsights.map((insight) => (
              <article key={insight.label} className="list-item">
                <h3>{insight.label}</h3>
                <p>{insight.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel accent-panel">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Weekly Workflow</p>
            <h2>How I would use this dashboard</h2>
          </div>

          <ul className="check-list">
            {weeklyTasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </section>
      </div>

      <ContractPanel />
    </section>
  )
}

export default Dashboard
