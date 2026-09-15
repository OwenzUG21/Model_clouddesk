export interface Plan {
  name: string
  monthly: number
  annual: number
  seats: string
  blurb: string
  features: string[]
  featured?: boolean
}

export interface Feature {
  icon: string
  title: string
  detail: string
}

export interface Quote {
  quote: string
  name: string
  role: string
  initials: string
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 12,
    annual: 10,
    seats: 'Up to 3 agents',
    blurb: 'For the first support person and whoever helps them out.',
    features: ['Shared inbox', 'Email & web form', 'Canned replies', '30-day history'],
  },
  {
    name: 'Team',
    monthly: 29,
    annual: 24,
    seats: 'Up to 15 agents',
    blurb: 'For a real support team with a rota and a backlog.',
    features: [
      'Everything in Starter',
      'WhatsApp & SMS channels',
      'Assignment rules & SLAs',
      'Satisfaction surveys',
      'Unlimited history',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    monthly: 54,
    annual: 45,
    seats: 'Unlimited agents',
    blurb: 'For support that spans products, regions and time zones.',
    features: [
      'Everything in Team',
      'Multiple inboxes & brands',
      'API & webhooks',
      'Audit log & SSO',
      'Priority support',
    ],
  },
]

export const features: Feature[] = [
  {
    icon: '📥',
    title: 'One shared inbox',
    detail: 'Email, web form, WhatsApp and SMS land in the same queue, with no tab-switching.',
  },
  {
    icon: '⚡',
    title: 'Rules that do the sorting',
    detail: 'Route by product, language or plan, and escalate before the SLA is breached rather than after.',
  },
  {
    icon: '🧵',
    title: 'Context on every thread',
    detail: 'Past conversations, plan, and open issues sit beside the reply box — not three systems away.',
  },
  {
    icon: '📊',
    title: 'Reporting your manager reads',
    detail: 'First response, resolution time and backlog age, by agent or by queue, without a data team.',
  },
  {
    icon: '🔌',
    title: 'Fits what you already run',
    detail: 'Native links to Slack, Linear, Stripe and HubSpot, plus a clean REST API for the rest.',
  },
  {
    icon: '🔒',
    title: 'Sensible security',
    detail: 'SSO, granular roles, audit logs and data residency in the EU or Africa on request.',
  },
]

export const quotes: Quote[] = [
  {
    quote:
      'We moved off a shared Gmail account on a Friday and cleared a 400-email backlog by Wednesday. Nothing else changed.',
    name: 'Nadia Ssentongo',
    role: 'Head of Support, Kite Financial',
    initials: 'NS',
  },
  {
    quote:
      'The SLA rules alone paid for it. We stopped finding week-old tickets nobody had claimed.',
    name: 'Peter Wambi',
    role: 'Operations Lead, AgroLink',
    initials: 'PW',
  },
]

export const logos = ['KITE', 'AGROLINK', 'HARVEST', 'NORTHWIND', 'QUILL'] as const
