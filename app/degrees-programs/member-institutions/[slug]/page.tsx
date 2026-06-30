import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs, CTASection } from '@/components/content';
import { institutions } from '@/data/institutions';

export async function generateStaticParams() {
  return institutions.map((i) => ({ slug: i.slug }));
}

export default async function InstitutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const inst = institutions.find((i) => i.slug === slug);
  if (!inst) notFound();

  return (
    <>
      {/* Breadcrumb strip */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--line)', padding: '12px 0' }}>
        <div className="wrap">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Degrees & Programs', href: '/degrees-programs' },
            { label: 'Member Institutions', href: '/degrees-programs/member-institutions' },
            { label: inst.abbr },
          ]} />
        </div>
      </div>

      {/* Institution banner */}
      <section className="inst-banner">
        <div className="wrap inst-banner-inner">
          <div>
            <span className={`badge ${inst.typeVariant === 'workforce' ? 'badge-bronze' : 'badge-light'}`}>
              {inst.type}
            </span>
            <h1 className="inst-banner-title">{inst.name}</h1>
            <p className="inst-banner-desc">{inst.description}</p>
          </div>
          <div className="inst-logo-box">
            <img src={inst.logo} alt={`${inst.name} logo`} />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section>
        <div className="wrap">
          <div className="two-col-wide">

            <div>
              <div className="eyebrow">About {inst.abbr} at RHEC</div>
              <h2 style={{ color: 'var(--deep)', fontSize: 'clamp(1.7rem,3vw,2.4rem)', letterSpacing: '-.04em', margin: '10px 0 20px' }}>
                At a glance
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24 }}>
                {inst.detail}
              </p>

              {inst.highlights && inst.highlights.length > 0 && (
                <>
                  <h3 style={{ color: 'var(--deep)', marginBottom: 14 }}>Key highlights</h3>
                  <ul className="checklist" style={{ marginBottom: 28 }}>
                    {inst.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </>
              )}

              <h3 style={{ color: 'var(--deep)', marginBottom: 14 }}>Programs offered at RHEC</h3>
              <ul className="checklist" style={{ marginBottom: 32 }}>
                {inst.programs.map((p) => <li key={p}>{p}</li>)}
              </ul>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link className="btn" href="/degrees-programs">Browse all programs →</Link>
                <a
                  className="btn btn-outline"
                  href={inst.officialHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit official {inst.abbr} site ↗
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="card" style={{ position: 'sticky', top: 100 }}>
                <div className="eyebrow" style={{ marginBottom: 12 }}>Contact at RHEC</div>
                {inst.contact.name && (
                  <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>
                    {inst.contact.name}
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {inst.contact.email && (
                    <a
                      href={`mailto:${inst.contact.email}`}
                      className="text-link"
                      style={{ fontSize: '.88rem', wordBreak: 'break-all' }}
                    >
                      {inst.contact.email}
                    </a>
                  )}
                  {inst.contact.phone && (
                    <a
                      href={`tel:${inst.contact.phone.replace(/\D/g, '')}`}
                      className="text-link"
                      style={{ fontSize: '.88rem' }}
                    >
                      {inst.contact.phone}
                    </a>
                  )}
                </div>

                <div style={{ borderTop: '1px solid var(--line)', marginTop: 20, paddingTop: 20 }}>
                  <div className="eyebrow" style={{ marginBottom: 8 }}>Campus location</div>
                  <p style={{ fontSize: '.87rem', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                    108 North Jefferson Street<br />
                    Roanoke, VA 24016<br />
                    <a href="tel:5407676161" className="text-link" style={{ fontSize: '.87rem' }}>(540) 767-6161</a>
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--line)', marginTop: 20, paddingTop: 20 }}>
                  <div className="eyebrow" style={{ marginBottom: 8 }}>Campus hours</div>
                  <p style={{ fontSize: '.84rem', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
                    Mon–Thu: 7:30 a.m.–9:00 p.m.<br />
                    Fri: 8:00 a.m.–6:00 p.m.<br />
                    Sat: 9:00 a.m.–2:00 p.m.
                  </p>
                </div>

                <Link
                  className="btn btn-outline"
                  href="/contact"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 20, display: 'flex' }}
                >
                  Contact RHEC →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other institutions */}
      <section style={{ background: 'var(--mint)', padding: '72px 0' }}>
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Explore more</div>
              <h2>Other member institutions</h2>
            </div>
            <Link className="text-link" href="/degrees-programs/member-institutions">
              View all institutions →
            </Link>
          </div>
          <div className="members-grid">
            {institutions
              .filter((i) => i.slug !== slug)
              .slice(0, 3)
              .map((i) => (
                <article className="member-card" key={i.abbr}>
                  <div className="member-card-head">
                    <div className="member-abbr">{i.abbr}</div>
                    <span className={`badge ${i.typeVariant === 'workforce' ? 'badge-bronze' : ''}`}>
                      {i.type}
                    </span>
                  </div>
                  <h3 className="member-name">{i.name}</h3>
                  <p className="member-desc">{i.description}</p>
                  <div style={{ marginTop: 'auto', paddingTop: 18 }}>
                    <Link
                      className="text-link"
                      href={`/degrees-programs/member-institutions/${i.slug}`}
                    >
                      View {i.abbr} details →
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to take the next step?"
        body="Our team can help you understand your options, connect with the right institution, and get started on your path."
        href="/contact"
        label="Contact RHEC"
      />
    </>
  );
}
