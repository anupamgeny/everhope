import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="mx-auto w-full pt-5">
        <div className="mx-auto h-[400px] md:h-auto lg:w-7xl">
          <div className="mx-3 grid h-64 divide-y-2 divide-[var(--primary-color)] md:mx-0 md:grid-cols-2 md:divide-x-2 md:divide-y-0">
            <div className="flex items-center justify-end p-10">
              <h2 className="text-center text-5xl text-[#666666] md:text-right">
                Find a Clinic{" "}
                <span className="text-[var(--primary-color)]">Near You</span>
              </h2>
            </div>
            <div className="flex items-center p-10">
              <div className="h-auto">
                <h2 className="mb-5 text-4xl font-bold text-[var(--primary-color)]">
                  Gurgaon EBD 65
                </h2>
                <p className="text-2xl text-[#666666] md:text-3xl">
                  EBD 65, Sector 65, Golf Course
                </p>
                <p className="pt-5 text-2xl text-[#666666] md:text-3xl">
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
