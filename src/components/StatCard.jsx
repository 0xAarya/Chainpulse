function StatCard({ title, value, description }) {
  return (
    <article className="card stat-card">
      <p className="eyebrow">{title}</p>
      <h2>{value}</h2>
      <span>{description}</span>
    </article>
  )
}

export default StatCard
