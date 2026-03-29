'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" role="navigation" aria-label="Main" className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="nav-logo">Talentrelo<span>.</span></Link>
      <ul className="nav-links">
        <li><Link href="/#services">Services</Link></li>
        <li><Link href="/#process">How it works</Link></li>
        <li><Link href="/#packages">Packages</Link></li>
        <li><Link href="/#faq">FAQ</Link></li>
        <li><Link href="/blog/">Blog</Link></li>
      </ul>
      <Link href="/#cta" className="nav-cta">Book a consultation</Link>
      <button
        className={`nav-burger${open ? ' open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
