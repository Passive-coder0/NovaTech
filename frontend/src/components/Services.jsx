import { FaCarSide, FaWallet, FaHeadphonesAlt, FaCheckCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";


const ServiceData = [
  {
    id: 1,
    icon: <TbTruckDelivery className="text-4xl md:text-5xl text-primary drop-shadow-lg"></TbTruckDelivery>,
    title: "Free Shipping",
    desription: "Free Shipping On All Orders",
  },
  {
    id: 2,
    icon: (
      <FaCheckCircle className="text-4xl md:text-5xl text-green-500 drop-shadow-lg"></FaCheckCircle>
    ),
    title: "Safe Money",
    desription: "30 Days Money Back Gurantee",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-amber-700 drop-shadow-lg"></FaWallet>,
    title: "Secure Payment",
    desription: "Fully Secure Payment Methods",
  },
  {
    id: 4,
    icon: (
      <FaHeadphonesAlt className="text-4xl md:text-5xl text-brandBlue drop-shadow-lg"></FaHeadphonesAlt>
    ),
    title: "Online Support 24/7",
    desription: "24/7 Online Technical Support",
  },
];

const Services = () => {
  return (
    <div>
      <div className="sm:p-12 p-4 mt-10 md:my-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div className="flex flex-col items-start gap-1 xl:gap-2 p-4 rounded-lg dark:bg-gray-800" key={data.id}>
                {data.icon}
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.desription}</h1>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
