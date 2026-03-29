'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ARTICLES, formatDate, Article } from '@/lib/articles'

const CATEGORIES = ['All', 'Strategy', 'Evidence', 'Media', 'Speaking', 'Field Guides', 'Process']

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? ARTICLES : ARTICLES.filter(a => a.category === activeFilter)
  const [featured, ...rest] = filtered

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 3rem', background: 'rgba(12,11,9,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
        <Link href="/" className="nav-logo">Talentrelo<span>.</span></Link>
        <ul className="nav-links">
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#process">How it works</Link></li>
          <li><Link href="/#packages">Packages</Link></li>
          <li><Link href="/blog/" style={{ color: 'var(--gold)' }}>Blog</Link></li>
        </ul>
        <Link href="/#cta" className="nav-cta">Book a consultation</Link>
      </nav>

      <div id="listing" style={{ paddingTop: '5rem' }}>
        <header id="masthead">
          <div>
            <div className="masthead-eyebrow">The Record</div>
            <h1 className="masthead-title">Strategy and evidence<br />for <em>extraordinary</em> cases.</h1>
          </div>
          <p className="masthead-desc">Guides, breakdowns, and field notes for professionals building their EB-1 and O-1 visa evidence.</p>
        </header>

        <div id="filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured && (
          <Link href={`/blog/${featured.slug}`} className="featured-article" style={{ display: 'flex', textDecoration: 'none' }}>
            <div className="featured-img-wrap">
              <img className="featured-img" src={featured.cover} alt={featured.title} loading="lazy" />
            </div>
            <div className="featured-body">
              <div className="article-cat">{featured.category}</div>
              <h2 className="featured-heading">{featured.title}</h2>
              <p className="article-excerpt">{featured.excerpt}</p>
              <div className="article-meta">
                <span>{formatDate(featured.date)}</span>
                <span>{featured.readTime} min read</span>
              </div>
              <span className="read-more">
                Read article
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" /></svg>
              </span>
            </div>
          </Link>
        )}

        <div className="articles-grid">
          {rest.map(a => (
            <Link href={`/blog/${a.slug}`} key={a.slug} className="article-card" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <div className="article-cat">{a.category}</div>
              <h2 className="article-card-heading">{a.title}</h2>
              <p className="article-card-excerpt">{a.excerpt}</p>
              <div className="article-meta">
                <span>{formatDate(a.date)}</span>
                <span>{a.readTime} min</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-3)', fontSize: '0.85rem' }}>
        <p>&copy; 2026 Talentrelo PR. Not a law firm.</p>
        <nav aria-label="Footer" style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/#packages">Packages</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#cta">Contact</Link>
        </nav>
      </footer>
    </>
  )
}
