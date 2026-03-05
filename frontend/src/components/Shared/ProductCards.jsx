import Button from "./Button";

let ProductsData = [
  {
    id: 1,
    img: "/product/samsung.jpg",
    title: "Samsung Galaxy Watch",
    price: "299",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=300&h=300&fit=crop&auto=format",
    title: "Apple MacBook Pro",
    price: "1999",
    aosDelay: "100",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop&auto=format",
    title: "PlayStation 5",
    price: "499",
    aosDelay: "200",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&auto=format",
    title: "Apple Watch Ultra",
    price: "799",
    aosDelay: "300",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop&auto=format",
    title: "Samsung Headset",
    price: "899",
    aosDelay: "0",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&auto=format",
    title: "Sony WH-1000XM5",
    price: "349",
    aosDelay: "100",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop&auto=format",
    title: "LogiTech Mouse",
    price: "249",
    aosDelay: "200",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&h=300&fit=crop&auto=format",
    title: "Dell XPS 15",
    price: "1599",
    aosDelay: "300",
  },
];

const ProductCards = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* Card */}
        {ProductsData.map((data) => (
          <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="group relative" key={data.id}>
            <div className="relative">
              <div className="w-40 aspect-square sm:w-50 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>
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
