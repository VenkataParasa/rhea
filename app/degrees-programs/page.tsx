'use client';
import { useMemo, useState } from 'react';
import { PageHero, ProgramCard } from '@/components/content';
import { programs } from '@/data/programs';

const subjects = ['Business', 'Education', 'Health Sciences', 'Social Sciences', 'Technology', 'Workforce'];
const formats = ['In-person', 'Hybrid', 'Online'];
const credentials = ["Associate Degree", "Bachelor's Degree", "Certificate", "Workforce Credential"];

export default function ProgramsPage() {
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState('');
  const [format, setFormat] = useState('');
  const [credential, setCredential] = useState('');
  const [sort, setSort] = useState('featured');

  const results = useMemo(() => {
    let list = programs.filter((p) => {
      const haystack = Object.values(p).join(' ').toLowerCase();
      return (
        (!query || haystack.includes(query.toLowerCase())) &&
        (!subject || p.subject === subject) &&
        (!format || p.format === format) &&
        (!credential || p.credential === credential)
      );
    });
    if (sort === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return list;
  }, [query, subject, format, credential, sort]);

  return (
    <>
      <PageHero
        title="Degrees & Programs"
        description="Find a program that fits your goals, schedule, and next step. Browse 30+ degrees, certificates, and workforce credentials from our member institutions."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Degrees & Programs' }]}
      />

      <section>
        <div className="wrap">
          <div className="filter-bar">
            <input
              type="search"
              aria-label="Search programs, providers, or credentials"
              placeholder="Search programs, providers, or careers…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select aria-label="Filter by subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">All subjects</option>
              {subjects.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select aria-label="Filter by format" value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="">All formats</option>
              {formats.map((f) => <option key={f}>{f}</option>)}
            </select>
            <select aria-label="Filter by credential" value={credential} onChange={(e) => setCredential(e.target.value)}>
              <option value="">All credentials</option>
              {credentials.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select aria-label="Sort results" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Sort: Featured first</option>
              <option value="az">Sort: A–Z</option>
            </select>
          </div>

          <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 20 }}>
            <strong style={{ color: 'var(--deep)' }}>{results.length}</strong> programs found
          </p>

          <div className="program-grid">
            {results.length > 0 ? (
              results.map((p) => <ProgramCard program={p} key={p.slug} />)
            ) : (
              <div className="empty-state">
                <strong>No programs match those filters.</strong>
                Try different keywords, or clear a filter to broaden your search.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
