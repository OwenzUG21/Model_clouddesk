import { useState } from 'react'
import { plans } from '../data'

/** Pricing tiers with a monthly/annual toggle held in local state. */
export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <div className="pricing">
      <div className="billing-toggle">
        <button
          type="button"
          className={!annual ? 'bill is-active' : 'bill'}
          onClick={() => setAnnual(false)}
          aria-pressed={!annual}
        >
          Monthly
        </button>
        <button
          type="button"
          className={annual ? 'bill is-active' : 'bill'}
          onClick={() => setAnnual(true)}
          aria-pressed={annual}
        >
          Annual
          <span className="save-flag">save ~17%</span>
        </button>
      </div>

      <div className="grid pricing-grid">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={plan.featured ? 'card plan is-featured' : 'card plan'}
          >
            {plan.featured && <span className="plan-flag">Most teams start here</span>}
            <h3>{plan.name}</h3>
            <p className="plan-blurb">{plan.blurb}</p>

            <p className="plan-price">
              <span className="currency">$</span>
              {annual ? plan.annual : plan.monthly}
              <span className="per">per agent / month</span>
            </p>
            <p className="plan-seats">{plan.seats}</p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <button
              className={plan.featured ? 'btn btn-primary btn-block' : 'btn btn-ghost btn-block'}
              type="button"
            >
              Start 14-day trial
            </button>
          </article>
        ))}
      </div>

      <p className="pricing-note">
        {annual ? 'Billed yearly. ' : 'Billed monthly. '}
        No card needed for the trial, and no charge until you invite a second agent.
      </p>
    </div>
  )
}
