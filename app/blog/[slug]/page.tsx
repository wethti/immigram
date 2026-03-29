import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ARTICLES, AUTHORS, getArticle, formatDate } from '@/lib/articles'

export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  const url = `https://talentrelo.com/blog/${article.slug}`
  return {
    title: article.seoTitle || article.title + ' — The Record | Talentrelo',
    description: article.metaDescription || article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: article.seoTitle || article.title,
      description: article.metaDescription || article.excerpt,
      images: [{ url: article.cover }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle || article.title,
      description: article.metaDescription || article.excerpt,
      images: [article.cover],
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const author = AUTHORS[article.author]
  const articleUrl = `https://talentrelo.com/blog/${article.slug}`
  const seoTitle = article.seoTitle || article.title + ' — The Record | Talentrelo'

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': articleUrl + '#article',
        headline: seoTitle,
        description: article.metaDescription || article.excerpt,
        image: article.cover,
        datePublished: article.date,
        dateModified: article.date,
        author: author ? {
          '@type': 'Person',
          name: author.name,
          jobTitle: author.title,
          image: author.avatar,
        } : undefined,
        publisher: {
          '@type': 'Organization',
          '@id': 'https://talentrelo.com/#organization',
          name: 'Talentrelo',
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
        keywords: article.keywords?.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://talentrelo.com/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://talentrelo.com/blog/' },
          { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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

      <div id="article-view" className="active" style={{ paddingTop: '5rem' }}>
        <div className="article-hero">
          <img className="article-hero-img" src={article.cover} alt={article.title} />
        </div>

        <div className="article-layout">
          <div className="article-sidebar">
            <Link href="/blog/" className="back-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11.5 7h-9M6 3.5 2.5 7 6 10.5" /></svg>
              All articles
            </Link>
            {author && (
              <div className="author-card">
                <img className="author-avatar" src={author.avatar} alt={author.name} />
                <div className="author-name">{author.name}</div>
                <div className="author-title">{author.title}</div>
                <p className="author-bio">{author.bio}</p>
              </div>
            )}
            <div className="sidebar-meta">
              <div className="article-cat">{article.category}</div>
              <div style={{ color: 'var(--text-3)', fontSize: '0.8rem', marginTop: '0.5rem' }}>{formatDate(article.date)}</div>
              <div style={{ color: 'var(--text-3)', fontSize: '0.8rem' }}>{article.readTime} min read</div>
            </div>
          </div>

          <article className="article-body">
            <div className="article-cat">{article.category}</div>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta" style={{ marginBottom: '2rem' }}>
              <span>{formatDate(article.date)}</span>
              <span>{article.readTime} min read</span>
            </div>

            <div dangerouslySetInnerHTML={{ __html: article.body }} />

            {article.faq && article.faq.length > 0 && (
              <div className="article-faq">
                <h2>Frequently Asked Questions</h2>
                {article.faq.map((item, i) => (
                  <div key={i} className="article-faq-item">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            )}
          </article>
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
