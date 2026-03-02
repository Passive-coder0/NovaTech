import smartWatch from "/category/smartwatch2.png";

const Data2 = {
  discount: "50% OFF",
  title: "Smart Watch",
  date: "From Jan 10th to Jan 28th",
  image: smartWatch,
  title2: "New Airiobics Air Solo",
  title3: "Winter Sale%",
  title4:
    "Buy the best High-Quality Smart Watch from Air Solo for half the original price, Limited Discount!",
};

const Banner2 = () => {
  return (
    <div className="min-h-137.5 flex justify-center items-center py-12">
      <div className="sm:p-12 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-[#2dcc6f] shadow-2xl">
          {/* First Col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm font-bold pl-2 font">
              {Data2.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-4xl lg:text-7xl font-bold"
            >
              {Data2.title}
            </h1>
            <p data-aos="fade-up"  className="text-sm mt-1 pl-2">{Data2.date}</p>
          </div>
          {/* Second Col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={Data2.image}
              alt=""
              className="scale-125 w-62.5 md:w-85 mx-auto drop-shadow-2xl object-cover"
            />
          </div>
          {/* Third Col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-bold text-xl">{Data2.title2}</p>
            <p data-aos="fade-up" className="text-3xl sm:text-5xl font-bold">{Data2.title3}</p>
            <p  data-aos="fade-up"className="text-sm tracking-wide leading-5">{Data2.title4}</p>
            <div data-aos="fade-up">
              <button className="bg-white text-[#2dcc6f] py-2 px-4 rounded-full font-semibold cursor-pointer hover:scale-105 duration-300 shadow-md">
                Get Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
