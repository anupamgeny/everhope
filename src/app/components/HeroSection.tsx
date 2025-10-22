import { FaRegCheckCircle } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import ContactForm from "./Form";

const HeroSection = () => {
  return (
    <section className="flex flex-1 items-center justify-center bg-[var(--bg-one)] bg-[url('/assets/images/lp-1/banner-vactor.png')] bg-left-top bg-no-repeat">
      <div className="relative min-h-[600px] w-full bg-[url('/assets/images/lp-1/mobile-banner.png')] bg-bottom-right bg-no-repeat lg:min-h-[555px] lg:bg-[url('/assets/images/lp-1/desktop-banner.png')] lg:bg-bottom-left">
        <div className="mx-auto flex max-w-7xl items-center justify-end pt-20">
          {/* Single right column */}
          <div className="mx-5 w-full lg:mx-0 lg:w-1/2">
            <div className="mb-5 flex w-fit gap-2 rounded-[20px] border-2 border-white bg-[#FFFFFF]/50 p-2 px-3 shadow-md">
              <FaRegCheckCircle className="h-6 w-6 text-red-400" />
              <span className="font-semibold">No Cost EMI Available</span>
            </div>
            <h2 className="mb-4 text-2xl leading-9 font-semibold md:text-4xl lg:text-5xl lg:leading-16 lg:font-bold">
              Get upto{" "}
              <span className="primary__color">25% off on Chemotherapy</span> in
              Gurgaon
            </h2>
            <ul>
              <li className="flex items-center gap-2 text-sm md:text-lg">
                <IoCheckmarkCircleSharp className="text-2xl text-[var(--primary-color)]" />{" "}
                Private chemo suites | Dedicated care managers
              </li>
              <li className="flex items-center gap-2 text-sm md:text-lg">
                <IoCheckmarkCircleSharp className="text-2xl text-[var(--primary-color)]" />{" "}
                Integrated nutrition & psychological support
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-5 mx-auto flex max-w-7xl items-center justify-end md:static md:mt-3">
          {/* Single right column */}
          <div className="mx-5 w-full lg:w-1/2 lg:px-5">
            <div className="flex w-fit gap-3 rounded-2xl bg-[#FFE8EE] p-3 shadow">
              <div className="h-9 w-9 rounded-lg bg-red-600 p-2 md:h-auto">
                <GoShieldCheck className="self-center text-lg text-white" />
              </div>
              <span className="self-center text-sm md:text-[1rem]">
                Treatments fully covered under all Govt. panel & Private
                insurances*
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-end py-10">
          {/* Single right column */}
          <div className="mx-5 w-full lg:mx-0 lg:w-1/2">
            <ContactForm className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
