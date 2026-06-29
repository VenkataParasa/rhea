import Link from 'next/link';
import { PageHero, CTASection } from '@/components/content';
import { institutions } from '@/data/institutions';

const degreeTypes = [
  { level: 'Doctoral', partners: 'ACP, VCU, VT' },
  { level: "Master's", partners: 'RU, VCU, VT, JMU' },
  { level: "Bachelor's", partners: 'RU, JMU, VT' },
  { level: "Associate's", partners: 'VWCC' },
  { level: 'Certificates', partners: 'VWCC, SOVAH, ACP, RHEC' },
  { level: 'GED / Adult Ed', partners: 'Region 5, TAP' },
];

export default function MemberInstitutionsPage() {
  return (
    <>
      <PageHero
        title="Member Institutions"
        description="RHEC brings 10 education partners together in one shared campus — from community colleges to doctoral programs — so students can find the right path without leaving Roanoke."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Degrees & Programs', href: '/degrees-programs' },
          { label: 'Member Institutions' },
        ]}
        imageSrc="/images/ext-member-institutions.jpg"
      />

      {/* Intro + degree levels */}
      <section>
        <div className="wrap">
          <div className="two-col-eq" style={{ alignItems: 'start' }}>
            <div>
              <div className="eyebrow">Connected learning</div>
              <h2 style={{ color: 'var(--deep)', fontSize: 'clamp(1.9rem,3.2vw,2.8rem)', letterSpacing: '-.05em', margin: '10px 0 18px' }}>
                One campus. Every level of education.
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 14 }}>
                The Roanoke Higher Education Center is designed around partnership.
                Rather than operating as a single institution, RHEC provides a shared
                location where member schools and education partners bring their programs,
                faculty, and advising services directly to the Roanoke community.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 28 }}>
                This model gives students a practical way to compare options, connect
                with the right provider, and access support services in one accessible
                downtown location.
              </p>
              <div className="btns">
                <Link className="btn" href="/degrees-programs">Browse all programs →</Link>
                <Link className="btn btn-outline" href="/contact">Ask about a partner</Link>
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>Credentials offered at RHEC</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--line)' }}>
                {degreeTypes.map((d, i) => (
                  <div
                    key={d.level}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 12,
                      padding: '14px 20px',
                      borderBottom: i < degreeTypes.length - 1 ? '1px solid var(--line)' : 'none',
                      background: i % 2 === 0 ? '#fff' : 'var(--sand)',
                    }}
                  >
                    <span style={{ fontWeight: 700, color: 'var(--deep)', fontSize: '.9rem' }}>{d.level}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>{d.partners}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institution cards */}
      <section style={{ background: 'var(--sand)', padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Our partners</div>
              <h2 style={{ color: 'var(--deep)' }}>10 member institutions</h2>
            </div>
            <p>Each partner brings distinct programs and expertise to the RHEC campus.</p>
          </div>

          <div className="members-grid">
            {institutions.map((inst) => (
              <article className="member-card" key={inst.abbr} id={inst.abbr.toLowerCase()}>
                <div className="member-card-head">
                  <div className="member-abbr">{inst.abbr}</div>
                  <span className={`badge ${inst.typeVariant === 'workforce' ? 'badge-bronze' : ''}`}>
                    {inst.type}
                  </span>
                </div>
                <h3 className="member-name">{inst.name}</h3>
                <p className="member-desc">{inst.description}</p>
                <div className="member-programs">
                  <div className="eyebrow" style={{ fontSize: '.7rem', marginBottom: 8 }}>Programs at RHEC</div>
                  <ul>
                    {inst.programs.slice(0, 3).map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                    {inst.programs.length > 3 && (
                      <li style={{ color: 'var(--muted)', fontStyle: 'italic' }}>+{inst.programs.length - 3} more</li>
                    )}
                  </ul>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 18 }}>
                  <Link
                    className="btn btn-sm"
                    href={`/degrees-programs/member-institutions/${inst.slug}`}
                  >
                    View {inst.abbr} details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to start?"
        title="Find the program that fits your goal."
        body="Use the program finder to browse offerings from all member institutions, or contact RHEC to speak with a student advisor who can help you compare your options."
        href="/degrees-programs"
        label="Explore programs"
      />
    </>
  );
}
