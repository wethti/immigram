import Link from 'next/link'

export default function Footer() {
  return (
    <>
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
    </>
  )
}
