import Headphone from "/hero/headphone.png";

const Data = {
  discount: "50% OFF",
  title: "Gaming Headset",
  date: "From Jan 10th to Jan 28th",
  image: Headphone,
  title2: "New Air Solo Bass",
  title3: "Winter Sale%",
  title4:
    "Buy the best High-Quality Headset from Air Solo for half the original price, Limited Discount!",
};

const Banner = () => {
  return (
    <div className="min-h-137.5 flex justify-center items-center py-12">
      <div className="sm:p-12 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-red-500 shadow-2xl">
          {/* First Col */}
          <div className="p-6 sm:p-8">
            <p
              data-aos="slide-right"
              
              className="text-sm font-bold pl-2 font"
            >
              {Data.discount}
            </p>
            <h1 data-aos="zoom-out" className="uppercase text-4xl lg:text-7xl font-bold">
              {Data.title}
            </h1 >
            <p data-aos="fade-up" className="text-sm mt-1 pl-2">{Data.date}</p>
          </div>
          {/* Second Col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={Data.image}
              alt=""
              className="scale-125 w-62.5 md:w-85 mx-auto drop-shadow-2xl object-cover"
            />
          </div>
          {/* Third Col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-bold text-xl">{Data.title2}</p>
            <p  data-aos="fade-up"className="text-3xl sm:text-5xl font-bold">{Data.title3}</p>
            <p data-aos="fade-up" className="text-sm tracking-wide leading-5">{Data.title4}</p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button className="bg-white text-primary py-2 px-4 rounded-full font-semibold cursor-pointer hover:scale-105 duration-300 shadow-md">
                Get Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
