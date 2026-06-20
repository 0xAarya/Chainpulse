import { useState } from 'react'
import EventCard from '../components/EventCard'

const eventList = [
  {
    id: 1,
    name: 'Web3 Builder Night',
    location: 'Bengaluru',
    attendees: 420,
    status: 'Live',
    goal: 'Bring local developers together for demos, hiring conversations, and project feedback.',
    followUp: 'Share demo links, collect project ideas, and invite active builders to a support group.',
  },
  {
    id: 2,
    name: 'DeFi Growth Sprint',
    location: 'Remote',
    attendees: 900,
    status: 'Upcoming',
    goal: 'Help new builders understand DeFi use cases through guided sessions.',
    followUp: 'Send learning resources, track questions, and create a recap thread.',
  },
  {
    id: 3,
    name: 'Creator DAO Meetup',
    location: 'Singapore',
    attendees: 310,
    status: 'Upcoming',
    goal: 'Connect creators with DAO operators and explain contribution paths.',
    followUp: 'Introduce contributors to working groups and publish a simple onboarding guide.',
  },
  {
    id: 4,
    name: 'Smart Contract Office Hours',
    location: 'Remote',
    attendees: 540,
    status: 'Live',
    goal: 'Support beginner developers who are blocked while learning smart contracts.',
    followUp: 'Turn repeated questions into docs, FAQs, and short community explainers.',
  },
  {
    id: 5,
    name: 'Ambassador Onboarding Call',
    location: 'Mumbai',
    attendees: 180,
    status: 'Upcoming',
    goal: 'Train ambassadors on event hosting, moderation, and builder support.',
    followUp: 'Assign local leads, share brand assets, and define weekly reporting notes.',
  },
]

function Events() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const visibleEvents = eventList.filter((event) => {
    if (selectedFilter === 'All') return true
    if (selectedFilter === 'Upcoming') return event.status === 'Upcoming'
    if (selectedFilter === 'Completed') return event.status === 'Completed'
    return true
  })

  const filterOptions = ['All', 'Upcoming', 'Completed']

  return (
    <section className="page-section">
      <div className="page-heading page-heading-row">
        <div>
          <p className="eyebrow">Events</p>
          <h1>Community events</h1>
          <p>
            Events are shown like a community operations tracker: goal,
            attendance, status, and follow-up action after the event.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8 }} className="filter-group">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              className={
                'secondary-button' + (selectedFilter === opt ? ' nav-link-active' : '')
              }
              onClick={() => setSelectedFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="card-grid">
        {visibleEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {visibleEvents.length === 0 && (
        <p className="loading-text">No events match this filter.</p>
      )}
    </section>
  )
}

export default Events
