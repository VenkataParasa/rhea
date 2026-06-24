"use client";

import { useEffect, useId, useRef, useState } from "react";

type Sponsor = { name: string; src: string };
const VISIBLE_LOGOS = 4;
const GAP = 30;

export function SponsorCarousel({ sponsors }: { sponsors: Sponsor[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const carouselId = useId();
  const viewportRef = useRef<HTMLDivElement>(null);
  const loopedSponsors = [...sponsors, ...sponsors];

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const updateItemWidth = () =>
      setItemWidth(
        (viewport.clientWidth - GAP * (VISIBLE_LOGOS - 1)) / VISIBLE_LOGOS
      );
    updateItemWidth();
    const observer = new ResizeObserver(updateItemWidth);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(
      () => setActiveIndex((index) => index + 1),
      3200
    );
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (activeIndex !== sponsors.length) return;
    const resetTimer = window.setTimeout(() => {
      setIsAnimating(false);
      setActiveIndex(0);
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => setIsAnimating(true))
      );
    }, 550);
    return () => window.clearTimeout(resetTimer);
  }, [activeIndex, sponsors.length]);

  const visibleStart = activeIndex % sponsors.length;
  const visibleEnd = Math.min(visibleStart + VISIBLE_LOGOS, sponsors.length);
  const movePrevious = () => setActiveIndex((index) => Math.max(index - 1, 0));
  const moveNext = () =>
    setActiveIndex((index) => Math.min(index + 1, sponsors.length));

  return (
    <section
      className="sponsor-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testing sponsors"
    >
      <div className="sponsor-carousel-controls">
        <button
          className="carousel-button"
          type="button"
          onClick={movePrevious}
          disabled={activeIndex === 0}
          aria-controls={carouselId}
          aria-label="Show previous testing sponsor"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          className="carousel-button"
          type="button"
          onClick={moveNext}
          aria-controls={carouselId}
          aria-label="Show next testing sponsor"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div
        ref={viewportRef}
        id={carouselId}
        className="sponsor-carousel-viewport"
      >
        <div
          className="sponsor-track"
          style={{
            transform: `translateX(-${activeIndex * (itemWidth + GAP)}px)`,
            transition: isAnimating ? "transform 540ms ease" : "none",
          }}
        >
          {loopedSponsors.map((sponsor, index) => (
            <div
              className="sponsor-logo"
              style={{ width: itemWidth || undefined }}
              key={`${sponsor.name}-${index}`}
              aria-hidden={index >= sponsors.length || undefined}
            >
              <img
                src={sponsor.src}
                alt={index < sponsors.length ? `${sponsor.name} logo` : ""}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-play"
        type="button"
        onClick={() => setIsPlaying((playing) => !playing)}
        aria-pressed={isPlaying}
        aria-label={
          isPlaying
            ? "Pause automatic sponsor scrolling"
            : "Start automatic sponsor scrolling"
        }
      >
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        <span className="sr-only">
          {isPlaying
            ? "Pause automatic sponsor scrolling"
            : "Start automatic sponsor scrolling"}
        </span>
      </button>
    </section>
  );
}
