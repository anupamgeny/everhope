import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="inline-block font-bold text-blue-600">
          <Image
            src="/assets/images/common/logo.webp"
            alt="Logo"
            width={104}
            height={40}
          />
        </Link>
        <nav className="space-x-6">
          <a href="#" className="text-sm md:text-base">
            Book an Appointment
          </a>
          <a href="#" className="text-sm md:text-base">
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
