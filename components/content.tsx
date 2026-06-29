import Link from 'next/link';
import type { Program } from '@/data/programs';
import type { Announcement } from '@/data/announcements';
import type { CalendarEvent } from '@/data/events';
import type { Document } from '@/data/documents';
import type { StaffMember } from '@/data/staff';

/* ── Breadcrumbs ─────────────────────────────────────────────────────── */
export function Breadcrumbs({ crumbs }: { crumbs: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {i > 0 && <span aria-hidden>/</span>}
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

/* ── Page hero ───────────────────────────────────────────────────────── */
export function PageHero({
  title, description, crumbs, imageSrc, logoSrc,
}: {
  title: string; description?: string; crumbs?: { label: string; href?: string }[]; imageSrc?: string; logoSrc?: string;
}) {
  if (logoSrc) {
    return (
      <section className="page-hero">
        <div className="page-hero-logo-panel" aria-hidden="true">
          <img src={logoSrc} alt="" />
        </div>
        <div className="wrap page-hero-inner">
          <div className="page-hero-text">
            {crumbs && <Breadcrumbs crumbs={crumbs} />}
            <h1 className="page-hero-title">{title}</h1>
            {description && <p className="page-hero-desc">{description}</p>}
          </div>
        </div>
      </section>
    );
  }

  const heroImage = imageSrc ?? 'https://i0.wp.com/www.education.edu/wp-content/uploads/2022/08/RHEC-Main-Page-Header.png?resize=2600%2C1000&ssl=1';
  return (
    <section className="page-hero">
      <div className="page-hero-image" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
      <div className="wrap page-hero-inner">
        <div className="page-hero-text">
          {crumbs && <Breadcrumbs crumbs={crumbs} />}
          <h1 className="page-hero-title">{title}</h1>
          {description && <p className="page-hero-desc">{description}</p>}
        </div>
      </div>
    </section>
  );
}

/* ── Section header ──────────────────────────────────────────────────── */
export function SectionHeader({
  eyebrow, title, description, link,
}: {
  eyebrow?: string; title: string; description?: string; link?: { href: string; label: string };
}) {
  return (
    <div className="section-top">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2>{title}</h2>
      </div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {description && <p>{description}</p>}
        {link && <Link className="text-link" href={link.href}>{link.label} →</Link>}
      </div>
    </div>
  );
}

/* ── Program card ────────────────────────────────────────────────────── */
export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="card">
      <div className="badges">
        <span className="badge">{program.subject}</span>
        <span className="badge badge-format">{program.format}</span>
      </div>
      <h3>{program.name}</h3>
      <p>{program.summary}</p>
      <div className="meta">
        <span>{program.provider}</span>
        <span>{program.credential}</span>
      </div>
      <div style={{ marginTop: 14 }}>
        <Link className="btn btn-sm" href={`/degrees-programs/${program.slug}`}>
          Explore program →
        </Link>
      </div>
    </article>
  );
}

/* ── Announcement card ───────────────────────────────────────────────── */
export function AnnouncementCard({ item }: { item: Announcement }) {
  return (
    <article className="ann-card">
      <div className="ann-type">{item.type}</div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <span className="ann-date">{item.date}</span>
        <Link className="text-link" href={`/announcements/${item.slug}`} style={{ fontSize: '.88rem' }}>
          Read more →
        </Link>
      </div>
    </article>
  );
}

/* ── Event card ──────────────────────────────────────────────────────── */
export function EventCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="event-card">
      <div className="event-date">
        <b>{event.day}</b>
        <span>{event.month}</span>
      </div>
      <div style={{ flex: 1 }}>
        <div className="event-type">{event.type}</div>
        <h3>{event.title}</h3>
        <p>{event.time} · {event.location}</p>
      </div>
    </article>
  );
}

/* ── Document card ───────────────────────────────────────────────────── */
export function DocumentCard({ doc }: { doc: Document }) {
  return (
    <article className="doc-card">
      <div className="doc-icon" aria-hidden>{doc.type}</div>
      <div>
        <h3>{doc.title}</h3>
        <p>{doc.description}</p>
        <div className="doc-meta">
          <span className="badge">{doc.category}</span>
          {' '}&nbsp;
          <span className="badge badge-bronze">{doc.audience}</span>
          {' '}&nbsp;
          <span style={{ color: 'var(--muted)', fontSize: '.76rem' }}>{doc.date}</span>
        </div>
        <div style={{ marginTop: 10 }}>
          <a
            href={doc.fileUrl}
            className="text-link"
            style={{ fontSize: '.87rem' }}
            aria-label={`Download ${doc.title} (${doc.type}, demo file)`}
          >
            Download {doc.type} →
          </a>
        </div>
      </div>
    </article>
  );
}

/* ── Staff card ──────────────────────────────────────────────────────── */
export function StaffCard({ member }: { member: StaffMember }) {
  const initials = member.name.split(' ').map((n) => n[0]).join('').slice(0, 2);
  return (
    <article className="staff-card">
      <div className="staff-avatar" aria-hidden>{initials}</div>
      <div className="staff-dept">{member.department}</div>
      <h3>{member.name}</h3>
      <p className="staff-role">{member.role}</p>
      <p className="staff-role" style={{ fontSize: '.8rem' }}>📍 {member.location}</p>
      <div className="staff-contact">
        <a href={`tel:${member.phone.replace(/\D/g,'')}`}>{member.phone}</a>
        <a href={`mailto:${member.email}`}>{member.email}</a>
      </div>
    </article>
  );
}

/* ── CTA section ─────────────────────────────────────────────────────── */
export function CTASection({
  eyebrow, title, body, href = '/contact', label = 'Contact RHEC',
}: {
  eyebrow?: string; title: string; body: string; href?: string; label?: string;
}) {
  return (
    <section className="cta-section">
      <div className="wrap">
        <div>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <Link className="btn btn-light" href={href}>{label} →</Link>
      </div>
    </section>
  );
}

/* ── External link button ────────────────────────────────────────────── */
export function ExternalLinkButton({ href, label, note }: { href: string; label: string; note?: string }) {
  return (
    <a
      href={href}
      className="btn btn-outline"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}${note ? ' — ' + note : ''} (opens in a new tab)`}
    >
      {label} ↗
    </a>
  );
}

/* ── Form placeholder ────────────────────────────────────────────────── */
export function FormPlaceholder({
  title = 'Get in touch', fields, submitLabel = 'Submit',
}: {
  title?: string; fields?: string[]; submitLabel?: string;
}) {
  const defaultFields = fields ?? ['Full name', 'Email address', 'Phone number', 'Message'];
  return (
    <div className="form-section">
      <h3 style={{ color: 'var(--deep)', marginTop: 0 }}>{title}</h3>
      <p className="form-notice">
        This is a design-demo form and does not submit your information.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="form-name">Full name</label>
            <input id="form-name" type="text" autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="form-email">Email address</label>
            <input id="form-email" type="email" autoComplete="email" />
          </div>
        </div>
        {defaultFields.filter(f => !['Full name', 'Email address'].includes(f)).map((f, i) => (
          <div className="field" key={i}>
            <label htmlFor={`form-field-${i}`}>{f}</label>
            {f.toLowerCase().includes('message') || f.toLowerCase().includes('detail')
              ? <textarea id={`form-field-${i}`} rows={4} />
              : <input id={`form-field-${i}`} type="text" />
            }
          </div>
        ))}
        <button className="btn" type="submit">{submitLabel}</button>
      </form>
    </div>
  );
}

/* Accordion components are in @/components/accordion (client component) */
export { Accordion, AccordionItem } from './accordion';
