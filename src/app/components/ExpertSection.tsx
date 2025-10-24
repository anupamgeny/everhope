"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type Doctor = {
  image?: string;
  name?: string;
  doctorDesc?: string;
  tagline?: string;
  experience?: string;
  interests?: string;
  focusAreas: string[];
  profileLink?: string;
};

type DoctorsProps = {
  doctors: Doctor[];
};
const ExpertSection = ({ doctors }: DoctorsProps) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const handleViewMore = () => {
    if (visibleCount < doctors.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3);
    }
  };
  return (
    <section className="flex flex-1 items-center justify-center py-14">
      <div className="mx-5 w-full max-w-7xl">
        <h2 className="text-center">
          <span className="text-[#666666]">Meet the Experts </span>
          <span className="font-medium text-[var(--primary-color)]">
            Behind Your Care
          </span>
        </h2>
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {doctors.slice(0, visibleCount).map((doc, idx) => (
            <div
              key={idx}
              className="max-w-md items-start rounded-lg border border-gray-200 bg-white p-4 shadow"
            >
              {/* Left Image */}
              <div className="flex">
                <div>
                  <Image
                    src={doc.image!}
                    alt={doc.name!}
                    width={104}
                    height={40}
                    className="rounded-xl bg-[#E6E7E9]"
                  />
                  <Link
                    href={doc.profileLink!}
                    className="mx-auto mt-2 inline-block text-sm font-bold"
                  >
                    View Profile
                  </Link>
                </div>
                {/* Right Text */}
                <div className="ml-4 flex-1">
                  <h6 className="mb-1 text-[var(--primary-color)]">
                    {doc.name}
                  </h6>
                  <p className="text-sm">{doc.doctorDesc}</p>
                  <p>
                    <span className="font-semibold">Experience:</span>{" "}
                    {doc.experience}
                  </p>
                </div>
              </div>
              <div className="my-4 border-1 border-r-0 border-l-0 border-gray-400 py-1 text-center text-sm font-semibold uppercase">
                {doc.tagline}
              </div>
              <div>
                <p className="font-semibold">Clinical Interests</p>
                <p className="text-sm">{doc.interests}</p>
                <p className="mt-2 font-semibold">Cancer Focus Areas</p>
                <ul className="ml-4 grid list-disc grid-cols-2 gap-4 text-sm marker:text-red-500">
                  {doc.focusAreas.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 w-full text-center">
          <button
            onClick={handleViewMore}
            className="rounded-4xl border-2 border-[#0D3D3E] bg-[#0D3D3E] px-6 py-3 text-white hover:bg-transparent hover:text-[#0D3D3E]"
          >
            {visibleCount < doctors.length ? "View More" : "View Less"}
          </button>
        </div>
      </div>
    </section>
  );
};
export default ExpertSection;
