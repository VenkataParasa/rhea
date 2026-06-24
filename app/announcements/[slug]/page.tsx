import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/content';
import { announcements } from '@/data/announcements';

export async function generateStaticParams() {
  return announcements.map((a) => ({ slug: a.slug }));
}

export default async function AnnouncementDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = announcements.find((a) => a.slug === slug);
  if (!item) notFound();

  const others = announcements.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Announcements', href: '/announcements' },
          { label: item.title },
        ]}
      />

      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="badge">{item.type}</span>
            <span className="badge badge-bronze">{item.category}</span>
            <span style={{ fontSize: '.84rem', color: 'var(--muted)' }}>{item.date}</span>
          </div>

          <p style={{ fontSize: '1.15rem', color: 'var(--ink)', lineHeight: 1.75, marginBottom: 24, fontWeight: 500 }}>
            {item.summary}
          </p>

          <div style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            <p>{item.body}</p>
            <p>
              For more information, contact the RHEC Student Success Center at (540) 767-6012
              or visit the{' '}
              <Link className="text-link" href="/contact">Contact Us</Link> page.
            </p>
          </div>

          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
            <Link className="btn btn-outline" href="/announcements">← Back to all announcements</Link>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section style={{ background: 'var(--sand)', padding: '72px 0' }}>
          <div className="wrap">
            <div className="section-top">
              <h2 style={{ color: 'var(--deep)', margin: 0 }}>More announcements</h2>
              <Link className="text-link" href="/announcements">View all →</Link>
            </div>
            <div className="program-grid">
              {others.map((a) => (
                <div className="ann-card" key={a.slug}>
                  <div className="ann-type">{a.type}</div>
                  <h3>{a.title}</h3>
                  <p>{a.summary}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                    <span className="ann-date">{a.date}</span>
                    <Link className="text-link" href={`/announcements/${a.slug}`} style={{ fontSize: '.88rem' }}>Read more →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
