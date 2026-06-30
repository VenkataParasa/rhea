"use client";
import { useMemo, useState } from "react";
import { PageHero, AnnouncementCard } from "@/components/content";
import { announcements } from "@/data/announcements";

const categories = [
  "Student Services",
  "Foundation",
  "Workforce",
  "Events",
  "Testing Center",
  "Campus",
];

export default function AnnouncementsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const results = useMemo(() => {
    return announcements.filter((a) => {
      const haystack = `${a.title} ${a.summary} ${a.type}`.toLowerCase();
      return (
        (!query || haystack.includes(query.toLowerCase())) &&
        (!category || a.category === category)
      );
    });
  }, [query, category]);

  return (
    <>
      <PageHero
        title="Announcements & News"
        description="Campus updates, program news, scholarship opportunities, and stories from the RHEC community."
        crumbs={[{ label: "Home", href: "/" }, { label: "Announcements" }]}
        imageSrc="/images/open-house.jpg"
      />

      <section>
        <div className="wrap">
          <div className="filter-bar">
            <input
              type="search"
              aria-label="Search announcements"
              placeholder="Search announcements…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              aria-label="Filter by category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <p
            style={{
              color: "var(--muted)",
              fontSize: ".9rem",
              marginBottom: 24,
            }}
          >
            <strong style={{ color: "var(--deep)" }}>{results.length}</strong>{" "}
            announcements
          </p>

          <div className="program-grid">
            {results.length > 0 ? (
              results.map((a) => <AnnouncementCard item={a} key={a.slug} />)
            ) : (
              <div className="empty-state">
                <strong>No announcements match that search.</strong>
                Try different keywords or clear the filter.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
