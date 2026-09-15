const links = [
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
  { label: 'Docs', href: '#docs' },
] as const

export default function Nav() {
  return (
    <header className="site-nav">
      <div className="container inner">
        <a className="brand" href="#top">
          <span className="brand-mark">C</span>
          CloudDesk
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary btn-sm" href="#pricing">
          Start free trial
        </a>
      </div>
    </header>
  )
}
