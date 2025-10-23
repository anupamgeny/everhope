import Image from "next/image";

const CentreOfExcellence = () => {
    return <section className="bg-[#F1F1F1] py-16">
        <div className="mx-auto w-full max-w-2xl">
            <h2 className="text-center text-3xl md:text-4xl">
            <span className="text-[#666666]">A{" "}</span>
            <span className="text-[var(--primary-color)]">
            Centre of Excellence{" "}
          </span>
            <span className="text-[#666666]">for All Your Needs</span>
        </h2>
        </div>
        <div className="mx-auto mt-5 grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
            <div className="max-full items-start rounded-xl bg-[#FFFFFF] p-10">
                <div className="flex gap-4">
                    <Image
                        src="/assets/images/lp-1/Medical-Oncology.png"
                        alt="asdsad"
                        width={80}
                        height={80}
                        className=""
                    />
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold">Medical Oncology</h3>
                        <p className="text-sm md:text-lg">Chemotherapy{" "}<span className="text-[var(--primary-color)]">|</span>{" "}Immunotherapy{" "}<span className="text-[var(--primary-color)]">{" "}|</span>{" "}Targeted therapy</p>
                    </div>
                </div>
            </div>
            <div className="max-full items-start rounded-xl bg-[#FFFFFF] p-10">
                <div className="flex gap-4">
                    <Image
                        src="/assets/images/lp-1/Surgical-Oncology.png"
                        alt="asdsad"
                        width={80}
                        height={80}
                        className=""
                    />
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold">Surgical Oncology</h3>
                        <p className="text-sm md:text-lg">Minimal invasive surgery</p>
                    </div>
                </div>
            </div>
            <div className="max-full items-start rounded-xl bg-[#FFFFFF] p-10">
                <div className="flex gap-4">
                    <Image
                        src="/assets/images/lp-1/Molecular-Oncology.png"
                        alt="asdsad"
                        width={80}
                        height={80}
                        className=""
                    />
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold">Molecular Oncology</h3>
                        <p className="text-sm md:text-lg">
                            Precise therapy targeting cancer mechanisms
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-full items-start rounded-xl bg-[#FFFFFF] p-10">
                <div className="flex gap-4">
                    <Image
                        src="/assets/images/lp-1/Moleculer-Tumour-Board.png"
                        alt="asdsad"
                        width={80}
                        height={80}
                        className=""
                    />
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold">Molecular Tumour Board</h3>
                        <p className="text-sm md:text-lg">Collabrative cancer treatment planning</p>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}
export default CentreOfExcellence;