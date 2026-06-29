import Link from "next/link";
import { PageHero, CTASection } from "@/components/content";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About RHEC"
        description="The Roanoke Higher Education Center is a shared campus that brings together leading universities, community colleges, and workforce training providers in one convenient location in downtown Roanoke."
        crumbs={[{ label: "Home", href: "/" }, { label: "About RHEC" }]}
        imageSrc="https://i0.wp.com/www.education.edu/wp-content/uploads/2022/10/About-RHEC-Header-2.png?resize=2600%2C1000&ssl=1"
      />

      {/* Mission */}
      <section id="mission">
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Who we are</div>
              <h2>Mission, Vision &amp; Impact</h2>
            </div>
          </div>
          <div className="two-col-eq">
            <div>
              <h3 style={{ color: "var(--deep)" }}>Our Mission</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                RHEC provides a welcoming, accessible location for higher
                education and workforce training in the Roanoke Valley. We
                connect students to the institutions, programs, and support they
                need to succeed — close to home.
              </p>
              <h3 style={{ color: "var(--deep)" }}>Our Vision</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                A region where every person has access to the education and
                training they need to pursue meaningful work and build a
                thriving life.
              </p>
            </div>
            <div
              className="impact-grid"
              style={{
                gridTemplateColumns: "repeat(2,1fr)",
                alignContent: "start",
              }}
            >
              {[
                { num: "30+", label: "Degrees & credentials offered" },
                { num: "9", label: "Member institutions" },
                { num: "1,200+", label: "Students served annually" },
                { num: "25+", label: "Years of community impact" },
              ].map((s) => (
                <div className="impact-card" key={s.label}>
                  <span className="impact-num">{s.num}</span>
                  <span className="impact-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Member institutions */}
      <section id="members" className="member-feature">
        <div className="member-feature-image" aria-hidden>
          <img src="/images/member-institutions.jpg" alt="" />
        </div>
        <div className="member-feature-content">
          <div>
            <div className="eyebrow">Our partners</div>
            <h2>Member Institutions</h2>
            <p>
              RHEC serves as a shared downtown campus where colleges,
              universities, and workforce partners can connect learners with
              programs, advising, classrooms, labs, and student support.
            </p>
            <p>
              Instead of representing one school, the Center provides a common
              place for multiple education pathways — from certificates and
              workforce credentials to undergraduate and graduate study.
            </p>
            <Link
              className="btn btn-outline"
              href="/degrees-programs/member-institutions"
            >
              View member institutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Building & Facilities */}
      <section id="facilities">
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Our campus</div>
              <h2>Building &amp; Facilities</h2>
            </div>
          </div>
          <div className="program-grid">
            {[
              {
                image:
                  "https://i0.wp.com/www.education.edu/wp-content/uploads/2022/08/RHEC-Main-Page-Header.png?resize=2600%2C1000&ssl=1",
                name: "Main Building",
                desc: "Five floors of classrooms, offices, a library, and student support services in downtown Roanoke.",
              },
              {
                image:
                  "https://www.education.edu/wp-content/uploads/external/00f3981cab8d7549033b0d314539dd2e-690x460-c-center.jpg",
                name: "Computer Labs",
                desc: "Fully equipped computer labs available for academic work and credit coursework.",
              },
              {
                image:
                  "https://i0.wp.com/www.education.edu/wp-content/uploads/2024/12/RU-Nursing-1.jpg?fit=1000%2C600&ssl=1",
                name: "Specialized Labs",
                desc: "Advanced manufacturing, health sciences, and workforce training labs with industry-standard equipment.",
              },
              {
                image:
                  "https://www.education.edu/wp-content/uploads/external/79859a804e718c7290312a78639a65f0-690x460-c-center.jpg",
                name: "RHEC Library",
                desc: "Research databases, study spaces, and interlibrary loan services for all RHEC students.",
              },
              {
                image:
                  "https://www.education.edu/wp-content/uploads/external/7c2da1a30be0aa34ef8d4f0b0c6483e1-690x460-c-center.jpg",
                name: "Conference & Event Spaces",
                desc: "Flexible meeting rooms and event venues available for campus and community use.",
              },
              {
                image:
                  "https://i0.wp.com/www.education.edu/wp-content/uploads/2024/12/CCMA-1.jpg?fit=1000%2C600&ssl=1",
                name: "Common Areas",
                desc: "Welcoming lounges, accessible restrooms, and café-style spaces throughout the building.",
              },
            ].map((f) => (
              <div className="card" key={f.name}>
                <div className="facility-card-image" aria-hidden>
                  <img src={f.image} alt="" loading="lazy" />
                </div>
                <h3>{f.name}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions & Parking */}
      <section
        id="directions"
        style={{ background: "var(--sand)", padding: "72px 0" }}
      >
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Getting here</div>
              <h2>Directions &amp; Parking</h2>
            </div>
          </div>
          <div className="directions-address">
            <div>
              <div className="eyebrow">Visit RHEC</div>
              <h3>
                108 North Jefferson Street
                <br />
                Roanoke, VA 24016
              </h3>
              <p>(540) 767-6000</p>
            </div>
            <Link
              className="btn"
              href="https://maps.google.com/?q=108+North+Jefferson+Street+Roanoke+VA+24016"
              target="_blank"
              rel="noreferrer"
            >
              Get directions ↗
            </Link>
          </div>
          <div className="directions-grid">
            {[
              {
                label: "",
                title: "By car",
                desc: "From I-581 North, take the Elm Avenue / Downtown exit. Turn right on Jefferson Street; RHEC is on the left.",
              },
              {
                label: "",
                title: "Parking",
                desc: "Surface lots are available adjacent to the building. Evening and weekend parking is free; permits apply during daytime hours.",
              },
              {
                label: "",
                title: "Public transit",
                desc: "Valley Metro buses serve downtown Roanoke. Route 1 stops within one block of RHEC.",
              },
              {
                label: "",
                title: "Accessible arrival",
                desc: "The Jefferson Street entrance provides elevator access to every floor. Contact us before your visit for assistance.",
              },
            ].map((d) => (
              <div className="directions-card" key={d.title}>
                <span>{d.label}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Questions about RHEC?"
        body="Our team is happy to help with directions, program information, or anything else you need to get started."
        href="/contact"
        label="Contact RHEC"
      />
    </>
  );
}
