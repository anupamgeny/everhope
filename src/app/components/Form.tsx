type ContactFormProps = {
  className?: string;
};
const ContactForm = ({ className }: ContactFormProps) => {
  return (
    <div
      className={`w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md md:max-w-4/5 ${className}`}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Connect with a Care Expert
      </h5>
      <form className="mx-auto mt-4 space-y-4">
        <div>
          <input
            type="text"
            id="name"
            className="focus:ring-opacity-50 mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:border-[var(--primary-color)] focus:ring focus:ring-[var(--primary-color)]"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex items-center rounded-xl border border-gray-300 bg-white p-1">
          <span className="flex w-14 gap-2 px-2 text-gray-950">
            +91 <span className="text-gray-400">|</span>
          </span>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            className="w-full rounded-r-md border-0 p-2 pl-0 focus:ring-0 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-4xl border-2 border-[var(--primary-color)] bg-[var(--primary-color)] px-4 py-3 font-semibold text-white shadow hover:bg-transparent hover:text-[var(--primary-color)] focus:outline-none"
        >
          Get a Call Back
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
