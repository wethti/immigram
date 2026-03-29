'use client'
import { useEffect } from 'react'

export default function PageScripts() {
  useEffect(() => {
    // Intersection observer: reveal animations
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .hero-label, .hero-heading, .hero-sub, .hero-actions, .hero-right, .hero-scroll')
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          revealObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    revealEls.forEach(el => revealObs.observe(el))

    // Counter animation
    const counters = document.querySelectorAll<HTMLElement>('.counter')
    const countObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target as HTMLElement
        const target = parseInt(el.dataset.target || '0', 10)
        const duration = 1600
        const start = performance.now()
        const animate = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          el.textContent = Math.round(eased * target).toLocaleString()
          if (t < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
        countObs.unobserve(el)
      })
    }, { threshold: 0.5 })
    counters.forEach(c => countObs.observe(c))

    // Bar chart animation
    const bars = document.querySelectorAll<HTMLElement>('.bento-bar-fill')
    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target as HTMLElement
        el.style.width = (el.dataset.width || '0') + '%'
        barObs.unobserve(el)
      })
    }, { threshold: 0.5 })
    bars.forEach(b => barObs.observe(b))

    // Bento card spotlight
    document.querySelectorAll<HTMLElement>('.bento-card').forEach(card => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        card.style.background = `radial-gradient(circle at ${x}% ${y}%, #1e1b18, var(--bg-2) 60%)`
      }
      const onLeave = () => { card.style.background = '' }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
    })

    return () => {
      revealObs.disconnect()
      countObs.disconnect()
      barObs.disconnect()
    }
  }, [])

  return null
}
