import Link from "next/link";
import {
  ProgramCard,
  AnnouncementCard,
  EventCard,
  CTASection,
} from "@/components/content";
import { programs } from "@/data/programs";
import { announcements } from "@/data/announcements";
import { events } from "@/data/events";

const pathways = [
  {
    title: "Future Students",
    desc: "Explore degrees, certificates, and how to get started.",
    href: "/degrees-programs",
    image:
      "https://i0.wp.com/www.education.edu/wp-content/uploads/2026/03/Open-house.jpg?fit=1000%2C600&ssl=1",
  },
  {
    title: "Current Students",
    desc: "Find the services and support you need on campus.",
    href: "/student-services",
    image:
      "https://i0.wp.com/www.education.edu/wp-content/uploads/2024/12/Event-1.jpg?fit=1000%2C600&ssl=1",
  },
  {
    title: "Workforce Learners",
    desc: "Build skills for a changing career.",
    href: "/degrees-programs?subject=Workforce",
    image:
      "https://i0.wp.com/www.education.edu/wp-content/uploads/2024/12/Culinary-Arts-1.jpg?fit=1000%2C600&ssl=1",
  },
  {
    title: "Partners & Employers",
    desc: "Connect with talent and customized training.",
    href: "/foundation",
    image:
      "https://i0.wp.com/www.education.edu/wp-content/uploads/2024/12/Region-5-1.jpg?fit=1000%2C600&ssl=1",
  },
  {
    title: "Host an Event",
    desc: "Find flexible, professional space for your group.",
    href: "/rent-a-space",
    image:
      "https://i0.wp.com/www.education.edu/wp-content/uploads/2024/12/CCMA-1.jpg?fit=1000%2C600&ssl=1",
  },
];

const heroSlides = [
  {
    image:
      "https://i0.wp.com/www.education.edu/wp-content/uploads/2022/08/RHEC-Main-Page-Header.png?resize=2600%2C1000&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/www.education.edu/wp-content/uploads/2026/03/VCU-NRSA-student.jpg?fit=1000%2C600&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/www.education.edu/wp-content/uploads/2026/03/Open-house.jpg?fit=1000%2C600&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/www.education.edu/wp-content/uploads/2024/12/RU-Nursing-1.jpg?fit=1000%2C600&ssl=1",
  },
];

export default function Home() {
  const featuredPrograms = programs.filter((p) => p.featured);
  const recentAnnouncements = announcements.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div
          className="hero-media-strip"
          aria-label="RHEC campus and services image gallery"
        >
          {heroSlides.map((slide) => (
            <figure className="hero-slide" key={slide.image}>
              <img src={slide.image} alt="" />
            </figure>
          ))}
        </div>
        <div className="wrap hero-content">
          <div className="hero-copy">
            <div className="eyebrow">Education, close to home</div>
            <h1>Build what's next, right here.</h1>
            <p>
              Degrees, workforce training, certifications, and student support —
              all in one welcoming place in Southwest Virginia.
            </p>
            <div className="btns">
              <Link className="btn btn-light" href="/degrees-programs">
                Explore programs →
              </Link>
              <Link className="btn" href="/student-services">
                I'm a current student
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats" aria-label="RHEC at a glance">
        <div className="wrap">
          <div className="stat">
            <b>30+</b>
            <span>Degrees &amp; credentials</span>
          </div>
          <div className="stat">
            <b>9</b>
            <span>Member institutions</span>
          </div>
          <div className="stat">
            <b>1</b>
            <span>Convenient location</span>
          </div>
          <div className="stat">
            <b>∞</b>
            <span>Possible next steps</span>
          </div>
        </div>
      </div>

      {/* Pathway cards */}
      <section className="pathways">
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Find your way</div>
              <h2>What brings you to RHEC?</h2>
            </div>
            <p>
              Start with the path that fits your goals. We'll help make the next
              step clear.
            </p>
          </div>
          <div className="path-grid">
            {pathways.map((p) => (
              <Link className="path" href={p.href} key={p.title}>
                <span className="path-image" aria-hidden="true">
                  <img src={p.image} alt="" loading="lazy" />
                </span>
                <span className="path-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="path-cta">Explore this path</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured programs */}
      <section>
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Learn your way</div>
              <h2>Featured degrees &amp; programs</h2>
            </div>
            <Link className="text-link" href="/degrees-programs">
              View all programs →
            </Link>
          </div>
          <div className="program-grid">
            {featuredPrograms.map((p) => (
              <ProgramCard program={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Announcements & Events */}
      <section className="split-section">
        <div className="wrap">
          <div className="split-grid">
            <div>
              <div className="section-top" style={{ marginBottom: 20 }}>
                <div>
                  <div className="eyebrow">Latest news</div>
                  <h2>Announcements</h2>
                </div>
                <Link className="text-link" href="/announcements">
                  View all →
                </Link>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {recentAnnouncements.map((a) => (
                  <AnnouncementCard item={a} key={a.slug} />
                ))}
              </div>
            </div>
            <div>
              <div className="section-top" style={{ marginBottom: 20 }}>
                <div>
                  <div className="eyebrow">Coming up</div>
                  <h2>Events</h2>
                </div>
                <Link className="text-link" href="/events">
                  View all →
                </Link>
              </div>
              <div className="event-list">
                {upcomingEvents.map((e) => (
                  <EventCard event={e} key={e.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Gather here"
        title="Space for your next great idea."
        body="From meetings and training sessions to community events, RHEC has adaptable classrooms, labs, conference rooms, and support services."
        href="/rent-a-space"
        label="Ask about a space"
      />
    </>
  );
}
