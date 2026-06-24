'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/content';
import { programs } from '@/data/programs';
import { announcements } from '@/data/announcements';
import { documents } from '@/data/documents';
import { staff } from '@/data/staff';
import { events } from '@/data/events';

type ResultItem = { title: string; type: string; snippet: string; href: string };

const allItems: ResultItem[] = [
  ...programs.map((x) => ({ title: x.name, type: 'Program', snippet: `${x.summary} — ${x.provider} · ${x.credential}`, href: `/degrees-programs/${x.slug}` })),
  ...announcements.map((x) => ({ title: x.title, type: 'Announcement', snippet: `${x.type} · ${x.date} — ${x.summary}`, href: `/announcements/${x.slug}` })),
  ...documents.map((x) => ({ title: x.title, type: 'Document', snippet: `${x.category} · ${x.audience} — ${x.description}`, href: '/documents' })),
  ...staff.map((x) => ({ title: x.name, type: 'Staff', snippet: `${x.role} · ${x.department} — ${x.email}`, href: '/staff-directory' })),
  ...events.map((x) => ({ title: x.title, type: 'Event', snippet: `${x.month} ${x.day}, ${x.year} · ${x.location} — ${x.summary}`, href: '/events' })),
  { title: 'About RHEC', type: 'Page', snippet: 'Mission, vision, member institutions, facilities, and directions.', href: '/about' },
  { title: 'Student Services', type: 'Page', snippet: 'Success center, library, computer lab, parking, and getting started guide.', href: '/student-services' },
  { title: 'Testing Center', type: 'Page', snippet: 'Placement testing, certification exams, proctored testing, FAQs.', href: '/testing-center' },
  { title: 'Rent a Space', type: 'Page', snippet: 'Classrooms, computer labs, conference rooms, event parking validation.', href: '/rent-a-space' },
  { title: 'RHEC Foundation', type: 'Page', snippet: 'Scholarships, giving opportunities, and student impact.', href: '/foundation' },
];

const typeColors: Record<string, string> = {
  Program: 'var(--green)',
  Announcement: 'var(--bronze)',
  Document: '#2a3d8f',
  Staff: '#7a4a8c',
  Event: '#a04040',
  Page: 'var(--deep)',
};

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const results = useMemo(() => {
    if (!query && !typeFilter) return [];
    return allItems.filter((item) => {
      const haystack = `${item.title} ${item.snippet} ${item.type}`.toLowerCase();
      return (
        (!query || haystack.includes(query.toLowerCase())) &&
        (!typeFilter || item.type === typeFilter)
      );
    });
  }, [query, typeFilter]);

  return (
    <>
      <PageHero
        title="Search RHEC"
        description="Find programs, announcements, staff, documents, and events across the RHEC website."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Search' }]}
      />

      <section>
        <div className="wrap">
          <div className="filter-bar" style={{ background: 'var(--mint)' }}>
            <input
              type="search"
              aria-label="Search RHEC"
              placeholder="What are you looking for?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              style={{ fontSize: '1.05rem' }}
            />
            <select aria-label="Filter by result type" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="">All types</option>
              {['Program', 'Announcement', 'Document', 'Staff', 'Event', 'Page'].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          {query && (
            <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 20 }}>
              <strong style={{ color: 'var(--deep)' }}>{results.length}</strong>{' '}
              result{results.length !== 1 ? 's' : ''} for <em>"{query}"</em>
            </p>
          )}

          {!query && !typeFilter && (
            <div className="info-box" style={{ maxWidth: 600 }}>
              <h3>💡 Try searching for:</h3>
              <p>Programs by subject (nursing, cybersecurity), services (library, parking), staff names, event types, or document titles.</p>
            </div>
          )}

          {(query || typeFilter) && results.length === 0 && (
            <div className="empty-state">
              <strong>No results for "{query}".</strong>
              Try different keywords, or{' '}
              <Link className="text-link" href="/contact">contact us for help</Link>.
            </div>
          )}

          <div style={{ marginTop: 8 }}>
            {results.map((r, i) => (
              <div className="search-result" key={i}>
                <div style={{ flex: 1 }}>
                  <div
                    className="result-type"
                    style={{ color: typeColors[r.type] ?? 'var(--bronze)' }}
                  >
                    {r.type}
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.snippet}</p>
                </div>
                <Link className="btn btn-sm btn-outline" href={r.href} style={{ flexShrink: 0 }}>
                  View →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
