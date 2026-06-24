import Link from 'next/link';
import { PageHero } from '@/components/content';

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        title="Accessibility Statement"
        description="RHEC is committed to making our website and digital content accessible to everyone, including individuals with disabilities."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Accessibility Statement' }]}
      />

      <article style={{ padding: '72px 0' }}>
        <div className="wrap" style={{ maxWidth: 860 }}>

          <section aria-labelledby="commitment-heading">
            <h2 id="commitment-heading" style={{ color: 'var(--deep)', fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', letterSpacing: '-.04em', marginBottom: 16 }}>
              Our commitment
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
              The Roanoke Higher Education Center (RHEC) is committed to ensuring digital accessibility
              for people with disabilities. We continually work to improve the user experience for all
              visitors and apply relevant accessibility standards to our website and digital content.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              This design demo is built with WCAG 2.1 Level AA as a guiding standard. The patterns
              demonstrated here — semantic HTML, visible focus indicators, labeled forms, logical
              heading structure, and descriptive link text — represent our intended approach for the
              production website.
            </p>
          </section>

          <section aria-labelledby="measures-heading" style={{ marginTop: 40 }}>
            <h2 id="measures-heading" style={{ color: 'var(--deep)', fontSize: '1.6rem', letterSpacing: '-.04em', marginBottom: 16 }}>
              Accessibility measures in this demo
            </h2>
            <ul className="checklist">
              {[
                'Semantic HTML5 elements for meaningful page structure (header, nav, main, section, article, footer)',
                'Logical heading hierarchy (h1 → h2 → h3) on every page',
                'Skip-to-content link at the top of every page for keyboard users',
                'Visible focus indicators on all interactive elements',
                'All form inputs have associated labels',
                'Color is not used as the only means of conveying information',
                'Accessible emergency alert banner using ARIA live regions',
                'Buttons and links use descriptive, action-oriented text',
                'Image placeholders include meaningful alt text descriptions',
                'Interactive accordions use ARIA expanded states and keyboard support',
                'Sufficient color contrast ratios for all text-background combinations',
                'Responsive design that works across desktop, tablet, and mobile',
              ].map((m) => <li key={m}>{m}</li>)}
            </ul>
          </section>

          <section aria-labelledby="standards-heading" style={{ marginTop: 40 }}>
            <h2 id="standards-heading" style={{ color: 'var(--deep)', fontSize: '1.6rem', letterSpacing: '-.04em', marginBottom: 16 }}>
              Standards and guidelines
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              This demo aims to conform to the{' '}
              <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>.
              These guidelines explain how to make web content more accessible to people with
              disabilities, including those with visual, auditory, cognitive, and motor impairments.
            </p>
          </section>

          <section id="privacy" aria-labelledby="privacy-heading" style={{ marginTop: 40, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
            <h2 id="privacy-heading" style={{ color: 'var(--deep)', fontSize: '1.6rem', letterSpacing: '-.04em', marginBottom: 16 }}>
              Privacy note (demo)
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              This is a design demo. No real user data is collected, stored, or transmitted.
              All forms are front-end-only placeholders. In production, a full privacy policy
              covering data collection, cookies, and third-party services would be published here.
            </p>
          </section>

          <section aria-labelledby="contact-heading" style={{ marginTop: 40 }}>
            <h2 id="contact-heading" style={{ color: 'var(--deep)', fontSize: '1.6rem', letterSpacing: '-.04em', marginBottom: 16 }}>
              Contact us about accessibility
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
              If you experience any accessibility barriers on our website or need assistance accessing
              any information, please contact RHEC. We are committed to providing an equal experience
              for all visitors.
            </p>
            <div className="info-box">
              <h3>📞 Accessibility contact</h3>
              <p>
                RHEC Student Success Center<br />
                108 North Jefferson Street, Roanoke, VA 24016<br />
                <a className="text-link" href="tel:5407676000">(540) 767-6000</a>
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <Link className="btn" href="/contact">Contact RHEC →</Link>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
