import Footer from './components/Footer'
import Nav from './components/Nav'
import Pricing from './components/Pricing'
import { features, logos, quotes } from './data'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div>
              <span className="badge">New: WhatsApp Business channel</span>
              <h1>
                Support software for teams
                <span className="grad"> that are still small.</span>
              </h1>
              <p className="lede">
                CloudDesk turns a shared inbox into a real helpdesk — routing, SLAs and
                reporting — without the six-week rollout or the enterprise price tag.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#pricing">
                  Start free trial
                </a>
                <a className="btn btn-ghost" href="#product">
                  See how it works
                </a>
              </div>
              <p className="hero-note">14 days free · no card · set up in an afternoon</p>
            </div>

            <div className="app-shot" aria-hidden="true">
              <div className="shot-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="shot-body">
                <aside className="shot-side">
                  <span className="shot-pill is-live" />
                  <span className="shot-pill" />
                  <span className="shot-pill" />
                  <span className="shot-pill" />
                </aside>
                <div className="shot-main">
                  <div className="shot-row">
                    <span className="dot" />
                    <span className="line w-70" />
                    <span className="tag">SLA 2h</span>
                  </div>
                  <div className="shot-row">
                    <span className="dot dot-warn" />
                    <span className="line w-85" />
                    <span className="tag tag-warn">SLA 20m</span>
                  </div>
                  <div className="shot-row">
                    <span className="dot" />
                    <span className="line w-55" />
                    <span className="tag">SLA 6h</span>
                  </div>
                  <div className="shot-chart">
                    {[40, 62, 48, 78, 66, 90, 72].map((height, index) => (
                      <span key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <ul className="logos">
              {logos.map((logo) => (
                <li key={logo}>{logo}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="product">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Product</span>
              <h2>Everything a support team needs. Nothing it does not.</h2>
              <p className="lede">
                We left out the workflow builder with 40 node types. Teams under twenty people
                have never once asked us for it.
              </p>
            </div>

            <div className="grid feature-grid">
              {features.map((feature) => (
                <article key={feature.title} className="card card-hover feature">
                  <span className="feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section quotes-band" id="customers">
          <div className="container">
            <div className="grid quote-grid">
              {quotes.map((quote) => (
                <figure key={quote.name} className="card quote">
                  <blockquote>“{quote.quote}”</blockquote>
                  <figcaption>
                    <span className="quote-avatar" aria-hidden="true">
                      {quote.initials}
                    </span>
                    <div>
                      <strong>{quote.name}</strong>
                      <span>{quote.role}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">Pricing</span>
              <h2>Per agent, and that is the whole invoice</h2>
              <p className="lede">
                No setup fee, no charge per conversation, and nothing that costs extra the month
                you get busy.
              </p>
            </div>
            <Pricing />
          </div>
        </section>

        <section className="section cta-band">
          <div className="container cta-inner">
            <div>
              <h2>Try it on this week's backlog</h2>
              <p className="lede">
                Import your inbox, invite one teammate and see how far you get by Friday. If it
                does not stick, deleting the account takes one click.
              </p>
            </div>
            <a className="btn btn-primary" href="#pricing">
              Start your free trial
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
