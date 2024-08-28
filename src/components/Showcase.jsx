export default function Showcase() {
  return (
    <>
      <section className="showcase mx-auto py-12">
        <div className="flex flex-col gap-y-8">
          {/* Showcase Title and Desc */}
          <div className="flex flex-col text-center gap-y-2">
            <h1 className="font-['Clash_Display'] font-medium text-indigo-950 text-5xl">Our Showcase</h1>
            <p className="text-base leading-loose text-gray-500 font-semibold">
              They built amazing website to help more people around the world
              <br />
              by using our recommendation services and products
            </p>
          </div>
          {/* Image Slider Showcase */}
          <div className="flex flex-wrap gap-x-10 justify-center">
            {/* Group Hover Concept Tailwind */}
            <div className="group relative">
              {/* Hover */}
              <div className="group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500 absolute justify-center w-full bottom-8 flex">
                <a href="" className="hover:bg-[#080C2E] font-semibold bg-violet-700 text-white px-7 py-3 rounded-full shadow-2xl shadow-violet-700">
                  View Details
                </a>
              </div>
              <img src="/images/showcase-1.png" alt="" className="group-hover:border-4 transition-all ease-in-out duration-500 border-violet-700 rounded-2xl w-[320px] h-[220px]" />
            </div>
            <div className="group relative">
              {/* Hover */}
              <div className="group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500 absolute justify-center w-full bottom-8 flex">
                <a href="" className="hover:bg-[#080C2E] font-semibold bg-violet-700 text-white px-7 py-3 rounded-full shadow-2xl shadow-violet-700">
                  View Details
                </a>
              </div>
              <img src="/images/showcase-2.png" alt="" className="group-hover:border-4 transition-all ease-in-out duration-500 border-violet-700 rounded-2xl w-[320px] h-[220px]" />
            </div>
            <div className="group relative">
              {/* Hover */}
              <div className="group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500 absolute justify-center w-full bottom-8 flex">
                <a href="" className="hover:bg-[#080C2E] font-semibold bg-violet-700 text-white px-7 py-3 rounded-full shadow-2xl shadow-violet-700">
                  View Details
                </a>
              </div>
              <img src="/images/showcase-3.png" alt="" className="group-hover:border-4 transition-all ease-in-out duration-500 border-violet-700 rounded-2xl w-[320px] h-[220px]" />
            </div>
            <div className="group relative">
              {/* Hover */}
              <div className="group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500 absolute justify-center w-full bottom-8 flex">
                <a href="" className="hover:bg-[#080C2E] font-semibold bg-violet-700 text-white px-7 py-3 rounded-full shadow-2xl shadow-violet-700">
                  View Details
                </a>
              </div>
              <img src="/images/showcase-4.png" alt="" className="group-hover:border-4 transition-all ease-in-out duration-500 border-violet-700 rounded-2xl w-[320px] h-[220px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
