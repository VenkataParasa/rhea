'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { primaryNav } from '@/data/navigation';
import { programs } from '@/data/programs';
import { announcements } from '@/data/announcements';
import { documents } from '@/data/documents';
import { staff } from '@/data/staff';
import { events } from '@/data/events';

type SearchSuggestion = {
  title: string;
  type: string;
  href: string;
  keywords: string;
};

const searchSuggestions: SearchSuggestion[] = [
  ...primaryNav.flatMap((item) => [
    { title: item.label, type: 'Page', href: item.href, keywords: `${item.label} ${item.href}` },
    ...(item.children ?? []).map((child) => ({
      title: child.label,
      type: item.label,
      href: child.href,
      keywords: `${child.label} ${item.label} ${child.href}`,
    })),
  ]),
  ...programs.map((program) => ({
    title: program.name,
    type: 'Program',
    href: `/degrees-programs/${program.slug}`,
    keywords: `${program.name} ${program.provider} ${program.credential} ${program.subject} ${program.summary}`,
  })),
  ...announcements.map((announcement) => ({
    title: announcement.title,
    type: 'Announcement',
    href: `/announcements/${announcement.slug}`,
    keywords: `${announcement.title} ${announcement.type} ${announcement.summary}`,
  })),
  ...documents.map((document) => ({
    title: document.title,
    type: 'Document',
    href: '/documents',
    keywords: `${document.title} ${document.category} ${document.audience} ${document.description}`,
  })),
  ...staff.map((person) => ({
    title: person.name,
    type: 'Staff',
    href: '/staff-directory',
    keywords: `${person.name} ${person.role} ${person.department} ${person.email}`,
  })),
  ...events.map((event) => ({
    title: event.title,
    type: 'Event',
    href: '/events',
    keywords: `${event.title} ${event.month} ${event.day} ${event.year} ${event.location} ${event.summary}`,
  })),
];

export function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const visibleSuggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return searchSuggestions
        .filter((item) =>
          ['Degrees & Programs', 'Testing Center', 'Rent a Space', 'Directions & Parking', 'Staff Directory', 'Announcements'].includes(item.title)
        )
        .slice(0, 6);
    }

    return searchSuggestions
      .filter((item) => `${item.title} ${item.type} ${item.keywords}`.toLowerCase().includes(query))
      .slice(0, 6);
  }, [searchQuery]);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!desktopMenuRef.current?.contains(event.target as Node)) {
        setOpenDesktopMenu(null);
      }
      if (!searchRef.current?.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDesktopMenu(null);
        setSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    searchInputRef.current?.focus();
  }, [searchOpen]);

  function closeSearch() {
    setSearchOpen(false);
    setSearchQuery('');
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = visibleSuggestions[0];
    if (!target) return;
    router.push(target.href);
    closeSearch();
  }

  return (
    <>
      <div className="site-top">
        <header className="header">
          <nav className="nav wrap" aria-label="Main navigation">
            <Link className="brand" href="/" onClick={() => setMobileOpen(false)}>
              <span className="site-logo">
                <img src="/rhec-brand-logo.png" alt="Roanoke Higher Education Center" />
              </span>
            </Link>

            {/* Desktop menu */}
            <div className="menu" role="menubar" ref={desktopMenuRef}>
              {primaryNav.map((item) => (
                <div className="nav-item" key={item.href} role="none">
                  {item.children ? (
                    <Link
                      href={item.href}
                      role="menuitem"
                      aria-haspopup="menu"
                      aria-expanded={openDesktopMenu === item.href}
                      aria-controls={`submenu-${item.href.slice(1)}`}
                      onClick={(event) => {
                        event.preventDefault();
                        setOpenDesktopMenu(openDesktopMenu === item.href ? null : item.href);
                        setSearchOpen(false);
                      }}
                    >
                      {item.label}<span className="chevron" aria-hidden="true">▾</span>
                    </Link>
                  ) : (
                    <Link href={item.href} role="menuitem" onClick={() => setOpenDesktopMenu(null)}>{item.label}</Link>
                  )}
                  {item.children && (
                    <div
                      className={`dropdown-menu${openDesktopMenu === item.href ? ' open' : ''}`}
                      id={`submenu-${item.href.slice(1)}`}
                      role="menu"
                      aria-label={`${item.label} submenu`}
                    >
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} role="menuitem" onClick={() => setOpenDesktopMenu(null)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="nav-tools">
              <div className={`header-search${searchOpen ? ' open' : ''}`} ref={searchRef}>
                <button
                  type="button"
                  className="icon-btn search-toggle"
                  aria-label={searchOpen ? 'Close search' : 'Search website'}
                  aria-expanded={searchOpen}
                  aria-controls="header-search-panel"
                  onClick={() => {
                    setSearchOpen((current) => !current);
                    setOpenDesktopMenu(null);
                  }}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                    <path d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z" />
                  </svg>
                </button>

                <div className="search-popover" id="header-search-panel">
                  <form className="header-search-form" role="search" onSubmit={submitSearch}>
                    <label className="sr-only" htmlFor="header-search-input">Search RHEC</label>
                    <input
                      ref={searchInputRef}
                      id="header-search-input"
                      type="search"
                      placeholder="Search programs, services, staff…"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <button type="submit" aria-label="Open first search suggestion">
                      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                        <path d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z" />
                      </svg>
                    </button>
                  </form>

                  <div className="search-suggestions" role="listbox" aria-label="Search suggestions">
                    {visibleSuggestions.length > 0 ? (
                      visibleSuggestions.map((suggestion) => (
                        <Link
                          key={`${suggestion.type}-${suggestion.title}-${suggestion.href}`}
                          href={suggestion.href}
                          role="option"
                          onClick={closeSearch}
                        >
                          <span>{suggestion.title}</span>
                          <small>{suggestion.type}</small>
                        </Link>
                      ))
                    ) : (
                      <p>No quick suggestions. Try another keyword.</p>
                    )}
                  </div>
                </div>
              </div>

              <button
                className="hamburger"
                aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={mobileOpen}
                onClick={() => {
                  setMobileOpen(!mobileOpen);
                  setSearchOpen(false);
                }}
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile nav overlay */}
      <nav
        className={`mobile-nav${mobileOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {primaryNav.map((item) => (
          <div className="mobile-nav-section" key={item.href}>
            {item.children ? (
              <>
                <button
                  style={{ width: '100%', background: 'none', border: 0, textAlign: 'left', padding: '14px 24px', fontWeight: 700, color: 'var(--deep)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  aria-expanded={openSection === item.href}
                  onClick={() => setOpenSection(openSection === item.href ? null : item.href)}
                >
                  {item.label} <span>{openSection === item.href ? '▴' : '▾'}</span>
                </button>
                {openSection === item.href && (
                  <div className="mobile-sub">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <div className="mobile-tools">
          <Link className="btn" href="/contact" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}
