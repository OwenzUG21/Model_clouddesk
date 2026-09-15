const footerLinks = [
  { label: 'Changelog', href: '#changelog' },
  { label: 'Status', href: '#status' },
  { label: 'Security', href: '#security' },
  { label: 'Contact sales', href: '#contact-sales' },
] as const

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} CloudDesk. Shared inbox and helpdesk for small support teams.
        </p>
        <nav className="footer-links" aria-label="Footer">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#top">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  )
}
