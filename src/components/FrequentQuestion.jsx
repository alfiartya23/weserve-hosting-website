export default function FrequentQuestion() {
  return (
    <>
      <section className="faq-wrapper max-w-6xl mx-auto py-12">
        <h1 className="font-['Clash_Display'] text-indigo-950 text-5xl text-center mb-8">Frequently Asked Questions</h1>

        {/* Grid Question */}
        <div className="grid grid-cols-2 gap-x-8">
          {/* First Column */}
          <div className="parent-cards-faq flex flex-col gap-y-6">
            {/* Why do we need */}
            <div className="flex flex-row card-faq gap-x-6 bg-white rounded-2xl p-5 justify-between">
              <div className="flex flex-col gap-y-5">
                <h3 className="font-bold text-xl text-indigo-950">Why do we need to use Kapp?</h3>
              </div>
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="15" fill="white" />
                  <path d="M20.94 12.7124L16.05 17.6024C15.4725 18.1799 14.5275 18.1799 13.95 17.6024L9.06 12.7124" stroke="#080C2E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
            <div className="flex flex-row card-faq gap-x-6 bg-white rounded-2xl p-5 ">
              <div className="flex flex-col gap-y-5">
                <h3 className="font-bold text-xl text-indigo-950">Do we need to pay 6 months per item?</h3>
                <p className="text-base text-gray-500 leading-loose">Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
                <a href="#" className="flex gap-x-2 text-violet-700 font-semibold w-24">
                  Learn More
                </a>
              </div>
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="30" height="30" rx="15" transform="rotate(-180 30 30)" fill="#080C2E" />
                  <path d="M9.06 17.2876L13.95 12.3976C14.5275 11.8201 15.4725 11.8201 16.05 12.3976L20.94 17.2876" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>

            {/* Migrate */}
            <div className="flex flex-row card-faq gap-x-6 bg-white rounded-2xl p-5 justify-between">
              <div className="flex flex-col gap-y-5">
                <h3 className="font-bold text-xl text-indigo-950">How to migrate from other service?</h3>
              </div>
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="15" fill="white" />
                  <path d="M20.94 12.7124L16.05 17.6024C15.4725 18.1799 14.5275 18.1799 13.95 17.6024L9.06 12.7124" stroke="#080C2E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Second Column */}
          <div className="parent-cards-faq flex flex-col gap-y-6">
            <div className="flex flex-row card-faq gap-x-6 bg-white rounded-2xl p-5 ">
              <div className="flex flex-col gap-y-5">
                <h3 className="font-bold text-xl text-indigo-950">What if data doesn’t get stored?</h3>
                <p className="text-base text-gray-500 leading-loose">Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments</p>
                <a href="#" className="flex gap-x-2 text-violet-700 font-semibold w-24">
                  Learn More
                </a>
              </div>
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="30" height="30" rx="15" transform="rotate(-180 30 30)" fill="#080C2E" />
                  <path d="M9.06 17.2876L13.95 12.3976C14.5275 11.8201 15.4725 11.8201 16.05 12.3976L20.94 17.2876" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>

            {/* Guarantee */}
            <div className="flex flex-row card-faq gap-x-6 bg-white rounded-2xl p-5 justify-between">
              <div className="flex flex-col gap-y-5">
                <h3 className="font-bold text-xl text-indigo-950">Can we guarantee no any loss at all?</h3>
              </div>
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="15" fill="white" />
                  <path d="M20.94 12.7124L16.05 17.6024C15.4725 18.1799 14.5275 18.1799 13.95 17.6024L9.06 12.7124" stroke="#080C2E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>

            {/* CTA Schedule */}
            <div className="flex flex-row card-faq gap-x-6 bg-[#080C2E] rounded-2xl p-5 justify-between items-center">
              <div className="flex flex-col gap-y-5">
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
                    <path d="M7.4 22H14.6" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 18.3999V21.9999" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.4955 7.25H18.5045" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.6957 7.25H15.7047" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.8954 7.25H12.9044" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  Send e-mail to us for other questions
                </a>
              </div>
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="30" width="30" height="30" rx="15" transform="rotate(-90 0 30)" fill="white" />
                  <path d="M12.7125 9.05994L17.6025 13.9499C18.18 14.5274 18.18 15.4724 17.6025 16.0499L12.7125 20.9399" stroke="#080C2E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
