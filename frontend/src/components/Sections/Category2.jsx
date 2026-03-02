import Button from "../Shared/Button";
import Image1 from "/category/gaming.png";
import Image2 from "/category/vr.png";
import Image3 from "/category/speaker.png";

const Category = () => {
  return (
    <div>
      {/* Maybe add container class or NOT */}
      <div className="sm:p-12 p-4 my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="col-span-2 py-10 pl-5 bg-linear-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-80 flex items-en shadow-xl">
            <div>
              <div className="mb-4">
                <p className="mb-0.5 text-white text-lg">Enjoy</p>
                <p className="text-2xl font-semibold mb-0.5">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Gaming Console
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                ></Button>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-62.5 absolute top-1/2 -translate-y-1/2 lg:translate-0 right-0 lg:top-10 drop-shadow-2xl"
            />
          </div>
          {/* Second Column */}
          <div className="py-10 pl-5 bg-linear-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-80 flex items-start shadow-xl">
            <div>
              <div className="mb-4">
                <p className="mb-0.5 text-white text-lg">Explore</p>
                <p className="text-2xl font-semibold mb-0.5">Virtual</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Reality
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                ></Button>
              </div>
            </div>
            <img
              src={Image2}
              alt="earphone img"
              className="w-[320px] absolute bottom-0 drop-shadow-2xl"
            />
          </div>
          {/* Third Column */}
          <div className="py-10 pl-5 bg-linear-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-80 flex items-start shadow-xl">
            <div>
              <div className="mb-4">
                <p className="mb-0.5 text-white text-lg">Enjoy</p>
                <p className="text-2xl font-semibold mb-0.5">Our Best</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadgets
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                ></Button>
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-50 absolute bottom-0 right-0 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
