import Link from 'next/link';
import { PageHero, ExternalLinkButton } from '@/components/content';

const scholarships = [
  {
    name: 'RHEC Access Scholarship',
    desc: 'Supports students with demonstrated financial need. Awards range from $500 to $2,000.',
    eligibility: 'RHEC-enrolled students with FAFSA on file',
    deadline: 'April 30, 2026',
  },
  {
    name: 'Workforce Forward Award',
    desc: 'For students pursuing non-credit workforce credentials and career training programs.',
    eligibility: 'Students enrolled in RHEC Workforce Training programs',
    deadline: 'Rolling deadline',
  },
  {
    name: 'Healthcare Pathways Scholarship',
    desc: 'Supports students in health sciences programs at RHEC member institutions.',
    eligibility: 'Students in nursing, MLT, or allied health programs',
    deadline: 'March 15, 2026',
  },
  {
    name: 'Community Partner Scholarship',
    desc: 'Funded by local employers and community organizations supporting regional workforce development.',
    eligibility: 'Open to all eligible RHEC students',
    deadline: 'April 30, 2026',
  },
];

const impact = [
  { num: '$180K+', label: 'Awarded in scholarships annually' },
  { num: '120+', label: 'Students supported per year' },
  { num: '40+', label: 'Active donor partners' },
  { num: '15', label: 'Years of foundation giving' },
];

export default function FoundationPage() {
  return (
    <>
      <PageHero
        title="RHEC Foundation"
        description="Investing in students and the resources that help our region learn, grow, and thrive. The Foundation removes financial barriers to education for students across Southwest Virginia."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Foundation' }]}
        imageSrc="/images/foundation-header.webp"
      />

      {/* Overview */}
      <section>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <div className="eyebrow">Our purpose</div>
            <h2 style={{ color: 'var(--deep)', fontSize: 'clamp(2rem,3.5vw,3rem)', letterSpacing: '-.055em', margin: '10px 0 18px' }}>
              Opportunity grows when we invest in it.
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 16 }}>
              The RHEC Foundation helps remove barriers to education through scholarships, campus
              resources, and partnerships that strengthen our region. Every gift — of any size —
              makes education more accessible.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
              Foundation funding supports student scholarships, learning space improvements, and
              workforce training equipment. Together with our donors and community partners, we're
              building pathways to meaningful work across Southwest Virginia.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <ExternalLinkButton href="#give-now-placeholder" label="Give Now" note="External donation platform placeholder" />
              <Link className="btn btn-outline" href="/contact">Contact the Foundation</Link>
            </div>
          </div>
          <div className="impact-grid" style={{ alignContent: 'start' }}>
            {impact.map((i) => (
              <div className="impact-card" key={i.label}>
                <span className="impact-num">{i.num}</span>
                <span className="impact-label">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" style={{ background: 'var(--mint)', padding: '72px 0' }}>
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Student support</div>
              <h2>Scholarships</h2>
            </div>
            <p>Applications for the 2026–2027 academic year are now open. Visit the Student Success Center for help applying.</p>
          </div>
          <div className="program-grid">
            {scholarships.map((s) => (
              <div className="card" key={s.name}>
                <div className="badge" style={{ marginBottom: 12 }}>Scholarship</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <div style={{ fontSize: '.82rem', color: 'var(--muted)', borderTop: '1px solid var(--line)', paddingTop: 12, marginTop: 4 }}>
                  <div><strong style={{ color: 'var(--deep)' }}>Eligibility:</strong> {s.eligibility}</div>
                  <div style={{ marginTop: 4 }}><strong style={{ color: 'var(--deep)' }}>Deadline:</strong> {s.deadline}</div>
                </div>
                <div style={{ marginTop: 14 }}>
                  <Link className="btn btn-sm" href="/contact">Apply or learn more →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="info-box" style={{ marginTop: 28 }}>
            <h3>📋 How to apply</h3>
            <p>
              Pick up a scholarship application at the Student Success Center (Room 115) or download it from the{' '}
              <Link className="text-link" href="/documents">Document Library</Link>. Submit completed applications
              by the deadline listed for each award. Questions? Contact Lisa Chen, Foundation Director, at (540) 767-6070.
            </p>
          </div>
        </div>
      </section>

      {/* Give Now */}
      <section style={{ background: 'var(--deep)', color: '#fff', padding: '80px 0' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 720 }}>
          <div className="eyebrow" style={{ color: '#d4bb8c' }}>Support student success</div>
          <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', letterSpacing: '-.055em', margin: '14px 0 18px' }}>
            Make opportunity possible.
          </h2>
          <p style={{ color: '#d4e5d8', marginBottom: 28, lineHeight: 1.7 }}>
            Your gift to the RHEC Foundation directly supports scholarships, campus resources, and the
            programs that help students in our region build meaningful futures.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <ExternalLinkButton href="#give-now-placeholder" label="Give Now via DonorPerfect" note="External platform placeholder" />
            <Link className="btn btn-light" href="/contact">Contact the Foundation</Link>
          </div>
          <p style={{ fontSize: '.8rem', color: '#8faaa0', marginTop: 20 }}>
            Demo note: "Give Now" links to a placeholder. In production this would open the DonorPerfect donation portal.
          </p>
        </div>
      </section>
    </>
  );
}
