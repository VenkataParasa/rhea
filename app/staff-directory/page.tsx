'use client';
import { useMemo, useState } from 'react';
import { PageHero, StaffCard } from '@/components/content';
import { staff } from '@/data/staff';

const departments = ['Administration', 'Student Services', 'Operations', 'Testing Center', 'Workforce Training', 'Technology Services', 'RHEC Foundation', 'RHEC Library'];

export default function StaffDirectoryPage() {
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('');

  const results = useMemo(() => {
    return staff.filter((s) => {
      const haystack = `${s.name} ${s.role} ${s.department}`.toLowerCase();
      return (
        (!query || haystack.includes(query.toLowerCase())) &&
        (!dept || s.department === dept)
      );
    });
  }, [query, dept]);

  return (
    <>
      <PageHero
        title="Staff Directory"
        description="Find the people and departments that can help you navigate RHEC — from admissions support to facility reservations."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Staff Directory' }]}
      />

      <section>
        <div className="wrap">
          <div className="filter-bar">
            <input
              type="search"
              aria-label="Search staff by name or role"
              placeholder="Search by name or role…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select aria-label="Filter by department" value={dept} onChange={(e) => setDept(e.target.value)}>
              <option value="">All departments</option>
              {departments.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>

          <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 24 }}>
            <strong style={{ color: 'var(--deep)' }}>{results.length}</strong> staff members
          </p>

          <div className="staff-grid">
            {results.length > 0 ? (
              results.map((s) => <StaffCard member={s} key={s.id} />)
            ) : (
              <div className="empty-state">
                <strong>No staff members match that search.</strong>
                Try a different name, role, or department.
              </div>
            )}
          </div>

          <div className="info-box" style={{ marginTop: 32 }}>
            <h3>📞 General Inquiries</h3>
            <p>RHEC Main Office: (540) 767-6000 · 108 North Jefferson Street, Roanoke, VA 24016</p>
          </div>
        </div>
      </section>
    </>
  );
}
