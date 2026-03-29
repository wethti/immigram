'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Do you guarantee visa approval?',
    a: 'No. Visa decisions are made by USCIS and we are not a law firm. What we guarantee is the quality, authenticity, and attorney-readiness of the evidence we build. We work closely with your immigration attorney to ensure every placement satisfies the specific evidentiary criteria your petition requires.',
  },
  {
    q: 'Are the media placements real editorial coverage?',
    a: "Yes, always. Every article we secure is genuine editorial content published in real outlets with real editorial standards. We do not use sponsored content, paid advertorials, or content farms — USCIS is familiar with these and they carry no evidentiary weight. Our relationships are with working journalists and editors who publish because your story is genuinely newsworthy.",
  },
  {
    q: 'How long does the process take?',
    a: 'Most clients see their first placement within three weeks of onboarding. A full evidence package — typically needed before your attorney files — takes three to five months for the Foundation tier and four to six months for Distinction or Pinnacle. If you have a tighter timeline, discuss it during your profile audit and we\'ll advise on what\'s achievable.',
  },
  {
    q: 'Do I need to already have an immigration attorney?',
    a: 'Not to start with us, but you will need one before filing. We can refer you to attorneys from our network of 120+ firms who regularly work with Talentrelo clients — they\'re familiar with our evidence format and often expedite their review as a result. Many clients begin building their profile before retaining an attorney.',
  },
  {
    q: 'Which visa categories do you support?',
    a: 'Our primary focus is EB-1A (extraordinary ability), EB-1B (outstanding researcher or professor), O-1A (extraordinary ability in sciences, education, business, or athletics), and O-1B (extraordinary achievement in arts, motion picture, or television). Many of the same placements also strengthen EB-2 NIW cases. If you\'re unsure which category applies to you, our profile audit will clarify this.',
  },
  {
    q: 'Can you help if my petition was already denied?',
    a: 'Yes. Denial or an RFE (Request for Evidence) is often a signal that the evidentiary record is incomplete — not that the applicant is unqualified. We frequently work with clients rebuilding their profile after a denial. Share the denial notice or RFE during your audit call and we\'ll identify exactly which placements will address the specific weaknesses USCIS cited.',
  },
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" aria-labelledby="faq-heading">
      <div className="faq-left reveal-left">
        <div className="section-label">Common questions</div>
        <h2 className="section-heading" id="faq-heading">
          Everything you need<br />to know before<br /><em>we begin.</em>
        </h2>
        <p className="faq-left-desc">
          Can&apos;t find what you&apos;re looking for? Book a free 30-minute profile audit and our strategists will answer your specific questions.
        </p>
      </div>

      <div className="faq-list reveal-right" role="list">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i
          return (
            <div key={i} className={`faq-item${isOpen ? ' open' : ''}`} role="listitem">
              <button
                className="faq-q"
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <span className="faq-q-text">{faq.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 2v8M2 6h8" />
                  </svg>
                </span>
              </button>
              <div className="faq-a" role="region">
                <div className="faq-a-inner">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
