function EventCard({ event }) {
  const isLive = event.status === 'Live'

  return (
    <article className="card event-card">
      <div>
        <p className="eyebrow">{event.location}</p>
        <h2>{event.name}</h2>
        <p className="card-copy">{event.goal}</p>
      </div>

      <div className="card-details">
        <span>{event.attendees.toLocaleString()} attendees</span>
        <strong className={isLive ? 'status-live' : 'status-upcoming'}>
          {event.status}
        </strong>
      </div>

      <p className="insight-text">Community follow-up: {event.followUp}</p>
    </article>
  )
}

export default EventCard
