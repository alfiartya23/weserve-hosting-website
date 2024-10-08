export default function Features() {
  return (
    <>
      <section className="features max-w-6xl mx-auto py-12">
        {/* Content */}
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="font-['Clash_Display'] font-medium text-indigo-950 text-5xl">Your Best Choice</h1>

          {/* Cards Container*/}
          <div className="flex flex-row justify-between gap-x-8">
            {/* --- Card 1 --- */}
            <div className="flex flex-col bg-white rounded-2xl gap-y-8 py-8 px-6">
              <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.0292 27.6V16.2917C32.0292 15.2375 31.1667 14.375 30.1125 14.375H24.5541" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.4292 11.5L23.9792 14.375L27.4292 17.25" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.9708 19.55V27.6" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M15.2584 18.975C17.3225 18.975 18.9959 17.3017 18.9959 15.2375C18.9959 13.1734 17.3225 11.5 15.2584 11.5C13.1942 11.5 11.5208 13.1734 11.5208 15.2375C11.5208 17.3017 13.1942 18.975 15.2584 18.975Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.9708 34.5C16.8762 34.5 18.4208 32.9554 18.4208 31.05C18.4208 29.1446 16.8762 27.6 14.9708 27.6C13.0654 27.6 11.5208 29.1446 11.5208 31.05C11.5208 32.9554 13.0654 34.5 14.9708 34.5Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.0292 34.5C33.9346 34.5 35.4792 32.9554 35.4792 31.05C35.4792 29.1446 33.9346 27.6 32.0292 27.6C30.1238 27.6 28.5792 29.1446 28.5792 31.05C28.5792 32.9554 30.1238 34.5 32.0292 34.5Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.75 42.1666H29.25C38.8333 42.1666 42.6667 38.3333 42.6667 28.75V17.25C42.6667 7.66665 38.8333 3.83331 29.25 3.83331H17.75C8.16668 3.83331 4.33334 7.66665 4.33334 17.25V28.75C4.33334 38.3333 8.16668 42.1666 17.75 42.1666Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="flex flex-col gap-y-1">
                <h3 className="font-bold text-slate-900">Extra Layers</h3>
                <p className="text-gray-500 text-base font-medium leading-relaxed">Making your project more secure avoiding DDoS</p>
              </div>
              <a href="#" className="text-base font-semibold text-violet-700">
                Learn more
              </a>
            </div>
            {/* --- Card 2 --- */}
            <div className="flex flex-col bg-white rounded-2xl gap-y-8 py-8 px-5">
              <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.2633 4.33167L37.7408 11.0592C39.1975 11.845 39.1975 14.0875 37.7408 14.8733L25.2633 21.6008C24.1517 22.195 22.8483 22.195 21.7367 21.6008L9.25917 14.8733C7.80251 14.0875 7.80251 11.845 9.25917 11.0592L21.7367 4.33167C22.8483 3.73751 24.1517 3.73751 25.2633 4.33167Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.41916 19.4158L19.015 25.2233C20.4525 25.9516 21.3725 27.4275 21.3725 29.0375V40.0008C21.3725 41.5917 19.705 42.6075 18.2867 41.8983L6.69083 36.0908C5.25333 35.3625 4.33333 33.8867 4.33333 32.2767V21.3133C4.33333 19.7225 6.00083 18.7066 7.41916 19.4158Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.5808 19.4158L27.985 25.2233C26.5475 25.9516 25.6275 27.4275 25.6275 29.0375V40.0008C25.6275 41.5917 27.295 42.6075 28.7133 41.8983L40.3092 36.0908C41.7467 35.3625 42.6667 33.8867 42.6667 32.2767V21.3133C42.6667 19.7225 40.9992 18.7066 39.5808 19.4158Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="flex flex-col gap-y-1">
                <h3 className="font-bold text-slate-900">Customizable</h3>
                <p className="text-gray-500 text-base font-medium leading-relaxed">Only install what your business needs to grow</p>
              </div>
              <a href="#" className="text-base font-semibold text-violet-700">
                Learn more
              </a>
            </div>
            {/* --- Card 3 --- */}
            <div className="relative flex flex-col bg-[#080C2E] rounded-2xl gap-y-8 py-8 px-5">
              <div className="absolute top-3 right-5">
                <svg width="178" height="221" viewBox="0 0 178 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Ellipse 2" filter="url(#filter0_f_1_371)">
                    <ellipse cx="97.65" cy="102.527" rx="32.0478" ry="76.7916" transform="rotate(30 97.65 102.527)" fill="#424560" />
                  </g>
                  <defs>
                    <filter id="filter0_f_1_371" x="0.27005" y="-15.8951" width="194.76" height="236.845" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_1_371" />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="z-10 flex flex-col gap-y-8">
                <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6867 34.7875V30.82" stroke="white" stroke-width="3" stroke-linecap="round" />
                  <path d="M23.5 34.7875V26.8525" stroke="white" stroke-width="3" stroke-linecap="round" />
                  <path d="M33.3133 34.7875V22.8658" stroke="white" stroke-width="3" stroke-linecap="round" />
                  <path d="M33.3133 11.2125L32.4317 12.2475C27.5442 17.9592 20.9892 22.0034 13.6867 23.8242" stroke="white" stroke-width="3" stroke-linecap="round" />
                  <path d="M27.6975 11.2125H33.3133V16.8092" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M17.75 42.1666H29.25C38.8333 42.1666 42.6667 38.3333 42.6667 28.75V17.25C42.6667 7.66665 38.8333 3.83331 29.25 3.83331H17.75C8.16667 3.83331 4.33334 7.66665 4.33334 17.25V28.75C4.33334 38.3333 8.16667 42.1666 17.75 42.1666Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex flex-col gap-y-1">
                  <h3 className="font-bold text-white">AI Automation</h3>
                  <p className="text-[#8D90A8]  text-base font-medium leading-relaxed">Decide the business flow based on latest reports</p>
                </div>
                <a href="#" className="text-base font-semibold text-white">
                  Learn more
                </a>
              </div>
            </div>
            {/* --- Card 4 --- */}
            <div className="flex flex-col bg-white rounded-2xl gap-y-8 py-8 px-5">
              <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11.9792V15.8125" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M42.6667 23V17.25C42.6667 7.66665 38.8333 3.83331 29.25 3.83331H17.75C8.16668 3.83331 4.33334 7.66665 4.33334 17.25V28.75C4.33334 38.3333 8.16668 42.1666 17.75 42.1666H23.5"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M19.6667 11.9792V15.8125" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 30.6667V34.5" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.6667 30.6667V34.5" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.3333 13.8958H35" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.33334 23H42.6667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M41.8233 38.9659C40.75 40.825 38.7375 42.0708 36.4375 42.0708C33.0067 42.0708 30.8983 38.6208 30.8983 38.6208M31.0325 32.7558C32.1058 30.8775 34.1183 29.6317 36.4375 29.6317C40.5967 29.6317 42.6667 33.0817 42.6667 33.0817M42.6667 29.2292V33.0625H38.8333M34.7316 38.6017H30.8983V42.1667"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="flex flex-col gap-y-1">
                <h3 className="font-bold text-slate-900">Auto-Scaling</h3>
                <p className="text-gray-500 text-base font-medium leading-relaxed">Have a long weekend without worrying any loss</p>
              </div>
              <a href="#" className="text-base font-semibold text-violet-700">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
