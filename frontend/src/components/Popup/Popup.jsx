import Button from "../Shared/Button";
import img1 from "/hero/headphone.png";
import img2 from "/product/samsung.jpg";
import img3 from "/category/gaming.png";
import { HiArrowLongLeft } from "react-icons/hi2";
import { IoCloseCircleOutline } from "react-icons/io5";
import CartItems from "../Shared/CartItems";
import { Link } from "react-router-dom";

const Products = [
  {
    title: "Air Headset",
    subtitle: "Electronics",
    price: 95,
    img: img1,
  },
  {
    title: "Smart Watch",
    subtitle: "Electronics",
    price: 130,
    img: img2,
  },
  {
    title: "Gaming Console",
    subtitle: "Electronics",
    price: 250,
    img: img3,
  },
];



const Popup = ({ orderPopup, handleOrderPopup }) => {

  return (
    <>
      {orderPopup && (
        <div>
          {/* Popup Background */}
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm overflow-auto">
            {/* Popup Body */}
            <div className="w-80 sm:w-100 md:w-140 lg:w-230 xl:w-270 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-white dark:bg-gray-900 text-gray-800 dark:text-white duration-200 rounded-xl flex justify-between flex-col lg:flex-row font-roboto overflow-y-auto max-h-[95vh]">
              {/* Left Section */}
              <div className="p-10 flex flex-col w-full relative">
                {/* Exit Button */}
                <div
                  className="text-2xl text-gray-700 dark:text-gray-500 flex items-center justify-center rounded-full absolute top-4 right-4 cursor-pointer lg:hidden"
                  onClick={handleOrderPopup}
                >
                  <IoCloseCircleOutline />
                </div>
                <div className="flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-center justify-between w-full border-gray-400 border-b pb-6 font-bold text-xl lg:text-2xl">
                    <h2>Shopping Cart</h2>
                    <h2>3 Items</h2>
                  </div>

                  {/* Product Section */}
                  <div className="w-full mt-6">
                    {/* Column Headers */}
                    <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr_1fr]  text-gray-600 dark:text-gray-400 font-bold mb-4 text-sm">
                      <span>Product Details</span>
                      <span>Quantity</span>
                      <span>Price</span>
                      <span>Total</span>
                    </div>
                    <CartItems products={Products}></CartItems>
                  </div>
                </div>

                {/* Back To Shopping */}
                <div className="mt-10">
                  <a
                    onClick={handleOrderPopup}
                    className="text-sm flex items-center gap-1 hover:text-cyan-800 dark:text-white dark:hover:text-cyan-200 cursor-pointer"
                  >
                    <HiArrowLongLeft className="text-xl h-9 pt-1 "></HiArrowLongLeft>
                    Back To Shopping
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="p-10 flex flex-col justify-between bg-gray-200 dark:bg-gray-800">
                <div className="flex justify-between items-center font-bold text-xl lg:text-2xl border-b border-gray-400 pb-6">
                  <p>Order Summary</p>
                </div>
                {/* Order Form */}
                <form className="border-gray-400 border-b pb-8">
                  <div className="flex justify-between font-bold py-6">
                    <p>Items 3</p>
                    <p>$475</p>
                  </div>
                  <div className="flex flex-col justify-between pb-6">
                    <label className="font-bold mb-3" htmlFor="shipping">
                      SHIPPING
                    </label>
                    <select
                      className="bg-white dark:bg-gray-600 p-1.5 w-60"
                      name="shipping"
                      id="shipping"
                    >
                      <option value="standard">
                        Standard Delivery - $5.00
                      </option>
                      <option value="premium">Premium Delivery - $7.50</option>
                      <option value="express">Express Delivery - $15.00</option>
                    </select>
                  </div>
                  <div className="flex flex-col justify-between pb-6">
                    <label className="font-bold mb-3" htmlFor="promo">
                      PROMO CODE
                    </label>
                    <input
                      className="bg-white dark:bg-gray-600 p-1.5 w-60"
                      type="text"
                      id="promo"
                      name="promo"
                      placeholder="Enter Code"
                    />
                  </div>
                  <div>
                    <div
                      className={`bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700 py-2 px-8 rounded-full relative z-10 mt-2 w-26 text-center`}
                    >
                      Apply
                    </div>
                  </div>
                </form>
                <div className="flex justify-between font-bold py-6">
                  <p>Total Cost</p>
                  <p>$475</p>
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    to="/checkout"
                    onClick={handleOrderPopup}
                    className="block w-full p-2 bg-red-600 hover:bg-red-700 text-white cursor-pointer rounded-md text-center"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
