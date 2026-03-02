import Img1 from "/product/p-1.jpg";
import Button from "./Button";

let ProductsData = [
  { id: 1, img: Img1, title: "Boat Headphone", price: "120", aosDelay: "0" },
  { id: 2, img: Img1, title: "Rocky Mountain", price: "420", aosDelay: "200" },
  { id: 3, img: Img1, title: "Goggles", price: "320", aosDelay: "400" },
  { id: 4, img: Img1, title: "Boat Headphone", price: "120", aosDelay: "0" },
];

const ProductCards = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* Card */}
        {ProductsData.map((data) => (
          <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="group relative" key={data.id}>
            <div  className="relative">
              <img
                src={data.img}
                alt="Product Img"
                className="h-45 w-65 object-cover rounded-md"
              />
              <div className="absolute inset-0 flex text-center justify-center items-center rounded-md opacity-0 backdrop-blur-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                ></Button>
              </div>
            </div>
            {/* The Hover Button */}
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
