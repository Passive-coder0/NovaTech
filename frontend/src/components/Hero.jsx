import Slider from "react-slick";
import Button from "./Button";
import Image1 from "/hero/headphone2.png";
import Image2 from "/category/vr2.png";
import Image3 from "/category/macbook2.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];

const Hero = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: "false",
    pauseOnFocus: "True",
  };
  return (
    // Maybe add container class or NOT
    <div className=" sm:p-12 p-4">
      <div className="overflow-hidden rounded-3xl min-h-137.5 lg:min-h-162.5 bg-linear-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white flex justify-center items-center shadow-xl">
        <div className="container lg:p-12 p-4 pb-8 lg:pb-0 ">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                  {/* Text Content Section */}
                  <div className="flex flex-col justify-center gap-4 lg:pl-3 pt-12 lg:pt-0 text-center lg:text-left order-2 lg:order-1 relative z-10 ">
                    <h1 className="text-2xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div>
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                      ></Button>
                    </div>
                  </div>
                  {/* Img Section */}
                  <div className="order-1 lg:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt="Product Img"
                        className="w-75 h-75 lg:h-120 lg:w-112.5 sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
