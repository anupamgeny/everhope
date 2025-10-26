import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="mx-auto w-full pt-5 md:pt-20">
        <div className="mx-auto h-auto lg:w-7xl">
          <div className="mx-3 grid md:mx-0 md:grid-cols-2 md:divide-x md:divide-y-0 md:divide-[var(--primary-color)]">
            {/* Left Section */}
            <div className="p-2 md:flex md:items-center md:justify-center">
              <h2 className="text-center text-4xl text-[#666666] md:text-right md:text-5xl">
                Visit our{" "}
                <span className="font-[600] text-[var(--primary-color)]">
                  Centre
                  <br />
                  of Excellence
                </span>
              </h2>
            </div>

            {/* Small Divider for mobile only */}
            <div className="mx-auto block h-[0.5px] w-1/5 bg-[var(--primary-color)] md:hidden"></div>

            {/* Right Section */}
            <div className="flex items-center p-2">
              <div className="h-auto w-full">
                <h2 className="mb-3 text-center text-3xl !font-[500] text-[var(--primary-color)] md:mb-5 md:text-left md:text-4xl">
                  Gurgaon EBD 65
                </h2>
                <p className="text-center text-lg text-[#666666] md:text-left md:text-2xl">
                  EBD 65, Sector 65, Golf Course
                  <br />
                  Extension Road, Gurgaon
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="mt-5 w-full bg-[#FEE6E2]">
        <div className="mx-3 p-10 text-center">
          <Image
            src="/assets/images/common/logo.webp"
            alt="Logo"
            width={260}
            height={100}
            className="mx-auto"
          />
          <div className="flex justify-center gap-4 pt-5 text-sm text-[#6b7280]">
            <span>© EverHope Oncology 2025</span>
            <span>|</span>
            <span>Privacy</span>
            <span>|</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
