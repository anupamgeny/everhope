import Image from "next/image";

const CentreOfExcellence = () => {
  return (
    <section className="bg-[#F1F1F1] py-16">
      <div className="mx-4 md:mx-auto md:max-w-3xl">
        <h2 className="text-center">
          <span className="text-[#666666]">A </span>
          <span className="font-medium text-[var(--primary-color)]">
            Centre of Excellence{" "}
          </span>
          <span className="text-[#666666]">for All Your Needs</span>
        </h2>
      </div>
      <div className="mx-4 mt-5 grid grid-cols-1 gap-4 md:max-w-7xl md:grid-cols-2 lg:mx-auto">
        <div className="max-full items-start rounded-xl bg-[#FFFFFF] p-4 lg:p-8">
          <div className="flex gap-4">
            <Image
              src="/assets/images/lp-1/Medical-Oncology.png"
              alt="asdsad"
              width={80}
              height={80}
              className=""
            />
            <div>
              <h5 className="text-xl font-bold md:text-2xl">
                Medical Oncology
              </h5>
              <p className="text-sm md:text-lg">
                Chemotherapy{" "}
                <span className="text-[var(--primary-color)]">|</span>{" "}
                Immunotherapy{" "}
                <span className="text-[var(--primary-color)]"> |</span> Targeted
                therapy
              </p>
            </div>
          </div>
        </div>
        <div className="max-full items-start rounded-xl bg-[#FFFFFF] p-4 lg:p-8">
          <div className="flex gap-4">
            <Image
              src="/assets/images/lp-1/Surgical-Oncology.png"
              alt="asdsad"
              width={80}
              height={80}
              className=""
            />
            <div>
              <h5 className="text-xl font-bold md:text-2xl">
                Surgical Oncology
              </h5>
              <p className="text-sm md:text-lg">Minimal invasive surgery</p>
            </div>
          </div>
        </div>
        <div className="max-full items-start rounded-xl bg-[#FFFFFF] p-4 lg:p-8">
          <div className="flex gap-4">
            <Image
              src="/assets/images/lp-1/Molecular-Oncology.png"
              alt="asdsad"
              width={80}
              height={80}
              className=""
            />
            <div>
              <h5 className="text-xl font-bold md:text-2xl">
                Molecular Oncology
              </h5>
              <p className="text-sm md:text-lg">
                Precise therapy targeting cancer mechanisms
              </p>
            </div>
          </div>
        </div>
        <div className="max-full items-start rounded-xl bg-[#FFFFFF] p-4 lg:p-8">
          <div className="flex gap-4">
            <Image
              src="/assets/images/lp-1/Moleculer-Tumour-Board.png"
              alt="asdsad"
              width={80}
              height={80}
              className=""
            />
            <div>
              <h5 className="text-xl font-bold md:text-2xl">
                Molecular Tumour Board
              </h5>
              <p className="text-sm md:text-lg">
                Collabrative cancer treatment planning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CentreOfExcellence;
