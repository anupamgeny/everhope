import YouTubeFacade from "./Youtube";
const StepInside = () => {
  return (
    <section className="mx-auto w-full px-3 pt-5 pb-10 lg:w-7xl">
      <div className="mx-auto mb-10 w-full max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl">
          <span className="text-[#666666]">Step inside, </span>
          <span className="font-semibold text-[var(--primary-color)]">
            Everhope
          </span>
        </h2>
        <p className="mt-5 text-center text-2xl text-[#666666]">
          A quiet preview of what to expect — and what makes us different.
        </p>
      </div>
      <div className="mb-6 flex justify-center md:mb-8">
        <div className="flex items-center gap-2 rounded-xl border border-[#E7E7E7] bg-white px-3 py-2 shadow-lg transition-shadow duration-300 hover:shadow-xl md:gap-4 md:rounded-2xl md:px-6 md:py-4">
          {/* Google Logo */}
          <div className="flex-shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="h-6 w-6 md:h-8 md:w-8"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>

          {/* Vertical Separator */}
          <div className="h-5 w-px bg-[#E7E7E7]"></div>

          {/* Rating Content */}
          <div className="flex items-center gap-1 md:gap-2">
            <span className="text-lg font-bold text-[#CE0135] md:text-2xl">
              5
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFA500"
              className="h-4 w-4 md:h-5 md:w-5"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-medium text-gray-800 md:text-lg">
              Rated Online
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <YouTubeFacade videoId="W1uR8ylWDxU" title="Cancer Care Video" />
      </div>
    </section>
  );
};
export default StepInside;
