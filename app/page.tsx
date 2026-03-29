import Link from 'next/link'
import FaqSection from '@/components/FaqSection'
import PageScripts from '@/components/PageScripts'
import { ARTICLES } from '@/lib/articles'

export default function Home() {
  const previewArticles = ARTICLES.slice(0, 3)

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <main id="main">

        {/* ─── HERO ─── */}
        <section id="hero" aria-labelledby="hero-heading">
          <div className="hero-bg-line" aria-hidden="true" />
          <div className="hero-left">
            <div className="hero-label reveal">EB-1 · O-1 · PR Strategy</div>
            <h1 className="hero-heading reveal" id="hero-heading">
              Build the profile<br />that wins your<br /><em>extraordinary</em><br />visa case.
            </h1>
            <p className="hero-sub reveal">
              Immigration attorneys need proof of recognition — media features, conference stages, expert panels. We build that evidence, from first pitch to final placement, so your petition stands on solid ground.
            </p>
            <div className="hero-actions reveal">
              <Link href="/#cta" className="btn-primary">
                Get a profile audit
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" /></svg>
              </Link>
              <Link href="/#services" className="btn-ghost">
                See how it works
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" /></svg>
              </Link>
            </div>
            <div className="hero-faces reveal">
              <div className="hero-faces-stack">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=68&h=68&fit=crop&crop=face" alt="EB-1 client" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=68&h=68&fit=crop&crop=face" alt="O-1 client" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=68&h=68&fit=crop&crop=face" alt="EB-1A client" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=68&h=68&fit=crop&crop=face" alt="O-1B client" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=68&h=68&fit=crop&crop=face" alt="EB-1B client" loading="lazy" />
              </div>
              <div className="hero-faces-text">
                <strong>840+ professionals</strong> have built<br />their EB-1 &amp; O-1 evidence with us
              </div>
            </div>
          </div>

          <div className="hero-right reveal-right">
            <div className="hero-portrait">
              <picture>
                <source media="(max-width: 768px)" srcSet="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&h=700&fit=crop&crop=faces&facepad=6" />
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&h=1100&fit=crop&crop=top"
                  alt="Professional building their extraordinary visa profile"
                  loading="eager"
                />
              </picture>
              <div className="hero-portrait-overlay" aria-hidden="true" />
              <div className="hero-portrait-badge">
                <div className="hero-portrait-badge-value">
                  <span className="counter" data-target="2400">0</span><span style={{ color: 'var(--gold)' }}>+</span>
                </div>
                <div className="hero-portrait-badge-label">Placements delivered</div>
              </div>
            </div>
            <div className="hero-portrait-stats">
              <div className="hero-portrait-stat">
                <div className="hero-portrait-stat-val"><span className="counter" data-target="98">0</span><span className="accent">%</span></div>
                <small>Attorney-ready packages</small>
              </div>
              <div className="hero-portrait-stat">
                <div className="hero-portrait-stat-val">3 <span style={{ fontSize: '0.75em', color: 'var(--text-2)' }}>wks</span></div>
                <small>Avg. first placement</small>
              </div>
              <div className="hero-portrait-stat">
                <div className="hero-portrait-stat-val"><span className="counter" data-target="340">0</span><span className="accent">+</span></div>
                <small>Outlet partners</small>
              </div>
            </div>
          </div>

          <div className="hero-scroll reveal">
            <div className="hero-scroll-line" />
            <span>Scroll to explore</span>
          </div>
        </section>

        {/* ─── TRUST BAR ─── */}
        <div id="trust" role="complementary" aria-label="Featured in">
          <span className="trust-label">Featured in</span>
          <div className="trust-track-wrap">
            <div className="trust-track" aria-hidden="true">
              {['Forbes','TechCrunch','Bloomberg','Wired','Inc.','Fast Company','MIT Technology Review','VentureBeat','Business Insider','The Information',
                'Forbes','TechCrunch','Bloomberg','Wired','Inc.','Fast Company','MIT Technology Review','VentureBeat','Business Insider','The Information'].map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ─── INSIGHT ─── */}
        <section id="insight" aria-labelledby="insight-heading">
          <div className="insight-left reveal-left">
            <div className="section-label">The evidence problem</div>
            <h2 className="section-heading" id="insight-heading">Your work is extraordinary.<br />Your <em>record</em> needs to prove it.</h2>
            <div className="insight-body">
              <p>USCIS evaluates EB-1A, EB-1B, and O-1 petitions against a strict checklist: <strong>published articles about you</strong>, <strong>judging the work of others</strong>, and <strong>invited speaking roles</strong> are among the most powerful criteria.</p>
              <p>Most talented professionals have the expertise but lack the documented public footprint. Immigration attorneys can craft the strongest possible petition — but only when the evidence is already in place.</p>
              <p>That&apos;s the gap we close. Talentrelo is the PR infrastructure your immigration case depends on, run by journalists, editors, and conference producers who know exactly what carries weight.</p>
            </div>
          </div>
          <div className="insight-right reveal-right">
            {[
              { n: '01', t: 'Published media coverage about you', d: 'Articles in major trade and national outlets that name you as a leading expert in your field — not bylines you wrote, but coverage you earned.' },
              { n: '02', t: 'Invited conference speaking', d: 'Documented invitations to speak at industry conferences establish your standing as a recognized authority. We secure the slot and provide proof for your attorney.' },
              { n: '03', t: 'Expert judging & panel participation', d: 'Serving as a judge — at hackathons, awards, or grant committees — demonstrates that peers defer to your expertise. This criterion is often decisive for borderline cases.' },
              { n: '04', t: 'Attorney-packaged evidence portfolio', d: 'Every placement we deliver comes formatted — with URLs, publication dates, circulation data, and conference attendance figures — ready to drop into your I-140 exhibit list.' },
            ].map(item => (
              <div className="insight-item" key={item.n}>
                <div className="insight-num">{item.n}</div>
                <div><div className="insight-item-title">{item.t}</div><div className="insight-item-desc">{item.d}</div></div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── STATS BENTO ─── */}
        <section id="stats">
          <div className="stats-heading reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>By the numbers</div>
            <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>A track record attorneys trust.</h2>
          </div>
          <div className="bento-grid">
            <div className="bento-card bc-1 reveal"><div className="bento-tag">Clients served</div><div className="bento-stat-num"><span className="counter" data-target="830">0</span><span>+</span></div><div className="bento-stat-label">Professionals across tech, science, arts &amp; business who built their USCIS evidence with us</div></div>
            <div className="bento-card bc-2 reveal delay-1"><div className="bento-tag">Approval rate</div><div className="bento-stat-num"><span className="counter" data-target="94">0</span><span style={{ color: 'var(--gold)' }}>%</span></div><div className="bento-stat-label">Of clients who completed a full package received an approved petition on first filing</div></div>
            <div className="bento-card bc-3 reveal delay-2"><div className="bento-tag">Countries</div><div className="bento-stat-num"><span className="counter" data-target="48">0</span></div><div className="bento-stat-label">Nationalities successfully placed in US media &amp; events</div></div>
            <div className="bento-card bc-4 reveal delay-1">
              <div className="bento-tag">Outlet reach</div>
              <div className="bento-stat-num" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}><span className="counter" data-target="2">0</span><span>B<span style={{ fontSize: '0.5em', color: 'var(--text-2)', marginLeft: 4 }}>combined readers/mo</span></span></div>
              <div className="bento-stat-label">Across all media partners where we have active editorial relationships</div>
              <div className="bento-bar-wrap">
                {[{ n: 'Tech', w: 88 }, { n: 'Business', w: 76 }, { n: 'Science', w: 61 }, { n: 'Arts', w: 44 }].map(b => (
                  <div className="bento-bar-row" key={b.n}><div className="bento-bar-name">{b.n}</div><div className="bento-bar-track"><div className="bento-bar-fill" data-width={b.w} /></div><div className="bento-bar-pct">{b.w}%</div></div>
                ))}
              </div>
            </div>
            <div className="bento-card bc-5 reveal delay-2">
              <div className="bento-tag">Insight</div>
              <div className="bento-quote">&ldquo;Immigration judges don&apos;t read your LinkedIn. They read what journalists wrote about you.&rdquo;</div>
              <div style={{ marginTop: '1.25rem' }}><div className="bento-stat-label">— Recurring feedback from USCIS-certified immigration attorneys</div></div>
              <ul className="bento-mini-list"><li>Media coverage is weighted above self-authored articles</li><li>Speaking invitations must be documented with official letters</li><li>Judging roles require proof of evaluation, not just attendance</li></ul>
            </div>
            <div className="bento-card bc-6 reveal"><div className="bento-tag">Speed</div><div className="bento-stat-num" style={{ fontSize: '2.8rem' }}>3<span style={{ fontSize: '1rem', color: 'var(--text-2)' }}> wks</span></div><div className="bento-stat-label">Median time from onboarding call to first live placement</div></div>
            <div className="bento-card bc-7 reveal delay-1"><div className="bento-tag">Placements</div><div className="bento-stat-num" style={{ fontSize: '2.8rem' }}><span className="counter" data-target="2400">0</span><span>+</span></div><div className="bento-stat-label">Total earned media placements since founding</div></div>
            <div className="bento-card bc-8 reveal delay-2"><div className="bento-tag">Attorneys</div><div className="bento-stat-num" style={{ fontSize: '2.8rem' }}><span className="counter" data-target="120">0</span><span>+</span></div><div className="bento-stat-label">Immigration law firms that recommend us to their clients</div></div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section id="services" aria-labelledby="services-heading">
          <div className="services-header">
            <div className="reveal-left">
              <div className="section-label">What we do</div>
              <h2 className="section-heading" id="services-heading">Three services.<br />One outcome:<br /><em>a compelling case.</em></h2>
            </div>
            <div className="services-header-right reveal-right">
              <p className="services-intro">Every engagement is built around the specific criteria your visa category requires. We identify which placements your attorney needs, then execute relentlessly until the evidence is in hand.</p>
            </div>
          </div>
          <div className="service-row reveal">
            <div className="service-content">
              <div className="service-index">01 / Publications</div>
              <h3 className="service-title">Your name, in the outlets that matter.</h3>
              <p className="service-desc">We pitch, place, and manage feature articles and expert quotes about you across a curated network of 340+ publications. Every piece is framed to satisfy USCIS&apos;s published material criterion — with circulation data attached.</p>
              <ul className="service-features">
                <li>Outlet selection mapped to your industry &amp; visa category</li>
                <li>Custom-written pitch decks and story angles</li>
                <li>Full editorial management through publication</li>
                <li>Live URL, archive PDF, and circulation report for your attorney</li>
                <li>Tier-1 placements available (Forbes, Bloomberg, TechCrunch)</li>
              </ul>
            </div>
            <div className="service-visual">
              <div className="pub-visual" aria-hidden="true">
                {[{ logo: 'Forbes', type: 'Feature · 2.4M readers', d: '0s' }, { logo: 'Wired', type: 'Expert Quote · 1.1M readers', d: '0.4s' }, { logo: 'TechCrunch', type: 'Profile · 890K readers', d: '0.8s' }, { logo: 'Inc.', type: 'Thought Leadership', d: '1.2s' }].map(p => (
                  <div className="pub-card" key={p.logo}><div><div className="pub-logo">{p.logo}</div><div className="pub-type">{p.type}</div></div><div className="pub-dot" style={{ animationDelay: p.d }} /></div>
                ))}
              </div>
            </div>
          </div>
          <div className="service-row reversed reveal">
            <div className="service-content">
              <div className="service-index">02 / Speaking</div>
              <h3 className="service-title">A stage invitation is evidence. We get you invited.</h3>
              <p className="service-desc">An official speaking invitation from a recognized conference is one of the clearest signals of extraordinary ability. We manage your speaker profile, submit applications on your behalf, and secure the formal documentation your immigration attorney requires.</p>
              <ul className="service-features">
                <li>Speaker bio and abstract crafted for high-acceptance rates</li>
                <li>Applications submitted to 20+ conferences per quarter</li>
                <li>Priority targeting of TED, SXSW, Web Summit, and domain-specific events</li>
                <li>Official invitation letter obtained and formatted</li>
                <li>Virtual panel spots available when in-person is not feasible</li>
              </ul>
            </div>
            <div className="service-visual">
              <div className="speak-visual" aria-hidden="true">
                <div className="speak-stage" />
                <div className="speak-cards">
                  {[{ c: 'Web Summit 2025', m: 'Lisbon · 70,000 attendees · Confirmed' }, { c: 'SXSW Interactive', m: 'Austin · 40,000 attendees · Confirmed' }, { c: 'MIT EmTech', m: 'Cambridge · 2,500 attendees · In progress' }].map(s => (
                    <div className="speak-card" key={s.c}><div className="speak-conf">{s.c}</div><div className="speak-meta">{s.m}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="service-row reveal">
            <div className="service-content">
              <div className="service-index">03 / Expert Judging</div>
              <h3 className="service-title">When peers ask for your verdict, it counts.</h3>
              <p className="service-desc">Serving as a judge — at startup competitions, hackathons, research grants, or industry awards — demonstrates that your field recognizes your authority. We place you in relevant panels and provide the documentation that transforms participation into evidence.</p>
              <ul className="service-features">
                <li>Matched to panels in your exact area of expertise</li>
                <li>Official judge invitation and participation letter</li>
                <li>Criteria brief so your evaluation is substantive and documented</li>
                <li>Event prestige report included for the attorney&apos;s exhibit</li>
                <li>Remote judging options across all time zones</li>
              </ul>
            </div>
            <div className="service-visual">
              <div className="judge-visual" aria-hidden="true">
                <div className="judge-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><path d="M12 2L9.2 8.6 2 9.3l5.5 4.8L5.8 21 12 17.3l6.2 3.7-1.7-6.9L22 9.3l-7.2-.7L12 2z" /></svg></div>
                <div className="judge-list">
                  <div className="judge-item"><strong>Y Combinator Demo Day</strong> — Judge panel, SF</div>
                  <div className="judge-item"><strong>MIT Hacking Medicine</strong> — Expert evaluator</div>
                  <div className="judge-item"><strong>Webby Awards 2025</strong> — Industry jury</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section id="process" aria-labelledby="process-heading">
          <div className="process-header">
            <div className="reveal-left">
              <div className="section-label">How it works</div>
              <h2 className="section-heading" id="process-heading">From profile audit<br />to <em>approved petition.</em></h2>
            </div>
            <div className="reveal-right">
              <p className="process-note">Most clients see their first placement go live within three weeks of onboarding. The full evidence package — typically six to twelve placements — is assembled within three to five months, depending on your target visa category and timeline.</p>
            </div>
          </div>
          <div className="process-grid reveal">
            {[
              { n: 'Step 01', t: 'Profile audit & strategy call', d: "We review your background, your attorney's evidence checklist, and your timeline. We identify exactly which criteria need evidence and build a placement roadmap.", a: true },
              { n: 'Step 02', t: 'Crafting your narrative', d: 'Our editorial team develops your expert positioning — the story journalists will cover, the speaking angles that conference curators accept, the judging profile that gets you shortlisted.', a: true },
              { n: 'Step 03', t: 'Pitching & placement', d: 'We run active outreach to our media contacts, conference committees, and judging panel coordinators. You review everything before it goes public. We manage revisions and logistics end-to-end.', a: true },
              { n: 'Step 04', t: 'Evidence delivery', d: 'Every placement is packaged into a formatted evidence folder — URLs, PDFs, invitation letters, circulation data, event statistics — ready to hand directly to your immigration attorney.', a: false },
            ].map(step => (
              <div className="process-step" key={step.n}>
                <div className="process-step-num">{step.n}</div>
                <div className="process-step-title">{step.t}</div>
                <p className="process-step-desc">{step.d}</p>
                {step.a && <div className="process-step-arrow" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </section>

        {/* ─── PACKAGES ─── */}
        <section id="packages" aria-labelledby="packages-heading">
          <div className="packages-header reveal">
            <div className="section-label">Packages</div>
            <h2 className="section-heading" id="packages-heading">Built for where you are in the process.</h2>
            <p className="packages-note">All packages include attorney-ready evidence formatting. Custom engagements available for urgent timelines.</p>
          </div>
          <div className="packages-grid">
            <div className="pkg-card reveal">
              <div className="pkg-tier">Tier 01</div><div className="pkg-name">Foundation</div>
              <div className="pkg-tagline">For professionals beginning to build their public profile from scratch.</div>
              <div className="pkg-divider" />
              <ul className="pkg-features">
                <li><span className="check">✓</span> 3 media placements (Tier-2/3 outlets)</li>
                <li><span className="check">✓</span> 1 speaking invitation secured</li>
                <li><span className="check">✓</span> 1 expert judging placement</li>
                <li><span className="check">✓</span> Expert bio &amp; positioning document</li>
                <li><span className="check">✓</span> Evidence folder + attorney summary</li>
                <li className="muted"><span className="check">—</span> Tier-1 outlet access</li>
                <li className="muted"><span className="check">—</span> Priority placement queue</li>
              </ul>
              <Link href="/#cta" className="pkg-cta">Schedule a consultation</Link>
            </div>
            <div className="pkg-card featured reveal delay-1">
              <div className="pkg-featured-badge">Most chosen</div>
              <div className="pkg-tier">Tier 02</div><div className="pkg-name">Distinction</div>
              <div className="pkg-tagline">For professionals with 3–6 months before their petition filing date.</div>
              <div className="pkg-divider" />
              <ul className="pkg-features">
                <li><span className="check">✓</span> 6 media placements (Tier-1 &amp; Tier-2)</li>
                <li><span className="check">✓</span> 2 speaking invitations secured</li>
                <li><span className="check">✓</span> 2 expert judging placements</li>
                <li><span className="check">✓</span> Forbes or Bloomberg target included</li>
                <li><span className="check">✓</span> Attorney coordination calls included</li>
                <li><span className="check">✓</span> Priority placement queue</li>
                <li><span className="check">✓</span> Evidence folder + full exhibit list</li>
              </ul>
              <Link href="/#cta" className="pkg-cta">Schedule a consultation</Link>
            </div>
            <div className="pkg-card reveal delay-2">
              <div className="pkg-tier">Tier 03</div><div className="pkg-name">Pinnacle</div>
              <div className="pkg-tagline">Full-service engagement for EB-1A or high-stakes O-1 cases requiring maximum evidence weight.</div>
              <div className="pkg-divider" />
              <ul className="pkg-features">
                <li><span className="check">✓</span> 12 media placements — Tier-1 priority</li>
                <li><span className="check">✓</span> 4 speaking invitations (incl. keynote pursuit)</li>
                <li><span className="check">✓</span> 4 expert judging placements</li>
                <li><span className="check">✓</span> Dedicated account strategist</li>
                <li><span className="check">✓</span> Monthly attorney briefing calls</li>
                <li><span className="check">✓</span> RFE response support (additional evidence)</li>
                <li><span className="check">✓</span> 12-month evidence maintenance retainer</li>
              </ul>
              <Link href="/#cta" className="pkg-cta">Schedule a consultation</Link>
            </div>
          </div>
        </section>

        {/* ─── TEAM ─── */}
        <section id="team" aria-labelledby="team-heading">
          <div className="team-intro">
            <div className="reveal-left">
              <div className="section-label">Who builds your profile</div>
              <h2 className="section-heading" id="team-heading">Journalists, editors,<br />and <em>conference insiders.</em></h2>
            </div>
            <p className="reveal" style={{ color: 'var(--text-2)', lineHeight: 1.65, fontSize: '0.95rem', maxWidth: '38ch' }}>
              Our team comes from the outlets and stages your petition needs to reference. We don&apos;t outsource to generalists — every placement is handled by someone who has sat on the other side of the pitch.
            </p>
          </div>
          <div className="team-grid">
            {[
              { name: 'Marcus Reid', title: 'Head of Strategy', bio: 'Former Forbes contributing editor with 11 years placing expert profiles across tech, science, and finance. Led EB-1 evidence packages for 300+ petitions.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=640&fit=crop&crop=top', d: '' },
              { name: 'Sophia Crane', title: 'Editorial Director', bio: 'Built the speaker programs at SaaStr and Web Summit Europe. Knows exactly how curators shortlist and what makes a bio land — or get archived.', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=640&fit=crop&crop=top', d: ' delay-1' },
              { name: 'Daniel Osei', title: 'Partnerships Lead', bio: 'Manages our network of 340+ outlet editors and 120+ immigration attorneys. Coordinates evidence packaging so your lawyer can file without gaps.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=640&fit=crop&crop=top', d: ' delay-2' },
            ].map(m => (
              <article className={`team-card reveal${m.d}`} key={m.name}>
                <img className="team-card-photo" src={m.img} alt={`${m.name} — ${m.title}`} loading="lazy" />
                <div className="team-card-body">
                  <div className="team-card-name">{m.name}</div>
                  <div className="team-card-title">{m.title}</div>
                  <p className="team-card-bio">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section id="testimonials" aria-labelledby="testi-heading">
          <div className="testimonials-header">
            <div className="reveal-left">
              <div className="section-label">Client outcomes</div>
              <h2 className="section-heading" id="testi-heading">From profile to<br /><em>permanent resident.</em></h2>
            </div>
          </div>
          <div className="testimonials-grid">
            {[
              { q: '"My attorney had submitted two petitions before working with Talentrelo. Both were denied. After six months — Forbes, a Web Summit keynote, two judging credits — my EB-1A was approved in four weeks."', name: 'Andrei M.', role: 'Senior ML Engineer · Romania', visa: 'EB-1A', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=88&h=88&fit=crop&crop=face', d: '' },
              { q: '"Three hackathon panels and a grant review later, my attorney said the petition was one of the strongest packages she had ever submitted."', name: 'Priya V.', role: 'Biotech Researcher · India', visa: 'O-1A', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=88&h=88&fit=crop&crop=face', d: ' delay-1' },
              { q: '"What made Talentrelo different was how they coordinated everything with my lawyer and structured the evidence to map directly to CFR criteria."', name: 'Diego F.', role: 'Creative Director · Brazil', visa: 'O-1B', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=88&h=88&fit=crop&crop=face', d: ' delay-2' },
            ].map(t => (
              <article className={`testi-card reveal${t.d}`} key={t.name}>
                <div className="testi-quote">{t.q}</div>
                <div className="testi-author">
                  <div className="testi-avatar"><img src={t.img} alt={t.name} loading="lazy" /></div>
                  <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
                  <div className="testi-visa">{t.visa}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FaqSection />

        {/* ─── CTA ─── */}
        <div id="cta" role="region" aria-labelledby="cta-heading">
          <div className="reveal-left">
            <h2 className="cta-heading" id="cta-heading">Your profile audit<br />is free.<br /><em>Your petition window</em><br />is not.</h2>
            <p className="cta-sub">Book a 30-minute call with a Talentrelo strategist. We&apos;ll review your background, identify the evidence gaps in your current profile, and tell you exactly what we&apos;d build — before you commit to anything.</p>
          </div>
          <div className="cta-right reveal-right">
            <form className="cta-form" action="#" method="POST" aria-label="Book a consultation">
              <input className="cta-input" type="text" name="name" placeholder="Full name" required autoComplete="name" />
              <input className="cta-input" type="email" name="email" placeholder="Work email" required autoComplete="email" />
              <select className="cta-select" name="visa" required defaultValue="">
                <option value="" disabled>Target visa category</option>
                <option value="eb1a">EB-1A — Extraordinary ability</option>
                <option value="eb1b">EB-1B — Outstanding researcher / professor</option>
                <option value="o1a">O-1A — Sciences, business, athletics</option>
                <option value="o1b">O-1B — Arts, film, television</option>
                <option value="niw">EB-2 NIW — National interest waiver</option>
                <option value="unsure">Not sure yet</option>
              </select>
              <select className="cta-select" name="timeline" required defaultValue="">
                <option value="" disabled>Your filing timeline</option>
                <option value="urgent">Under 3 months</option>
                <option value="medium">3–6 months</option>
                <option value="planning">6–12 months</option>
                <option value="early">Just planning ahead</option>
              </select>
              <button type="submit" className="cta-submit">Book my free profile audit</button>
            </form>
            <div className="cta-trust">No commitment required. Response within one business day.</div>
          </div>
        </div>

        {/* ─── BLOG PREVIEW ─── */}
        <section id="blog-preview" aria-labelledby="blog-preview-heading" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-2)' }}>
          <div className="blog-preview-header">
            <div className="reveal-left">
              <div className="section-label">The Record</div>
              <h2 className="section-heading" id="blog-preview-heading">Strategy guides for<br /><em>extraordinary cases.</em></h2>
            </div>
            <Link href="/blog/" className="btn-primary reveal" style={{ alignSelf: 'flex-end', whiteSpace: 'nowrap' }}>
              All articles
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" /></svg>
            </Link>
          </div>
          <div className="blog-preview-cards">
            {previewArticles.map((a, i) => (
              <Link href={`/blog/${a.slug}`} className={`blog-preview-card reveal${i > 0 ? ` delay-${i}` : ''}`} key={a.slug}>
                <span className="blog-preview-card-cat">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span>{a.readTime} min read</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <div className="nav-logo">Talentrelo<span>.</span></div>
          <p>PR strategy for EB-1 and O-1 visa applicants. Building the evidence record that immigration attorneys trust.</p>
        </div>
        <div>
          <div className="footer-col-heading">Services</div>
          <ul className="footer-links">
            <li><Link href="/#services">Media publications</Link></li>
            <li><Link href="/#services">Conference speaking</Link></li>
            <li><Link href="/#services">Expert judging</Link></li>
            <li><Link href="/#packages">Packages</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-heading">Company</div>
          <ul className="footer-links">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">How it works</Link></li>
            <li><Link href="#">Attorney partners</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-heading">Visa resources</div>
          <ul className="footer-links">
            <li><Link href="#">EB-1A guide</Link></li>
            <li><Link href="#">O-1 criteria explained</Link></li>
            <li><Link href="#">Evidence checklist</Link></li>
            <li><Link href="#">RFE response guide</Link></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>&copy; 2026 Talentrelo PR. All rights reserved. Not a law firm.</p>
        <ul className="footer-legal">
          <li><Link href="#">Privacy policy</Link></li>
          <li><Link href="#">Terms of service</Link></li>
          <li><Link href="#">Legal disclaimer</Link></li>
        </ul>
      </div>

      <PageScripts />
    </>
  )
}
