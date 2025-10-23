"use client";
import { Navigation } from "swiper/modules";
import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

interface TestimonialData {
  id: number;
  name: string;
  company: string;
  image?: string;
  rating: number;
  timeAgo: string;
  message?: string;
  video?: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Jhon Doe",
    company: "Founder, KitchenVlogs",
    rating: 5,
    timeAgo: "12 weeks ago",
    message:
      "Absolutely love this product! It made my workflow much smoother and saved me hours every week.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    company: "Creative Designer",
    rating: 5,
    timeAgo: "10 weeks ago",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    name: "Priya Mehta",
    company: "Marketing Lead, BrightEdge",
    rating: 5,
    timeAgo: "8 weeks ago",
    message:
      "A wonderful experience from start to finish. I highly recommend this to anyone looking for quality.",
  },
  {
    id: 4,
    name: "Diya Jhon",
    company: "Product Manager",
    rating: 5,
    timeAgo: "6 weeks ago",
    message: "Exceptional quality and great customer support!",
  },
  {
    id: 5,
    name: "Ritika Sharma",
    company: "UI Designer",
    rating: 5,
    timeAgo: "4 weeks ago",
    message: "Love it! Easy to use and intuitive design.",
  },
];

const getInitial = (name: string) => name.charAt(0).toUpperCase();

const getRandomBg = (id: number) => {
  const colors = [
    "bg-green-500",
    "bg-blue-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];
  return colors[id % colors.length];
};

const Testimonials = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-gradient-to-b from-white via-[#F9EDE3] to-white py-20">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-center text-4xl md:text-5xl">
          <span className="text-[#666666]">Patients & Families </span>
          <span className="text-[var(--primary-color)]">
            Feel the Difference
          </span>
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl pt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          className="overflow-visible" // 👈 allow shadows outside
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error Swiper type issue
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error Swiper type issue
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="mb-8 h-full overflow-visible">
              <div className="h-full">
                <div className="flex min-h-[350px] flex-col justify-between rounded-2xl bg-white p-6 shadow-lg">
                  {/* Text testimonial */}
                  {!t.video && (
                    <>
                      <div>
                        <div className="mb-4 flex items-center">
                          {t.image ? (
                            <img
                              src={t.image}
                              alt={t.name}
                              className="mr-4 h-14 w-14 rounded-full object-cover"
                            />
                          ) : (
                            <div
                              className={`mr-4 flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold text-white ${getRandomBg(
                                t.id,
                              )}`}
                            >
                              {getInitial(t.name)}
                            </div>
                          )}
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              {t.name}
                            </h4>
                            <p className="text-sm text-gray-500">{t.company}</p>
                          </div>
                        </div>

                        <div className="mb-3 flex items-center">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <IoMdStar
                              key={i}
                              size={18}
                              className="fill-yellow-500 text-yellow-500"
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-500">
                            {t.timeAgo}
                          </span>
                        </div>
                      </div>

                      <p className="mt-2 flex-grow leading-relaxed text-gray-600">
                        “{t.message}”
                      </p>
                    </>
                  )}
                  {t.video && (
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <video
                          controls
                          className="h-52 w-full rounded-lg object-cover"
                          poster={t.image || undefined}
                        >
                          <source src={t.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        <div className="mt-4 flex items-center justify-center">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <IoMdStar
                              key={i}
                              size={18}
                              className="fill-yellow-500 text-yellow-500"
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-500">
                            {t.timeAgo}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <h4 className="font-semibold text-gray-800">
                          {t.name}
                        </h4>
                        <p className="text-sm text-gray-500">{t.company}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-0 flex justify-center gap-6">
          <div
            ref={prevRef}
            className="cursor-pointer p-2 text-3xl text-[#4E4E4E] transition"
          >
            &#8592;
          </div>
          <div
            ref={nextRef}
            className="cursor-pointer p-2 text-3xl text-[#4E4E4E] transition"
          >
            &#8594;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
