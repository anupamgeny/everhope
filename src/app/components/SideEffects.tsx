import Image from "next/image";
import BookButton from "./BookButton";
const SideEffect = () => {
  return (
    <section className="mx-auto my-16 w-full py-5 pt-5 lg:w-7xl">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-center">
          <span className="text-[#666666]">All the Power of </span>
          <span className="font-semibold text-[var(--primary-color)]">
            Modern Chemotherapy.
          </span>
          <br />
          <span className="text-[#666666]">Without the Usual </span>
          <span className="font-semibold text-[var(--primary-color)]">
            Side Effects.
          </span>
        </h2>
        <p className="mt-5 text-center text-lg">
          <strong>Chemotherapy</strong> is one of the most powerful tools in
          cancer care. At Everhope, we <strong>personalise</strong> it using{" "}
          <strong>precision oncology</strong>
        </p>
      </div>
      <div className="mx-5 max-w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="mt-10">
            <Image
              src="/assets/images/lp-1/side-effects.png"
              alt="asdsad"
              width={483}
              height={525}
              className="rounded-3xl"
            />
          </div>
          <div className="mt-10">
            <div className="text-[var(--text-color-one)]">
              <h3 className="mb-10 text-center text-2xl font-bold md:text-3xl">
                What we look at?
              </h3>
              <ul className="text-md mx-8 grid list-disc grid-cols-1 gap-4 md:mx-0 md:text-xl">
                <li>Your cancer&apos;s biology (ER/PR, HER2, BRCA)</li>
                <li>Your stage and response profile</li>
                <li>
                  What your body actually needs — and what it doesn&apos;t
                </li>
              </ul>
            </div>
            <div className="mt-10 text-[var(--text-color-one)]">
              <h3 className="mb-10 text-center text-2xl font-bold md:text-3xl">
                How will it help the patients ?
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xl text-[var(--text-color-one)] sm:grid-cols-2">
                <div>
                  <div className="">
                    <Image
                      src="/assets/images/lp-1/se-icon1.png"
                      alt="asdsad"
                      width={42}
                      height={42}
                      className="mx-auto mb-5 rounded-3xl"
                    />
                  </div>
                  <p className="mx-auto text-center text-[16px] md:text-lg">
                    Fewer side effects
                  </p>
                </div>
                <div>
                  <div className="">
                    <Image
                      src="/assets/images/lp-1/se-icon2.png"
                      alt="asdsad"
                      width={42}
                      height={42}
                      className="mx-auto mb-5 rounded-3xl"
                    />
                  </div>
                  <p className="mx-auto text-center text-[16px] md:text-lg">
                    No over-treatment
                  </p>
                </div>
                <div>
                  <div className="">
                    <Image
                      src="/assets/images/lp-1/se-icon3.png"
                      alt="asdsad"
                      width={42}
                      height={42}
                      className="mx-auto mb-5 rounded-3xl"
                    />
                  </div>
                  <p className="mx-auto text-center text-[16px] md:text-lg">
                    Faster recovery
                  </p>
                </div>
                <div>
                  <div className="">
                    <Image
                      src="/assets/images/lp-1/se-icon4.png"
                      alt="asdsad"
                      width={42}
                      height={42}
                      className="mx-auto mb-5 rounded-3xl"
                    />
                  </div>
                  <p className="mx-auto text-center text-[16px] md:text-lg">
                    Improved Quality of Life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookButton />
      </div>
    </section>
  );
};
export default SideEffect;
