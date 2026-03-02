import Button from "../Shared/Button";
import Image1 from "/category/earphone.png";
import Image2 from "/category/watch.png";
import Image3 from "/category/macbook.png";

const Category = () => {
  return (
    <div>
      {/* Maybe add container class Or NOT*/}
      <div className=" sm:p-12 p-4 my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="py-10 pl-5 bg-linear-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-80 flex items-end shadow-xl">
            <div>
              <div className="mb-4">
                <p className="mb-0.5 text-gray-400 text-lg">Enjoy</p>
                <p className="text-3xl font-semibold mb-0.5">The</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Music
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                ></Button>
              </div>
            </div>
            <img src={Image1} alt="earphone img" className="w-[320px] min-w-30 absolute bottom-0 drop-shadow-lg" />
          </div>
          {/* Second Column */}
          <div className="py-10 pl-5 bg-linear-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-80 flex items-end shadow-xl">
            <div>
              <div className="mb-4">
                <p className="mb-0.5 text-white text-lg">Try</p>
                <p className="text-3xl font-semibold mb-0.5">Our</p>
                <p className="text-4xl xl:text-5xl font-bold dark:opacity-50 opacity-80 mb-2">
                  Watches
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                ></Button>
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[320px] absolute md:-right-10 lg:-right-16 top-10 md-top-10 drop-shadow-lg"
            />
          </div>
          {/* Third Column */}
          <div className="col-span-2 py-10 pl-5 bg-linear-to-br from-primary to-primary/90 text-white rounded-3xl relative h-80 flex items-end shadow-xl">
            <div>
              <div className="mb-4">
                <p className="mb-0.5 text-white text-lg">Buy</p>
                <p className="text-3xl font-semibold mb-0.5">The Best</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                 Branded Laptops
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                ></Button>
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-62.5 sm:w-70 absolute top-1/2 -translate-y-1/2 lg:translate-0 right-0 lg:top-5 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
