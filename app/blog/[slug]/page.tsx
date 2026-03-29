import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
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
      <Nav />

      <div style={{ paddingTop: '5rem' }}>

        {/* Hero image */}
        <div style={{ maxWidth: 900, margin: '2rem auto 0', padding: '0 2rem' }}>
          <img
            src={article.cover}
            alt={article.title}
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block', maxHeight: 480, objectFit: 'cover' }}
          />
        </div>

        {/* Article content */}
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '2.5rem 2rem 6rem' }}>

          {/* Back link */}
          <Link href="/blog/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-3)', fontSize: '0.85rem', marginBottom: '2rem', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11.5 7h-9M6 3.5 2.5 7 6 10.5" /></svg>
            All articles
          </Link>

          {/* Category + title + meta */}
          <div className="article-cat" style={{ marginBottom: '1rem' }}>{article.category}</div>
          <h1 className="article-title" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: '1.25rem' }}>{article.title}</h1>

          <div className="article-meta" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
            {author && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <img src={author.avatar} alt={author.name} style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
                <span style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}>{author.name}</span>
              </div>
            )}
            <span style={{ color: 'var(--text-3)', fontSize: '0.8rem' }}>{formatDate(article.date)}</span>
            <span style={{ color: 'var(--text-3)', fontSize: '0.8rem' }}>{article.readTime} min read</span>
          </div>

          {/* Article body */}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body }} />

          {/* FAQ */}
          {article.faq && article.faq.length > 0 && (
            <div className="article-faq" style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', fontWeight: 500, marginBottom: '1.5rem', color: 'var(--text)' }}>Frequently Asked Questions</h2>
              {article.faq.map((item, i) => (
                <div key={i} style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ color: 'var(--text)', fontWeight: 500, marginBottom: '0.5rem', fontSize: '1rem' }}>{item.q}</h3>
                  <p style={{ color: 'var(--text-2)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.a}</p>
                </div>
              ))}
            </div>
          )}
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
