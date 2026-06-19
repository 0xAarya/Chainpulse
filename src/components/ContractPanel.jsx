import { contractFeatures, contractMethods } from '../data/contractData'

function ContractPanel() {
  return (
    <section className="content-band inset-band">
      <div className="section-heading">
        <p className="eyebrow">Solidity Backend</p>
        <h2>Smart contract data layer</h2>
        <p>
          ChainPulse includes a simple Solidity backend that can store community
          and event analytics on-chain instead of using a traditional database.
        </p>
      </div>

      <div className="backend-layout">
        <div className="feature-grid">
          {contractFeatures.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </article>
          ))}
        </div>

        <div className="method-panel">
          <h3>Contract methods</h3>
          <div className="method-list">
            {contractMethods.map((methodName) => (
              <code key={methodName}>{methodName}</code>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContractPanel
