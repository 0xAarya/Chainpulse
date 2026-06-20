import { useState } from 'react'
import CommunityCard from '../components/CommunityCard'
import { communityData } from '../data/communityData'

function Communities() {
  const [searchText, setSearchText] = useState('')

  const visibleCommunities = communityData.filter((community) => {
    const q = searchText.trim().toLowerCase()
    if (q === '') return true
    return (
      community.name.toLowerCase().includes(q) ||
      community.region.toLowerCase().includes(q)
    )
  })

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Communities</p>
        <h1>Community network</h1>
        <p>
          A focused view of Web3 builder groups, their regional reach, growth
          signals, and the kind of programs that keep developers engaged.
        </p>
      </div>

      <div style={{ marginBottom: 18 }}>
        <input
          aria-label="Search communities"
          placeholder="Search by name or region (e.g. Stellar, Global)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="card-grid">
        {visibleCommunities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>

      <section className="content-band inset-band">
        <div className="section-heading">
          <p className="eyebrow">Community Strategy</p>
          <h2>What I would look for as a community manager</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Quality of discussions</h3>
            <p>
              Member count matters, but developer communities become stronger
              when questions are answered clearly and beginners feel safe asking.
            </p>
          </article>
          <article className="feature-card">
            <h3>Repeat participation</h3>
            <p>
              The best signal is when people come back for workshops, office
              hours, hackathons, and contribution calls.
            </p>
          </article>
          <article className="feature-card">
            <h3>Clear next steps</h3>
            <p>
              Every event or announcement should guide members toward docs,
              tasks, grants, bounties, or a builder channel.
            </p>
          </article>
        </div>
      </section>
    </section>
  )
}

export default Communities
