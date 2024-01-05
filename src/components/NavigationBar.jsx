import logo from "../assets/logo.svg";
import cart from "../assets/bag-2.svg";

export default function NavigationBar() {
  return (
    <nav className="flex flex-row max-w-6xl mx-auto justify-between items-center mt-10 pb-12">
      <img src={logo} alt="Weserve Logo" />

      <ul className="flex flex-row gap-x-7">
        <li>
          <a href="#" className="text-base text-indigo-950 hover:text-violet-700">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-indigo-950 hover:text-violet-700 hover:font-semibold">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-indigo-950 hover:text-violet-700 hover:font-semibold">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-indigo-950 hover:text-violet-700 hover:font-semibold">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#" className="text-base text-indigo-950 hover:text-violet-700 hover:font-semibold">
            Blog
          </a>
        </li>
      </ul>
      <div className="flex flex-row items-center gap-x-3">
        <div className="bg-white rounded-full flex items-center p-[12px]">
          <a href="#">
            <img src={cart} alt="Cart" />
          </a>
        </div>
        <a className="bg-indigo-950 text-white py-3 px-8 rounded-full font-semibold text-base hover:bg-violet-700" href="#">
          Sign In
        </a>
      </div>
    </nav>
  );
}
