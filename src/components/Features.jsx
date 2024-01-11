import hierarcy_square from "../assets/hierarchy_square.svg";
import cube from "../assets/cube.svg";
import status_up from "../assets/status_up.svg";
import driver_refresh from "../assets/driver_refresh.svg";

export default function Features() {
  return (
    <>
      <section className="hero max-w-6xl mx-auto py-12">
        <div className="flex flex-col items-center gap-[30px]">
          <h2 className="font-['Clash_Display'] font-semibold text-[46px] text-indigo-950">Your Best Choice</h2>

          <div className="flex flex-row justify-between gap-[30px]">
            {/* Card */}
            <div className="w-[260px] h-[283px] flex flex-col justify-start gap-[30px] py-[30px] px-6 bg-white rounded-2xl">
              <img className="w-[46px] h-[46px]" src={hierarcy_square} alt="" />
              <div className="flex flex-col justify-start">
                <h3 className="font-bold text-slate-900">Title</h3>
                <p className="text-gray-500 text-base font-medium leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <p className="text-base font-semibold text-violet-700">Lean More</p>
            </div>
            <div className="w-[260px] h-[283px] flex flex-col justify-start gap-[30px] py-[30px] px-6 bg-white rounded-2xl">
              <img className="w-[46px] h-[46px]" src={cube} alt="" />
              <div className="flex flex-col justify-start">
                <h3 className="font-bold text-slate-900">Title</h3>
                <p className="text-gray-500 text-base font-medium leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <p className="text-base font-semibold text-violet-700">Lean More</p>
            </div>
            <div className="w-[260px] h-[283px] flex flex-col justify-start gap-[30px] py-[30px] px-6 bg-[#080C2E] rounded-2xl">
              <img className="w-[46px] h-[46px]" src={status_up} alt="" />
              <div className="flex flex-col justify-start">
                <h3 className="font-bold text-white">Title</h3>
                <p className="text-gray-500 text-base font-medium leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <p className="text-base font-semibold text-white">Lean More</p>
            </div>
            <div className="w-[260px] h-[283px] flex flex-col justify-start gap-[30px] py-[30px] px-6 bg-white rounded-2xl">
              <img className="w-[46px] h-[46px]" src={driver_refresh} alt="" />
              <div className="flex flex-col justify-start">
                <h3 className="font-bold text-slate-900">Title</h3>
                <p className="text-gray-400 text-base font-medium leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <p className="text-base font-semibold text-violet-700">Lean More</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
