"use client";

import styles from "../styles/ExperienceCard.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookButton from "./BookButton";

interface Card {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface CardsProps {
  cards: Card[];
}
const BetterExperience = ({ cards }: CardsProps) => {
  return (
    <section className="mx-auto w-[100%] px-3 pt-5 pb-10">
      <div className="mx-auto mb-10">
        <h2 className="text-center text-3xl md:text-4xl">
          <span className="text-[#666666]">More Than Treatment: </span>
          <br />
          <span className="font-semibold text-[var(--primary-color)]">
            A Better Experience
          </span>
        </h2>
      </div>
      <div className="mx-5">
        <Swiper
          modules={[FreeMode, Navigation]}
          spaceBetween={10}
          freeMode={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // small phones
            480: { slidesPerView: 1 }, // larger phones
            640: { slidesPerView: 2 }, // small tablets
            768: { slidesPerView: 2 }, // tablets
            1024: { slidesPerView: 3 }, // small laptops
            1280: { slidesPerView: 3 }, // desktops
            1440: { slidesPerView: 4 }, // large desktops
          }}
          className="overflow-visible !pt-10"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className={styles.card}>
                {/* Icon */}
                <div className={styles.iconContainer}>
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={60}
                    height={60}
                    className={styles.iconImg}
                    style={{
                      objectFit: "contain",
                      width: "100% !important",
                      height: "auto",
                    }}
                  />
                </div>

                {/* Title */}
                <div className={styles.title}>{card.title}</div>

                {/* Description */}
                <div className={styles.description}>{card.description}</div>

                {/* Bottom Image */}
                <div className={styles.bottomImageWrapper}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    className={styles.bottomImage}
                    width={247}
                    height={188}
                    style={{ objectFit: "cover", borderRadius: "0.75rem" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-4 flex justify-center gap-6">
          <button className="custom-prev rounded-[50px] border-2 border-gray-300 bg-white p-2">
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
          <button className="custom-next rounded-[50px] border-2 border-gray-300 bg-white p-2">
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
      <BookButton />
    </section>
  );
};
export default BetterExperience;
