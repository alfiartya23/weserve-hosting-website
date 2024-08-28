import global from "../assets/global.svg";
import device_message from "../assets/device_message.svg";

export default function Benefits() {
  return (
    <section className="benefits max-w-6xl mx-auto py-12">
      <div className="flex flex-row items-center gap-x-24">
        {/* Image */}
        <div className="flex flex-row items-center">
          <img className="h-[500px]" src="/images/illustration_benefits.png" alt="Illustration Header" />
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="w-fit gap-x-2 px-3 py-2 small-badge flex flex-row bg-white rounded-full">
            <img src={global} alt="Global" />
            <div className="text-base font-semibold text-indigo-950">We host more than 120,000 websites</div>
          </div>
          <div className="gap-y-2 flex-col">
            <h1 className="text-indigo-950 font-['Clash_Display'] text-5xl leading-tight">
              We Have Very <br />
              Strong Ecosystem
            </h1>
            <p className="text-base text-gray-500 leading-loose">
              We provide a variety of servers to grow your users <br /> acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          {/* Benefits Items */}
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row bg-white rounded-2xl p-5 items-center gap-x-3">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.1925 42.1667H28.6925C38.2758 42.1667 42.1092 38.3334 42.1092 28.75V17.25C42.1092 7.66671 38.2758 3.83337 28.6925 3.83337H17.1925C7.60917 3.83337 3.77583 7.66671 3.77583 17.25V28.75C3.77583 38.3334 7.60917 42.1667 17.1925 42.1667Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.77583 24.3417L15.2758 24.3034C16.7133 24.3034 18.3233 25.3959 18.86 26.7375L21.045 32.2575C21.5433 33.5034 22.3292 33.5034 22.8275 32.2575L27.2167 21.1217C27.6383 20.0484 28.4242 20.01 28.9608 21.0259L30.9542 24.8017C31.5483 25.9325 33.0817 26.8525 34.3467 26.8525H42.1283"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex flex-col items">
                <h3 className="font-bold text-xl text-indigo-950">$880 Mio</h3>
                <p className="text-gray-500 text-base font-medium leading-relaxed">Company budget saved</p>
              </div>
            </div>

            <div className="flex flex-row bg-white rounded-2xl p-5 items-center gap-x-3">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.4 38.3333H27.6C35.2667 38.3333 38.3333 35.2666 38.3333 27.6V18.4C38.3333 10.7333 35.2667 7.66663 27.6 7.66663H18.4C10.7333 7.66663 7.66666 10.7333 7.66666 18.4V27.6C7.66666 35.2666 10.7333 38.3333 18.4 38.3333Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.125 32.5833H25.875C30.6667 32.5833 32.5833 30.6666 32.5833 25.875V20.125C32.5833 15.3333 30.6667 13.4166 25.875 13.4166H20.125C15.3333 13.4166 13.4167 15.3333 13.4167 20.125V25.875C13.4167 30.6666 15.3333 32.5833 20.125 32.5833Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M15.3525 7.66671V3.83337" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23 7.66671V3.83337" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.6667 7.66671V3.83337" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M38.3333 15.3334H42.1667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M38.3333 23H42.1667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M38.3333 30.6666H42.1667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.6667 38.3334V42.1667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.0192 38.3334V42.1667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.3525 38.3334V42.1667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.83334 15.3334H7.66667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.83334 23H7.66667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.83334 30.6666H7.66667" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23 18.5917L21.1983 21.735C20.7958 22.425 21.1217 23 21.9267 23H24.0733C24.8783 23 25.2042 23.575 24.8017 24.265L23 27.4083" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <div className="flex flex-col items">
                <h3 className="font-bold text-xl text-indigo-950">450,392</h3>
                <p className="text-gray-500 text-base font-medium leading-relaxed">All servers available</p>
              </div>
            </div>
            <div className="flex flex-row bg-white rounded-2xl p-5 items-center gap-x-3">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6183 21.3132C1.64827 21.9457 1.64827 34.9982 10.6183 35.6307H14.2984" stroke="#640EF1" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M10.7142 21.3133C4.56172 4.19744 30.5133 -2.64505 33.4841 15.3333C41.7833 16.3875 45.1375 27.4466 38.8509 32.9475C36.9342 34.6916 34.4617 35.6499 31.8742 35.6308H31.7016"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.5833 31.6825C32.5833 33.1008 32.2766 34.4424 31.7016 35.6308C31.5483 35.9758 31.3759 36.3016 31.1842 36.6083C29.5359 39.3875 26.4883 41.2658 23 41.2658C19.5117 41.2658 16.4641 39.3875 14.8158 36.6083C14.6241 36.3016 14.4517 35.9758 14.2984 35.6308C13.7234 34.4424 13.4167 33.1008 13.4167 31.6825C13.4167 26.3925 17.71 22.0991 23 22.0991C28.29 22.0991 32.5833 26.3925 32.5833 31.6825Z"
                  stroke="#640EF1"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M20.01 31.6825L21.9075 33.58L25.99 29.8042" stroke="#640EF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <div className="flex flex-col items">
                <h3 className="font-bold text-xl text-indigo-950">189 Mio</h3>
                <p className="text-gray-500 text-base font-medium leading-relaxed">Websites are running good</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-4">
            <a href="#" className="bg-violet-700 hover:bg-indigo-950 font-semibold rounded-full text-white px-10 py-4 text-lg">
              Explore More
            </a>
            <a href="#" className="flex gap-x-2 text-violet-700 font-semibold">
              <img src={device_message} alt="Device Message" />
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
