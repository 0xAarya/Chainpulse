function CommunityCard({ community }) {
  return (
    <article className="card community-card">
      <div>
        <p className="eyebrow">{community.region}</p>
        <h2>{community.name}</h2>
        <p className="card-copy">{community.focus}</p>
      </div>

      <div className="card-details">
        <span>{community.members.toLocaleString()} members</span>
        <strong>+{community.growth}% growth</strong>
      </div>

      <p className="insight-text">{community.strength}</p>
    </article>
  )
}

export default CommunityCard
