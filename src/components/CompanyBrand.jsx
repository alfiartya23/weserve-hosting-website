import brand_1 from "../assets/brand_1.svg";
import brand_2 from "../assets/brand_2.svg";
import brand_3 from "../assets/brand_3.svg";
import brand_4 from "../assets/brand_4.svg";
import brand_5 from "../assets/brand_5.svg";

export default function CompanyBrand() {
  return (
    <>
      <section className="max-w-6xl mx-auto py-12">
        <div className="flex flex-row gap-x-10 items-center justify-center">
          <img src={brand_1} alt="Brand-1" />
          <img src={brand_2} alt="Brand-2" />
          <img src={brand_3} alt="Brand-3" />
          <img src={brand_4} alt="Brand-4" />
          <img src={brand_5} alt="Brand-5" />
        </div>
      </section>
    </>
  );
}
