import global from "../assets/global.svg";

export default function Hero() {
  return (
    <section className="hero max-w-6xl mx-auto py-12">
      <div className="flex flex-row">
        <div className="flex flex-col gap-y-10">
          <div className="w-fit gap-x-2 px-3 py-2 small-badge flex flex-row bg-white rounded-full">
            <img src={global} alt="Global" />
            <div className="text-base font-semibold text-indigo-950">We host more than 120,000 websites</div>
          </div>
          <div className="gap-y-2 flex-col">
            <h1 className="text-indigo-950 font-['Clash_Display'] text-[70px] leading-none">
              Grow Online <br /> Business Faster.
            </h1>
            <p className="text-base leading-loose text-gray-500">
              We provide a variety of servers to grow your users <br /> acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-row items-center gap-x-4">
            <a href="#" className="bg-violet-700 hover:bg-indigo-950 font-semibold rounded-full text-white px-10 py-4 text-lg">
              Try Free Trial
            </a>
            <a href="#" className="flex gap-x-2">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z"
                  stroke="#640EF1"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M7.89999 22H15.1" stroke="#640EF1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.5 18.4V22" stroke="#640EF1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.9955 7.25H19.0045" stroke="#640EF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.1957 7.25H16.2047" stroke="#640EF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3954 7.25H13.4044" stroke="#640EF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
