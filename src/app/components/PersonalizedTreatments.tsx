import Image from "next/image";
const PersonalizedTreatments = () => {
  return (
    <section className="mx-auto w-full px-3 pt-5 pb-10 lg:w-7xl">
      <div className="mx-auto mb-10 w-full max-w-4xl">
        <h2 className="text-center text-4xl md:text-5xl">
          <span className="text-[#666666]">Personalized treatments,</span>
          <span className="font-semibold text-[var(--primary-color)]">
            tailored to your stage and biology
          </span>
        </h2>
      </div>
      <div className="mx-auto mt-5 grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
        <div className="max-full items-start rounded-xl bg-[#FEE6E2] p-10">
          <div className="flex gap-4">
            <Image
              src="/assets/images/lp-1/chemotherapy.webp"
              alt="asdsad"
              width={70}
              height={62}
              className=""
            />
            <div>
              <h3 className="text-2xl font-bold">Chemotherapy</h3>
              <p className="text-lg">Targeting malignant cell growth</p>
            </div>
          </div>
        </div>
        <div className="max-full items-start rounded-xl bg-[#FEE6E2] p-10">
          <div className="flex gap-4">
            <Image
              src="/assets/images/lp-1/immunotherapy.webp"
              alt="asdsad"
              width={70}
              height={62}
              className=""
            />
            <div>
              <h3 className="text-2xl font-bold">Immunotherapy</h3>
              <p className="text-lg">Boosting your body&apos;s defenses</p>
            </div>
          </div>
        </div>
        <div className="max-full items-start rounded-xl bg-[#FEE6E2] p-10">
          <div className="flex gap-4">
            <Image
              src="/assets/images/lp-1/targettherapy.webp"
              alt="asdsad"
              width={70}
              height={62}
              className=""
            />
            <div>
              <h3 className="text-2xl font-bold">Targeted therapy</h3>
              <p className="text-lg">
                Precision treatments for specific cellular changes
              </p>
            </div>
          </div>
        </div>
        <div className="max-full items-start rounded-xl bg-[#FEE6E2] p-10">
          <div className="flex gap-4">
            <Image
              src="/assets/images/lp-1/hormonaltherapy.webp"
              alt="asdsad"
              width={70}
              height={62}
              className=""
            />
            <div>
              <h3 className="text-2xl font-bold">Hormonal therapy</h3>
              <p className="text-lg">Blocking cancer-feeding hormones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PersonalizedTreatments;
