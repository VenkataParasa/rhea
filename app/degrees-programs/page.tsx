'use client';
import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageHero, ProgramCard } from '@/components/content';
import { programs } from '@/data/programs';

const subjects = ['Business', 'Education', 'Health Sciences', 'Social Sciences', 'Technology', 'Workforce'];
const formats = ['In-person', 'Hybrid', 'Online'];
const credentials = ["Associate Degree", "Bachelor's Degree", "Certificate", "Workforce Credential"];

function ProgramsContent() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('subject') ?? '';

  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState(initialSubject);
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
          {subject && <> in <strong style={{ color: 'var(--deep)' }}>{subject}</strong></>}
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
  );
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Degrees & Programs"
        description="Find a program that fits your goals, schedule, and next step. Browse 30+ degrees, certificates, and workforce credentials from our member institutions."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Degrees & Programs' }]}
        imageSrc="https://i0.wp.com/www.education.edu/wp-content/uploads/2024/12/CCMA-1.jpg?fit=1000%2C600&ssl=1"
      />
      <Suspense fallback={<div className="wrap" style={{ padding: '40px 0', color: 'var(--muted)' }}>Loading programs…</div>}>
        <ProgramsContent />
      </Suspense>
    </>
  );
}
