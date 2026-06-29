'use client';
import { useState } from 'react';
import { PageHero } from '@/components/content';
import { staff } from '@/data/staff';

const topics = [
  'Enrollment & admissions',
  'Student services',
  'Testing Center',
  'Facility rental inquiry',
  'Workforce training',
  'Foundation & scholarships',
  'General question',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        title="Contact RHEC"
        description="Our team is here to help. Reach out with questions about programs, services, facility rental, or anything else — we'll point you in the right direction."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        imageSrc="/images/rhec-main-header.png"
      />

      <section>
        <div className="wrap two-col-contact">
          <div>
            <div className="eyebrow">Reach us</div>
            <h2 style={{ color: 'var(--deep)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', letterSpacing: '-.05em', margin: '10px 0 22px' }}>
              We're here to help.
            </h2>

            <div className="info-box">
              <h3>📍 Visit us</h3>
              <p>108 North Jefferson Street<br />Roanoke, VA 24016</p>
            </div>
            <div className="info-box">
              <h3>📞 Call us</h3>
              <p><a className="text-link" href="tel:5407676000">(540) 767-6000</a><br />Monday–Friday, 8:00 a.m.–5:00 p.m.</p>
            </div>
            <div className="info-box">
              <h3>🕐 Campus hours</h3>
              <p>
                Monday–Thursday: 7:30 a.m.–9:00 p.m.<br />
                Friday: 8:00 a.m.–6:00 p.m.<br />
                Saturday: 9:00 a.m.–2:00 p.m.
              </p>
            </div>

            <div style={{ marginTop: 28 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Key contacts</div>
              {staff.slice(0, 4).map((s) => (
                <div key={s.id} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--line)' }}>
                  <div style={{ fontSize: '.76rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--bronze)', marginBottom: 2 }}>{s.department}</div>
                  <div style={{ fontWeight: 700, color: 'var(--deep)' }}>{s.name}</div>
                  <div style={{ fontSize: '.85rem', color: 'var(--muted)' }}>{s.role}</div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
                    <a className="text-link" href={`tel:${s.phone.replace(/\D/g,'')}`} style={{ fontSize: '.84rem' }}>{s.phone}</a>
                    <a className="text-link" href={`mailto:${s.email}`} style={{ fontSize: '.84rem' }}>{s.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="form-section">
              <div className="eyebrow" style={{ marginBottom: 8 }}>General inquiry</div>
              <h3 style={{ color: 'var(--deep)', marginTop: 4, marginBottom: 16 }}>Send us a message</h3>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '28px 0' }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>✓</div>
                  <h4 style={{ color: 'var(--deep)', margin: '0 0 8px' }}>Message previewed</h4>
                  <p style={{ color: 'var(--muted)' }}>This is a demo form — no data was submitted. In production, RHEC staff would receive your message and respond within one business day.</p>
                  <button className="btn btn-outline btn-sm" style={{ marginTop: 16 }} onClick={() => setSubmitted(false)}>Send another</button>
                </div>
              ) : (
                <>
                  <p className="form-notice">This is a design-demo form and does not submit your information.</p>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div className="form-row">
                      <div className="field">
                        <label htmlFor="c-name">Full name</label>
                        <input id="c-name" type="text" required autoComplete="name" />
                      </div>
                      <div className="field">
                        <label htmlFor="c-email">Email address</label>
                        <input id="c-email" type="email" required autoComplete="email" />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="c-phone">Phone number (optional)</label>
                      <input id="c-phone" type="tel" autoComplete="tel" />
                    </div>
                    <div className="field">
                      <label htmlFor="c-topic">Topic</label>
                      <select id="c-topic">
                        <option value="">Select a topic…</option>
                        {topics.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="c-message">Message</label>
                      <textarea id="c-message" rows={5} placeholder="How can we help?" required />
                    </div>
                    <button className="btn" type="submit">Send message →</button>
                  </form>
                </>
              )}
            </div>

            <div id="careers" className="info-box" style={{ marginTop: 20 }}>
              <h3>💼 Careers at RHEC</h3>
              <p>Interested in joining the RHEC team? View current openings and submit your application through our HR portal.</p>
              <a className="btn btn-sm btn-outline" href="#careers-external-placeholder" style={{ marginTop: 10, display: 'inline-flex' }}>
                View open positions ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
