import Image from "next/image";
import BookButton from "./BookButton";
const CommonSection = () => {
  return (
    <section className="mx-auto w-full px-3 pt-5 pb-10 lg:w-7xl">
      <div className="mx-auto mb-10 w-full max-w-4xl">
        <h2 className="text-center text-4xl md:text-5xl">
          <span className="text-[#666666]">From Common to Rare, </span>
          <span className="font-semibold text-[var(--primary-color)]">
            We Treat it All.
          </span>
        </h2>
      </div>
      <div className="mx-auto mt-5 grid w-full max-w-7xl grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="max-w-md items-start rounded-3xl border border-gray-200 bg-white p-4 shadow">
          <Image
            src="/assets/images/lp-1/common-icon1.png"
            alt="asdsad"
            width={60}
            height={60}
            className="mx-auto mb-5"
          />
          <p className="text-center text-xl text-[var(--text-color-one)]">
            Breast Cancer
          </p>
        </div>
        <div className="max-w-md items-start rounded-3xl border border-gray-200 bg-white p-4 shadow">
          <Image
            src="/assets/images/lp-1/common-icon2.png"
            alt="asdsad"
            width={60}
            height={60}
            className="mx-auto mb-5"
          />
          <p className="text-center text-xl text-[var(--text-color-one)]">
            Oral Cancer
          </p>
        </div>
        <div className="max-w-md items-start rounded-3xl border border-gray-200 bg-white p-4 shadow">
          <Image
            src="/assets/images/lp-1/common-icon3.png"
            alt="asdsad"
            width={60}
            height={60}
            className="mx-auto mb-5"
          />

          <p className="text-center text-xl text-[var(--text-color-one)]">
            Colorectal Cancer
          </p>
        </div>
        <div className="max-w-md items-start rounded-3xl border border-gray-200 bg-white p-4 shadow">
          <Image
            src="/assets/images/lp-1/common-icon4.png"
            alt="asdsad"
            width={60}
            height={60}
            className="mx-auto mb-5"
          />
          <p className="text-center text-xl text-[var(--text-color-one)]">
            Cervical Cancer
          </p>
        </div>
        <div className="max-w-md items-start rounded-3xl border border-gray-200 bg-white p-4 shadow">
          <Image
            src="/assets/images/lp-1/common-icon5.png"
            alt="asdsad"
            width={60}
            height={60}
            className="mx-auto mb-5"
          />
          <p className="text-center text-xl text-[var(--text-color-one)]">
            Lung Cancer
          </p>
        </div>
        <div className="max-w-md items-start rounded-3xl border border-gray-200 bg-white p-4 shadow">
          <Image
            src="/assets/images/lp-1/common-icon6.png"
            alt="asdsad"
            width={60}
            height={60}
            className="mx-auto mb-5"
          />
          <p className="text-center text-xl text-[var(--text-color-one)]">
            Bone Cancer
          </p>
        </div>
      </div>
      <BookButton />
    </section>
  );
};
export default CommonSection;
