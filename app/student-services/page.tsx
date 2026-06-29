import Link from 'next/link';
import { PageHero, CTASection } from '@/components/content';

const services = [
  {
    id: 'success-center',
    name: 'Student Success Center',
    desc: 'Advising, tutoring, study support, and answers when you need them. The Success Center is your first stop for navigating RHEC.',
    hours: 'Mon–Thu: 8 a.m.–8 p.m. · Fri: 8 a.m.–5 p.m.',
    location: 'Room 115',
    link: '/contact',
    linkLabel: 'Contact the Success Center',
    image: 'https://i0.wp.com/www.education.edu/wp-content/uploads/2026/03/VCU-NRSA-student.jpg?fit=1000%2C600&ssl=1',
  },
  {
    id: 'workforce',
    name: 'Career & Workforce Training Center',
    desc: 'Training and career navigation for high-demand, growing industries. Explore non-credit courses, certifications, and workforce credentials.',
    hours: 'Mon–Fri: 8 a.m.–5 p.m.',
    location: 'Room 220',
    link: '/degrees-programs?subject=Workforce',
    linkLabel: 'Browse workforce programs',
    image: 'https://i0.wp.com/www.education.edu/wp-content/uploads/2024/12/Culinary-Arts-1.jpg?fit=1000%2C600&ssl=1',
  },
  {
    id: 'library',
    name: 'RHEC Library',
    desc: 'Research databases, study spaces, interlibrary loan services, and expert help from a dedicated librarian.',
    hours: 'Mon–Thu: 8 a.m.–8 p.m. · Fri: 8 a.m.–5 p.m.',
    location: 'Room 160',
    link: '/documents',
    linkLabel: 'Library resources',
    image: 'https://www.education.edu/wp-content/uploads/external/79859a804e718c7290312a78639a65f0-690x460-c-center.jpg',
  },
  {
    id: 'computer-lab',
    name: 'Computer Lab',
    desc: 'Access to Windows and Mac computers, printers, and IT support for coursework, job searches, and more.',
    hours: 'Mon–Thu: 7:30 a.m.–9 p.m. · Fri–Sat: 9 a.m.–5 p.m.',
    location: 'Room 140',
    link: '/contact',
    linkLabel: 'Computer lab info',
    image: '/images/computer-labs.jpg',
  },
  {
    id: 'parking',
    name: 'Student Parking',
    desc: 'Easy-to-follow parking information for students attending classes and using campus services.',
    hours: 'Available during campus hours',
    location: 'Lots A, B, and C',
    link: '/documents',
    linkLabel: 'Parking guide',
    image: 'https://i0.wp.com/www.education.edu/wp-content/uploads/2022/08/RHEC-Main-Page-Header.png?resize=2600%2C1000&ssl=1',
  },
  {
    id: 'getting-started',
    name: 'Getting Started Guide',
    desc: 'A clear, practical path from interest to enrollment — covering applications, financial aid, advising, and orientation.',
    hours: 'Available any time',
    location: 'Student Success Center',
    link: '/contact',
    linkLabel: 'Get started today',
    image: 'https://i0.wp.com/www.education.edu/wp-content/uploads/2026/03/Open-house.jpg?fit=1000%2C600&ssl=1',
  },
];

export default function StudentServicesPage() {
  return (
    <>
      <PageHero
        title="Student Services"
        description="The people, places, and practical resources that help you stay focused on your goals — whether you're brand new or finding your next step."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Student Services' }]}
        imageSrc="https://i0.wp.com/www.education.edu/wp-content/uploads/2022/07/Student-Services-Header.png?resize=2600%2C1000&ssl=1"
      />

      <section>
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">What we offer</div>
              <h2>Support for every step</h2>
            </div>
            <p>All services are available to RHEC students enrolled through any member institution.</p>
          </div>
          <div className="program-grid">
            {services.map((s) => (
              <article className="service-card" key={s.id} id={s.id}>
                <div className="service-thumb" aria-hidden>
                  <img src={s.image} alt="" loading="lazy" />
                </div>
                <div className="service-body">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <div style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: 14 }}>
                    <div>⏰ {s.hours}</div>
                    <div>📍 {s.location}</div>
                  </div>
                  <Link className="btn btn-sm service-card-link" href={s.link}>{s.linkLabel} →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Getting started checklist */}
      <section id="getting-started" style={{ background: 'var(--mint)', padding: '72px 0' }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div className="section-top">
            <div>
              <div className="eyebrow">New to RHEC?</div>
              <h2>Getting Started Guide</h2>
            </div>
          </div>
          <p style={{ color: 'var(--muted)', marginBottom: 28 }}>
            Not sure where to begin? Follow these steps to go from interested to enrolled.
          </p>
          <ul className="checklist">
            {[
              'Choose a program from our Degrees & Programs page',
              'Contact your chosen member institution to start the application process',
              'Apply for financial aid at studentaid.gov (FAFSA)',
              'Visit the Student Success Center for advising and enrollment support',
              'Get your parking permit and campus orientation from the Success Center',
              'Explore services: library, computer lab, tutoring, and career resources',
            ].map((step, i) => (
              <li key={i}><strong>Step {i + 1}:</strong> {step}</li>
            ))}
          </ul>
          <div style={{ marginTop: 24 }}>
            <Link className="btn" href="/contact">Talk with a student advisor →</Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="We're here to help"
        title="Not sure where to begin?"
        body="The Student Success Center team can help you find the right resource, understand your options, and take the next step."
        href="/contact"
        label="Talk with student support"
      />
    </>
  );
}
