import global from "../assets/global.svg";
import device_message from "../assets/device_message.svg";

export default function Hero() {
  return (
    <section className="hero max-w-6xl mx-auto py-12">
      <div className="flex flex-row items-center justify-between">
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
            <a href="#" className="flex gap-x-2 text-violet-700 font-semibold">
              <img src={device_message} alt="Device Message" />
              Schedule a Demo
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img className="h-[550px]" src="/images/illustration-header.png" alt="Illustration Header" />
        </div>
      </div>
    </section>
  );
}
