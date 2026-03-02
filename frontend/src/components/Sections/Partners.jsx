import brand1 from "/brand/br-1.png";
import brand2 from "/brand/br-2.png";
import brand3 from "/brand/br-3.png";
import brand4 from "/brand/br-4.png";
import brand5 from "/brand/br-5.png";

const Partners = () => {
  return (
    <div className="py-0 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
      <div className="sm:p-10 p-4">
        <div data-aos="zoom-out" className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          <img src={brand1} alt="brand" className="w-30 dark:invert" />
          <img src={brand2} alt="brand" className="w-30 dark:invert" />
          <img src={brand3} alt="brand" className="w-30 dark:invert" />
          <img src={brand4} alt="brand" className="w-30 dark:invert" />
          <img src={brand5} alt="brand" className="w-30 dark:invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
