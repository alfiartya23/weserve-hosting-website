export default function CallToAction() {
  return (
    <>
      <section className="closing mx-auto max-w-6xl bg-[#640EF1] p-14 rounded-3xl">
        {/* Using Grid for 2 columns */}
        <div className=" grid grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-y-10">
            <div className="w-fit gap-x-2 px-3 py-2 small-badge flex flex-row bg-white rounded-full items-center">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                  stroke="#080C2E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M8.00001 3.5H9.00001C7.05001 9.34 7.05001 15.66 9.00001 21.5H8.00001" stroke="#080C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 3.5C16.95 9.34 16.95 15.66 15 21.5" stroke="#080C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 16.5V15.5C8.84 17.45 15.16 17.45 21 15.5V16.5" stroke="#080C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 9.5001C8.84 7.5501 15.16 7.5501 21 9.5001" stroke="#080C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div className="text-base font-semibold text-indigo-950">We host more than 120,000 websites</div>
            </div>
            <div className="flex flex-col gap-y-2 ">
              <h1 className="text-white font-['Clash_Display'] text-5xl">Start Growing Today</h1>
              <p className="text-base leading-loose text-white">We provide a variety of servers to grow your users acquisition much user-friendly and boosting up sales.</p>
            </div>
            <div className="flex flex-row items-center gap-x-4">
              <a href="#" className="font-bold bg-yellow-400 hover:bg-indigo-950 rounded-full text-indigo-950 px-10 py-4 text-lg">
                Explore More
              </a>
              <a href="#" className="flex gap-x-2 text-white font-semibold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 5.25V9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M7.39999 22H14.6" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 18.3999V21.9999" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.4955 7.25H18.5045" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.6957 7.25H15.7047" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.8954 7.25H12.9044" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Schedule a Demo
              </a>
            </div>
          </div>

          {/* Card Container */}
          <div className="grid grid-cols-3 gap-x-5 gap-y-5">
            {/* Card - 1 */}
            <div className="group hover:bg-[#080C2E] flex flex-col items-center justify-center cta-card bg-white p-5 rounded-2xl gap-y-5">
              <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.5833 42.1666H29.0833C38.6667 42.1666 42.5 38.3333 42.5 28.7499V17.2499C42.5 7.66659 38.6667 3.83325 29.0833 3.83325H17.5833C8.00001 3.83325 4.16667 7.66659 4.16667 17.2499V28.7499C4.16667 38.3333 8.00001 42.1666 17.5833 42.1666Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M18.7333 17.1924L13.9608 21.9649C13.405 22.5207 13.405 23.4599 13.9608 24.0157L18.7333 28.7882" stroke="#640EF1" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.9333 17.1924L32.7058 21.9649C33.2617 22.5207 33.2617 23.4599 32.7058 24.0157L27.9333 28.7882" stroke="#640EF1" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div className="flex flex-col items-center justify-center gap-y-0">
                <h3 className="group-hover:text-white font-bold text-lg text-indigo-950">Web Crawl</h3>
                <a href="#" className="group-hover:block hidden text-base font-semibold text-gray-500">
                  Learn More
                </a>
              </div>
            </div>
            {/* Card - 2 */}
            <div className="group hover:bg-[#080C2E] flex flex-col items-center justify-center cta-card bg-white p-5 rounded-2xl gap-y-5">
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.52 35.2876V31.3201" stroke="#640EF1" stroke-width="3" stroke-linecap="round" />
                <path d="M23.3333 35.2875V27.3525" stroke="#640EF1" stroke-width="3" stroke-linecap="round" />
                <path d="M33.1467 35.2874V23.3657" stroke="#640EF1" stroke-width="3" stroke-linecap="round" />
                <path d="M33.1467 11.7124L32.265 12.7474C27.3775 18.4591 20.8225 22.5032 13.52 24.3241" stroke="#640EF1" stroke-width="3" stroke-linecap="round" />
                <path d="M27.5308 11.7124H33.1467V17.3091" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M17.5833 42.6666H29.0833C38.6667 42.6666 42.5 38.8333 42.5 29.2499V17.7499C42.5 8.16659 38.6667 4.33325 29.0833 4.33325H17.5833C8.00001 4.33325 4.16667 8.16659 4.16667 17.7499V29.2499C4.16667 38.8333 8.00001 42.6666 17.5833 42.6666Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="flex flex-col items-center justify-center gap-y-0">
                <h3 className="group-hover:text-white font-bold text-lg text-indigo-950">Fast Report</h3>
                <a href="#" className="group-hover:block hidden text-base font-semibold text-gray-500">
                  Learn More
                </a>
              </div>
            </div>
            {/* Card - 3 */}
            <div className="relative group hover:bg-[#080C2E] flex flex-col items-center justify-center cta-card bg-white p-5 rounded-2xl gap-y-5">
              {/* White Effect */}
              <div className="group-hover:block hidden absolute top-1 right-3">
                <svg width="128" height="128" viewBox="0 0 178 221" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              {/* Content */}
              <div className="z-10 flex flex-col items-center justify-center gap-y-5">
                {/* Icon White */}
                <svg className="group-hover:block hidden" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7724 5.02424L11.2083 8.6084C9.00411 9.43256 7.20245 12.0392 7.20245 14.3967V28.6375C7.20245 30.8992 8.69747 33.87 10.5183 35.2309L18.76 41.3834C21.4625 43.4151 25.9091 43.4151 28.6116 41.3834L36.8533 35.2309C38.6741 33.87 40.1691 30.8992 40.1691 28.6375V14.3967C40.1691 12.0392 38.3674 9.43256 36.1633 8.6084L26.5991 5.02424C24.9699 4.43007 22.3633 4.43007 20.7724 5.02424Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.6666 21.6801C23.59 21.6801 23.4941 21.6801 23.4175 21.6801C21.6158 21.6226 20.1783 20.1275 20.1783 18.3067C20.1783 16.4475 21.6925 14.9333 23.5516 14.9333C25.4108 14.9333 26.925 16.4475 26.925 18.3067C26.9058 20.1467 25.4683 21.6226 23.6666 21.6801Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.8525 27.0467C18.0125 28.2734 18.0125 30.2858 19.8525 31.5125C21.9416 32.9117 25.3725 32.9117 27.4616 31.5125C29.3016 30.2858 29.3016 28.2734 27.4616 27.0467C25.3916 25.6475 21.9608 25.6475 19.8525 27.0467Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {/* Icon Purple - set to hidden in bg White */}
                <svg className="group-hover:hidden" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7724 5.02424L11.2083 8.6084C9.00411 9.43256 7.20245 12.0392 7.20245 14.3967V28.6375C7.20245 30.8992 8.69747 33.87 10.5183 35.2309L18.76 41.3834C21.4625 43.4151 25.9091 43.4151 28.6116 41.3834L36.8533 35.2309C38.6741 33.87 40.1691 30.8992 40.1691 28.6375V14.3967C40.1691 12.0392 38.3674 9.43256 36.1633 8.6084L26.5991 5.02424C24.9699 4.43007 22.3633 4.43007 20.7724 5.02424Z"
                    stroke="#640EF1"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.6666 21.6801C23.59 21.6801 23.4941 21.6801 23.4175 21.6801C21.6158 21.6226 20.1783 20.1275 20.1783 18.3067C20.1783 16.4475 21.6925 14.9333 23.5516 14.9333C25.4108 14.9333 26.925 16.4475 26.925 18.3067C26.9058 20.1467 25.4683 21.6226 23.6666 21.6801Z"
                    stroke="#640EF1"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.8525 27.0467C18.0125 28.2734 18.0125 30.2858 19.8525 31.5125C21.9416 32.9117 25.3725 32.9117 27.4616 31.5125C29.3016 30.2858 29.3016 28.2734 27.4616 27.0467C25.3916 25.6475 21.9608 25.6475 19.8525 27.0467Z"
                    stroke="#640EF1"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="flex flex-col items-center justify-center gap-y-0">
                  <h3 className="group-hover:text-white font-bold text-lg text-indigo-950">Anti-DDoS</h3>
                  <a href="#" className="group-hover:block hidden text-base font-semibold text-gray-500">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Card - 4 */}
            <div className="group hover:bg-[#080C2E] flex flex-col items-center justify-center cta-card bg-white p-5 rounded-2xl gap-y-5">
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.52 35.2876V31.3201" stroke="#640EF1" stroke-width="3" stroke-linecap="round" />
                <path d="M23.3333 35.2875V27.3525" stroke="#640EF1" stroke-width="3" stroke-linecap="round" />
                <path d="M33.1467 35.2874V23.3657" stroke="#640EF1" stroke-width="3" stroke-linecap="round" />
                <path d="M33.1467 11.7124L32.265 12.7474C27.3775 18.4591 20.8225 22.5032 13.52 24.3241" stroke="#640EF1" stroke-width="3" stroke-linecap="round" />
                <path d="M27.5308 11.7124H33.1467V17.3091" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M17.5833 42.6666H29.0833C38.6667 42.6666 42.5 38.8333 42.5 29.2499V17.7499C42.5 8.16659 38.6667 4.33325 29.0833 4.33325H17.5833C8.00001 4.33325 4.16667 8.16659 4.16667 17.7499V29.2499C4.16667 38.8333 8.00001 42.6666 17.5833 42.6666Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="flex flex-col items-center justify-center gap-y-0">
                <h3 className="group-hover:text-white font-bold text-lg text-indigo-950">Auto Scale</h3>
                <a href="#" className="group-hover:block hidden text-base font-semibold text-gray-500">
                  Learn More
                </a>
              </div>
            </div>
            {/* Card - 5 */}
            <div className="group hover:bg-[#080C2E] flex flex-col items-center justify-center cta-card bg-white p-5 rounded-2xl gap-y-5">
              <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4583 42.6667V29.25" stroke="#640EF1" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.4583 10.0833V4.33325" stroke="#640EF1" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M33.5417 42.6667V36.9167" stroke="#640EF1" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M33.5417 17.7499V4.33325" stroke="#640EF1" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M18.2083 13.9166V25.4166C18.2083 27.5249 17.25 29.2499 14.375 29.2499H10.5417C7.66668 29.2499 6.70834 27.5249 6.70834 25.4166V13.9166C6.70834 11.8083 7.66668 10.0833 10.5417 10.0833H14.375C17.25 10.0833 18.2083 11.8083 18.2083 13.9166Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.2917 21.5833V33.0833C39.2917 35.1917 38.3333 36.9167 35.4583 36.9167H31.625C28.75 36.9167 27.7917 35.1917 27.7917 33.0833V21.5833C27.7917 19.475 28.75 17.75 31.625 17.75H35.4583C38.3333 17.75 39.2917 19.475 39.2917 21.5833Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="flex flex-col items-center justify-center gap-y-0">
                <h3 className="group-hover:text-white font-bold text-lg text-indigo-950">AI Perform</h3>
                <a href="#" className="group-hover:block hidden text-base font-semibold text-gray-500">
                  Learn More
                </a>
              </div>
            </div>
            {/* Card - 6 */}
            <div className="group hover:bg-[#080C2E] flex flex-col items-center justify-center cta-card bg-white p-5 rounded-2xl gap-y-5">
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.675 36.8784H14.6583C13.8533 36.8784 12.9525 36.2459 12.6841 35.4793L4.74914 13.2843C3.61831 10.1026 4.94081 9.1251 7.66247 11.0801L15.1375 16.4276C16.3833 17.2901 17.8016 16.8493 18.3383 15.4501L21.7116 6.46094C22.785 3.58594 24.5675 3.58594 25.6408 6.46094L29.0141 15.4501C29.5508 16.8493 30.9691 17.2901 32.1958 16.4276L39.2108 11.4251C42.2008 9.27844 43.6383 10.3709 42.4116 13.8401L34.6683 35.5176C34.3808 36.2459 33.48 36.8784 32.675 36.8784Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M13.125 42.6667H34.2083" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.875 27.3333H28.4583" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <div className="flex flex-col items-center justify-center gap-y-0">
                <h3 className="group-hover:text-white font-bold text-indigo-950">Top Plugins+</h3>
                <a href="#" className="group-hover:block hidden text-base font-semibold text-gray-500">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
