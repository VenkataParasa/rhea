import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero, ProgramCard, CTASection } from '@/components/content';
import { programs } from '@/data/programs';

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== slug && p.subject === program.subject).slice(0, 3);

  return (
    <>
      <PageHero
        title={program.name}
        description={program.summary}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Degrees & Programs', href: '/degrees-programs' },
          { label: program.name },
        ]}
        imageSrc="/images/ru-nursing-1.jpg"
      />

      <section>
        <div className="wrap">
          <div className="two-col-wide">
            <div>
              <div className="eyebrow">Program overview</div>
              <h2 style={{ color: 'var(--deep)', fontSize: 'clamp(1.7rem,3vw,2.4rem)', letterSpacing: '-.04em', margin: '10px 0 18px' }}>
                A practical next step toward your goal.
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 20 }}>
                {program.overview ?? program.summary}
              </p>

              {program.highlights && program.highlights.length > 0 && (
                <>
                  <h3 style={{ color: 'var(--deep)', marginBottom: 12 }}>Program highlights</h3>
                  <ul className="checklist">
                    {program.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </>
              )}

              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link className="btn" href="/contact">Request information →</Link>
                <Link className="btn btn-outline" href="/student-services">Student support services →</Link>
              </div>
            </div>

            <aside>
              <div className="card" style={{ position: 'sticky', top: 100 }}>
                <div className="badge" style={{ marginBottom: 14 }}>Program details</div>
                <h3 style={{ marginTop: 0 }}>At a glance</h3>
                {[
                  { label: 'Provider', value: program.provider },
                  { label: 'Credential', value: program.credential },
                  { label: 'Format', value: program.format },
                  { label: 'Location', value: program.location },
                  { label: 'Subject area', value: program.subject },
                ].map((d) => (
                  <div key={d.label} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid var(--line)' }}>
                    <div style={{ fontSize: '.76rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--bronze)', marginBottom: 2 }}>{d.label}</div>
                    <div style={{ color: 'var(--deep)', fontWeight: 600 }}>{d.value}</div>
                  </div>
                ))}
                <Link className="btn" href="/contact" style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}>
                  Get started →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ background: 'var(--mint)', padding: '72px 0' }}>
          <div className="wrap">
            <div className="section-top">
              <div>
                <div className="eyebrow">Keep exploring</div>
                <h2>Related programs</h2>
              </div>
              <Link className="text-link" href="/degrees-programs">View all programs →</Link>
            </div>
            <div className="program-grid">
              {related.map((p) => <ProgramCard key={p.slug} program={p} />)}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to take the next step?"
        body="Our team can help you understand your options, connect with the right institution, and get started."
        href="/contact"
        label="Contact RHEC"
      />
    </>
  );
}
