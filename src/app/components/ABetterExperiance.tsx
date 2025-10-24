"use client";
import { useState } from "react";
import styles from "../styles/ExperienceCard.module.css";
import { usePathname } from "next/navigation";
import ExperienceCard from "@/app/components/ExperianceCard";

const cards = [
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon1.webp",
    title: "Private chemo suites",
    description: "No shared spaces — calm, quiet, and dignified.",
    image: "/assets/images/breast-cancer/Experience1.webp",
  },
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon2.webp",
    title: "Comfort for caregivers too",
    description: "Lounge seating, workspace, and peace of mind.",
    image: "/assets/images/breast-cancer/Experience2.webp",
  },
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon3.webp",
    title: "A dedicated care manager",
    description: "One person guiding your journey start to finish.",
    image: "/assets/images/breast-cancer/Experience3.webp",
  },
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon5.webp",
    title: "Seamless Support, End to End",
    description:
      "Pick-up, valet, insurance, scheduling — we take care of it all.",
    image: "/assets/images/breast-cancer/Experience5.webp",
  },
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon6.webp",
    title: "Support Beyond Medicine",
    description:
      "Emotional, nutritional, and psychological care — built into every plan.",
    image: "/assets/images/breast-cancer/Experience6.webp",
  },
];

export default function ABetterExperience() {
  const [index, setIndex] = useState(cards.length * 5); // Start at the middle of many clones
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const pathname = usePathname();
  const effectivePathname =
    pathname || (typeof window !== "undefined" ? window.location.pathname : "");

  // Card width for desktop (407px) + gap (24px)
  const cardWidth = 407;
  const cardGap = 24; // 1.5rem
  const visibleCards = 6; // Changed from 2.2 to show all cards

  // Create infinite carousel by cloning cards many times - 10 sets for true infinity
  const clonedCards = [];
  for (let i = 0; i < 10; i++) {
    clonedCards.push(...cards);
  }
  const totalWidth = clonedCards.length * (cardWidth + cardGap);
  const translateX = -(index * (cardWidth + cardGap));

  // Handle transition end to reset position seamlessly when getting close to edges
  const handleTransitionEnd = () => {
    const buffer = cards.length * 2; // 2 sets as buffer
    if (index >= clonedCards.length - buffer) {
      // Near the end, reset to middle
      setIsTransitioning(false);
      setIndex(cards.length * 5 + (index % cards.length));
      setTimeout(() => setIsTransitioning(true), 50);
    } else if (index < buffer) {
      // Near the beginning, reset to middle
      setIsTransitioning(false);
      setIndex(cards.length * 5 + (index % cards.length));
      setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  // Carousel navigation - truly infinite
  const prev = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  const next = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <section style={{ width: "100%", padding: "1.5rem 1.5rem" }}>
      <h2 className="mb-5 text-center text-3xl md:text-4xl">
        <span className="text-[#666666]">More Than Treatment: </span>
        <br />
        <span className="font-semibold text-[var(--primary-color)]">
          A Better Experience
        </span>
      </h2>
      {/* Desktop carousel */}
      <div
        className="experience-desktop-carousel"
        style={{
          display: "none",
          paddingTop: "1.5rem",
          overflowX: "hidden",
          overflowY: "visible",
          maxWidth: `${visibleCards * (cardWidth + cardGap)}px`,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: `${cardGap}px`,
            transition: isTransitioning
              ? "transform 0.4s cubic-bezier(.4,0,.2,1)"
              : "none",
            transform: `translateX(${translateX}px)`,
            width: `${totalWidth}px`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {clonedCards.map((card, i) => (
            <div
              key={`${i}-${card.title}`}
              style={{
                flex: `0 0 ${cardWidth}px`,
                maxWidth: cardWidth,
                minWidth: cardWidth,
              }}
            >
              <ExperienceCard {...card} />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "1.2rem",
          }}
        >
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              background: "white",
              border: "1px solid #d1d5db",
              borderRadius: "9999px",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#CE0135"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next"
            style={{
              background: "white",
              border: "1px solid #d1d5db",
              borderRadius: "9999px",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#CE0135"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile column layout */}
      <div
        className="experience-mobile-col"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
          maxWidth: 360,
          margin: "0 auto",
          paddingTop: "1.5rem",
        }}
      >
        {cards.map((card, i) => (
          <ExperienceCard key={i} {...card} />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <button
          onClick={() => setIsOpenForm(true)}
          style={{
            background: "#CE0135",
            color: "white",
            border: "none",
            borderRadius: "2rem",
            padding: "1rem 2.5rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            fontFamily: "inherit",
            cursor: "pointer",
            transition: "background 150ms",
            display: "block",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#A5022B")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#CE0135")}
        >
          Book an Appointment
        </button>
      </div>
      <style jsx>{`
        @media (min-width: 900px) {
          .experience-desktop-carousel {
            display: block !important;
          }
          .experience-mobile-col {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .experience-desktop-carousel {
            display: none !important;
          }
          .experience-mobile-col {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
