"use client";
import Link from "next/link";
import { PageHero, CTASection } from "@/components/content";
import { SponsorCarousel } from "@/components/sponsor-carousel";

const faqs = [
  {
    question: "What ID do I need to bring?",
    answer:
      "You must bring a valid, government-issued photo ID such as a driver's license, state ID, or passport. Some test providers may require additional documentation — check your appointment confirmation for specifics.",
  },
  {
    question: "How early should I arrive?",
    answer:
      "Plan to arrive at least 15 minutes before your scheduled start time. Late arrivals may not be admitted and could forfeit their appointment.",
  },
  {
    question: "Can I reschedule my appointment?",
    answer:
      "Rescheduling policies vary by test provider. Contact the Testing Center at least 48 hours in advance if you need to change your appointment. Some exams may have fees for late changes.",
  },
  {
    question: "What items are not allowed in the testing room?",
    answer:
      "Personal items including phones, bags, food, drinks, and notes must be secured outside the testing area. Lockers are available. Approved calculators or scratch paper are provided by the proctor if permitted by the test provider.",
  },
  {
    question: "What types of tests are offered?",
    answer:
      "The RHEC Testing Center offers placement testing, certification and professional licensure exams (including IT, healthcare, and trades), proctored online exams for enrolled students, and standardized test administration for approved providers.",
  },
  {
    question: "Is the Testing Center accessible?",
    answer:
      "Yes. The Testing Center is ADA accessible. If you require accommodations, contact us at least one week before your test date to make arrangements. Documentation from your institution or healthcare provider may be required.",
  },
  {
    question: "How do I get a copy of my scores?",
    answer:
      "Scores are provided directly by the test provider after your exam. The Testing Center does not retain or distribute individual scores. For placement test results, contact your institution's academic advising office.",
  },
];

export default function TestingCenterPage() {
  return (
    <>
      <PageHero
        title="Testing Center"
        description="A comfortable, professional environment for placement testing, certification exams, and proctored coursework at RHEC."
        crumbs={[{ label: "Home", href: "/" }, { label: "Testing Center" }]}
        imageSrc="/images/testing-center-header.webp"
      />

      <section>
        <div
          className="wrap"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40 }}
        >
          <div>
            <div className="eyebrow">What we offer</div>
            <h2
              style={{
                color: "var(--deep)",
                fontSize: "clamp(1.8rem,3vw,2.5rem)",
                letterSpacing: "-.05em",
                margin: "10px 0 18px",
              }}
            >
              Testing support for students and professionals.
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>
              The RHEC Testing Center offers a quiet, secure environment for a
              wide variety of exams. Whether you're taking a placement test,
              earning a certification, or completing a proctored exam for your
              online course, our trained proctors are here to ensure a smooth
              experience.
            </p>

            <h3 style={{ color: "var(--deep)", marginTop: 32 }}>
              Types of tests administered
            </h3>
            <ul className="checklist">
              {[
                "College placement and assessment testing",
                "Professional certification and licensure exams (IT, healthcare, trades)",
                "Proctored online coursework for enrolled students",
                "Standardized academic tests for approved providers",
                "GED and high school equivalency testing",
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="card" style={{ position: "sticky", top: 100 }}>
              <div className="badge" style={{ marginBottom: 10 }}>
                Schedule a test
              </div>
              <h3 style={{ marginTop: 4 }}>Book your appointment</h3>
              <p style={{ color: "var(--muted)", fontSize: ".9rem" }}>
                Online scheduling is available for most exams. Walk-in
                availability is limited.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginTop: 12,
                }}
              >
                <Link className="btn" href="/contact">
                  Schedule now →
                </Link>
                <Link className="btn btn-outline" href="/contact">
                  Contact Testing Center
                </Link>
              </div>
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: 800,
                    color: "var(--bronze)",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    marginBottom: 8,
                  }}
                >
                  Hours
                </div>
                <div
                  style={{
                    fontSize: ".86rem",
                    color: "var(--muted)",
                    lineHeight: 1.8,
                  }}
                >
                  Mon–Thu: 8:00 a.m. – 7:00 p.m.
                  <br />
                  Friday: 8:00 a.m. – 5:00 p.m.
                  <br />
                  Saturday: 9:00 a.m. – 1:00 p.m.
                </div>
              </div>
              <div
                style={{
                  marginTop: 14,
                  paddingTop: 14,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: 800,
                    color: "var(--bronze)",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    marginBottom: 8,
                  }}
                >
                  Location
                </div>
                <div style={{ fontSize: ".86rem", color: "var(--muted)" }}>
                  Room 130, RHEC Campus
                  <br />
                  108 N. Jefferson St., Roanoke
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "0px 0" }}>
        <div className="wrap">
          <div className="section-top">
            <div>
              <div className="eyebrow">Recognized providers</div>
              <h2>Test sponsors</h2>
            </div>
            <p>
              Testing partnerships and platforms currently represented at RHEC.
            </p>
          </div>
          <SponsorCarousel
            sponsors={[
              { name: "CLEP", src: "/images/clep.jpg" },
              { name: "Distance Education", src: "/images/distance.jpg" },
              { name: "DSST", src: "/images/dsst.jpg" },
              { name: "GED", src: "/images/ged.jpg" },
              { name: "Kryterion", src: "/images/kryterion.jpg" },
              { name: "Meazure Learning", src: "/images/meazure.png" },
              {
                name: "National Testing Network",
                src: "/images/national-testing-network.png",
              },
              { name: "PAN", src: "/images/pan.jpg" },
              { name: "ParaPro Assessment", src: "/images/parapro.jpg" },
              { name: "Pearson VUE", src: "/images/pearson-vue.jpg" },
              { name: "The Praxis Series", src: "/images/praxis.jpg" },
              { name: "PSI", src: "/images/psi.png" },
            ]}
          />
        </div>
      </section>

      {/* Preparation checklist */}
      <section style={{ background: "var(--mint)", padding: "72px 0" }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div className="section-top">
            <div>
              <div className="eyebrow">Be ready</div>
              <h2>Test day checklist</h2>
            </div>
          </div>
          <ul className="checklist">
            {[
              "Confirm your appointment date, time, and location",
              "Bring a valid, government-issued photo ID",
              "Review any materials provided by your test sponsor",
              "Get a good night of sleep before your test",
              "Arrive at least 15 minutes early for check-in",
              "Leave personal items (phone, bag, food) in your vehicle or a provided locker",
              "Inform the proctor if you need any accommodations before your session begins",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div className="section-top">
            <div>
              <div className="eyebrow">Common questions</div>
              <h2>FAQs</h2>
            </div>
          </div>
          <div className="accordion">
            {faqs.map((faq, i) => (
              <div className="accordion-item" key={i}>
                <button
                  className="accordion-trigger"
                  aria-expanded="false"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const expanded =
                      btn.getAttribute("aria-expanded") === "true";
                    btn.setAttribute("aria-expanded", String(!expanded));
                    const body = btn.nextElementSibling as HTMLElement;
                    if (body) body.classList.toggle("open", !expanded);
                  }}
                >
                  {faq.question}
                  <span className="acc-icon" aria-hidden>
                    +
                  </span>
                </button>
                <div className="accordion-body" role="region">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need testing support?"
        body="Contact our Testing Center team with questions about scheduling, exam types, or accommodations."
        href="/contact"
        label="Contact Testing Center"
      />
    </>
  );
}
