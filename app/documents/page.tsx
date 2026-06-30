'use client';
import { useMemo, useState } from 'react';
import { PageHero, DocumentCard } from '@/components/content';
import { documents } from '@/data/documents';

const categories = ['Campus Services', 'Facilities', 'Testing', 'Student Services', 'Foundation', 'Workforce', 'Accessibility'];
const audiences = ['Students', 'Community', 'All'];
const types = ['PDF'];

export default function DocumentsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [audience, setAudience] = useState('');

  const results = useMemo(() => {
    return documents.filter((d) => {
      const haystack = `${d.title} ${d.description} ${d.category}`.toLowerCase();
      return (
        (!query || haystack.includes(query.toLowerCase())) &&
        (!category || d.category === category) &&
        (!audience || d.audience === audience)
      );
    });
  }, [query, category, audience]);

  return (
    <>
      <PageHero
        title="Document Library"
        description="Find campus guides, handbooks, forms, and resources — all in one place. Documents are updated regularly to reflect the most current RHEC policies and services."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Document Library' }]}
        imageSrc="/images/vcu-nrsa-student.jpg"
      />

      <section>
        <div className="wrap">
          <div className="filter-bar">
            <input
              type="search"
              aria-label="Search documents by title or description"
              placeholder="Search documents…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select aria-label="Filter by category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All categories</option>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select aria-label="Filter by audience" value={audience} onChange={(e) => setAudience(e.target.value)}>
              <option value="">All audiences</option>
              {audiences.map((a) => <option key={a}>{a}</option>)}
            </select>
          </div>

          <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 24 }}>
            <strong style={{ color: 'var(--deep)' }}>{results.length}</strong> documents
            {' '}<span style={{ fontSize: '.82rem' }}>· Links open demo placeholders</span>
          </p>

          <div className="doc-grid">
            {results.length > 0 ? (
              results.map((d) => <DocumentCard doc={d} key={d.id} />)
            ) : (
              <div className="empty-state">
                <strong>No documents match that search.</strong>
                Try different keywords or clear a filter.
              </div>
            )}
          </div>

          <div className="info-box" style={{ marginTop: 32 }}>
            <h3>💬 Can't find what you're looking for?</h3>
            <p>
              Contact the RHEC Student Success Center at (540) 767-6012 or visit the{' '}
              <a className="text-link" href="/contact">Contact page</a> for additional help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
