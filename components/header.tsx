'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { primaryNav } from '@/data/navigation';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!desktopMenuRef.current?.contains(event.target as Node)) {
        setOpenDesktopMenu(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenDesktopMenu(null);
    }

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <>
      <div className="utility">
        <div className="wrap">
          <Link href="/staff-directory">Staff Directory</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/announcements">Emergency Alerts</Link>
          <Link href="/search">Search</Link>
        </div>
      </div>

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
            <Link href="/search" className="icon-btn" aria-label="Search website">
              ⌕
            </Link>
            <button
              className="hamburger"
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>
      </header>

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
          <Link className="btn btn-outline" href="/search" onClick={() => setMobileOpen(false)}>
            Search
          </Link>
          <Link className="btn" href="/contact" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}
