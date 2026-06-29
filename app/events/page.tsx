'use client';
import { useMemo, useState } from 'react';
import { PageHero, EventCard } from '@/components/content';
import { events } from '@/data/events';

const months = ['March 2026', 'April 2026', 'May 2026'];
const types = ['Career', 'Campus', 'Student Support', 'Workforce', 'Program Info', 'Foundation', 'Enrollment'];

export default function EventsPage() {
  const [month, setMonth] = useState('');
  const [type, setType] = useState('');

  const results = useMemo(() => {
    return events.filter((e) => {
      const eventMonth = `${e.month} ${e.year}`;
      return (
        (!month || eventMonth === month) &&
        (!type || e.type === type)
      );
    });
  }, [month, type]);

  return (
    <>
      <PageHero
        title="Events Calendar"
        description="Explore campus programs, information sessions, workshops, career fairs, and community events at RHEC."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Events' }]}
        imageSrc="/images/open-house.jpg"
      />

      <section>
        <div className="wrap">
          <div className="filter-bar">
            <select aria-label="Filter by month" value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="">All upcoming months</option>
              {months.map((m) => <option key={m}>{m}</option>)}
            </select>
            <select aria-label="Filter by event type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All event types</option>
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>

          <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 28 }}>
            <strong style={{ color: 'var(--deep)' }}>{results.length}</strong> upcoming events
            {' '}<span style={{ fontSize: '.82rem' }}>· Display only — no registration or ticketing</span>
          </p>

          {results.length > 0 ? (
            <div className="event-list" style={{ maxWidth: 760 }}>
              {results.map((e) => (
                <article key={e.id} className="event-card" style={{ flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div className="event-date">
                      <b>{e.day}</b>
                      <span>{e.month}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="event-type">{e.type}</div>
                      <h3 style={{ marginTop: 2 }}>{e.title}</h3>
                      <p style={{ margin: '3px 0 6px', fontSize: '.85rem', color: 'var(--muted)' }}>
                        🕐 {e.time} &nbsp;·&nbsp; 📍 {e.location}
                      </p>
                      <p style={{ color: 'var(--muted)', fontSize: '.9rem', margin: 0 }}>{e.summary}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <strong>No events match those filters.</strong>
              Try clearing a filter or check back for new events.
            </div>
          )}

          <div className="info-box" style={{ marginTop: 36, maxWidth: 760 }}>
            <h3>📢 Want to host an event at RHEC?</h3>
            <p>
              Our facilities team can help you plan and host your next gathering.{' '}
              <a className="text-link" href="/rent-a-space">Learn about renting a space →</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
