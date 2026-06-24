'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/content';

const spaces = [
  {
    id: 'classrooms',
    icon: '🏫',
    name: 'Classrooms',
    desc: 'Flexible learning environments for training, workshops, and instructional events.',
    capacity: 'Up to 30 seats',
    amenities: 'Whiteboard, projector, podium, flexible seating',
    available: 'Mon–Sat, by reservation',
    image: '/images/classrooms.jpg',
  },
  {
    id: 'computer-labs',
    icon: '💻',
    name: 'Computer Labs',
    desc: 'Technology-equipped labs for testing, training, and technology-focused instruction.',
    capacity: 'Up to 24 workstations',
    amenities: 'Windows PCs, dual monitors, high-speed internet, printing',
    available: 'Mon–Sat, by reservation',
    image: '/images/computer-labs.jpg',
  },
  {
    id: 'conference-rooms',
    icon: '🤝',
    name: 'Conference Rooms',
    desc: 'Professional spaces for board meetings, team sessions, video calls, and presentations.',
    capacity: '8–24 people',
    amenities: 'Conference table, display screen, video conferencing capability',
    available: 'Mon–Fri, by reservation',
    image: '/images/conference-rooms.jpg',
  },
  {
    id: 'equipment',
    icon: '📽️',
    name: 'Equipment & Services',
    desc: 'Support services and audio-visual equipment to complement your event.',
    capacity: 'Varies by request',
    amenities: 'Projectors, microphones, extension cords, easels, whiteboards',
    available: 'By arrangement',
  },
  {
    id: 'parking',
    icon: '🅿️',
    name: 'Event Parking Validation',
    desc: 'Parking validation for event guests using RHEC surface lots during your event.',
    capacity: 'Contact for availability',
    amenities: 'Lot A and B validation available for qualifying events',
    available: 'By arrangement',
  },
];

export default function RentASpacePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        title="Rent a Space"
        description="Bring your next meeting, training, conference, or community gathering to RHEC. Our flexible spaces are available at competitive rates for businesses, nonprofits, and community groups."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Rent a Space' }]}
        imageSrc="/images/rent-a-space-header.webp"
      />

      {/* Room cards */}
      <section>
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Available spaces</div>
              <h2>Find the right fit</h2>
            </div>
            <p>All spaces include Wi-Fi, building access, and basic support from our facilities team.</p>
          </div>
          <div className="program-grid">
            {spaces.map((s) => (
              <article className="room-card" key={s.id} id={s.id}>
                <div className={`room-thumb${s.image ? ' has-image' : ''}`} style={s.image ? { backgroundImage: `url(${s.image})` } : undefined} aria-hidden>{s.icon}</div>
                <div className="room-body">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <div className="room-detail">
                    <span>👥 {s.capacity}</span>
                    <span>🛠️ {s.amenities}</span>
                    <span>📅 {s.available}</span>
                  </div>
                  <div style={{ marginTop: 14 }}>
                    <a href="#inquiry" className="btn btn-sm btn-outline">Inquire about this space →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry" style={{ background: 'var(--sand)', padding: '80px 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <div className="eyebrow">Ready to book?</div>
            <h2 style={{ color: 'var(--deep)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-.05em', margin: '10px 0 18px' }}>
              Tell us about your event.
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
              Fill out the form and our facilities team will get back to you within one business day
              with availability, pricing, and next steps.
            </p>
            <div className="info-box" style={{ marginTop: 24 }}>
              <h3>📞 Prefer to call?</h3>
              <p>Daniel Brooks, Facilities &amp; Events Manager<br />(540) 767-6023 · daniel.brooks@rhec.edu</p>
            </div>
          </div>

          <div className="form-section">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 24 }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>✓</div>
                <h3 style={{ color: 'var(--deep)' }}>Inquiry previewed</h3>
                <p style={{ color: 'var(--muted)' }}>This is a demo form — no data was submitted. In production, a confirmation would be sent to your email.</p>
                <button className="btn btn-outline btn-sm" style={{ marginTop: 12 }} onClick={() => setSubmitted(false)}>Reset form</button>
              </div>
            ) : (
              <>
                <p className="form-notice">This is a design-demo form and does not submit your information.</p>
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="rent-name">Your name</label>
                      <input id="rent-name" type="text" required autoComplete="name" />
                    </div>
                    <div className="field">
                      <label htmlFor="rent-org">Organization</label>
                      <input id="rent-org" type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="rent-email">Email address</label>
                      <input id="rent-email" type="email" required autoComplete="email" />
                    </div>
                    <div className="field">
                      <label htmlFor="rent-phone">Phone number</label>
                      <input id="rent-phone" type="tel" autoComplete="tel" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="rent-space">Space of interest</label>
                    <select id="rent-space">
                      <option value="">Select a space type…</option>
                      {spaces.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="rent-date">Preferred date(s)</label>
                    <input id="rent-date" type="text" placeholder="e.g. March 15, 2026 or flexible" />
                  </div>
                  <div className="field">
                    <label htmlFor="rent-details">Event description</label>
                    <textarea id="rent-details" rows={4} placeholder="Tell us about your event: purpose, expected attendance, AV needs, etc." />
                  </div>
                  <button className="btn" type="submit">Submit inquiry →</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
