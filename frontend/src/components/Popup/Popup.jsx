import Button from "../Shared/Button";
import img1 from "/hero/headphone.png";
import img2 from "/product/p-2.jpg"
import img3 from "/category/gaming.png"

const Products = [
  {
    title: "Headset",
    price: 95,
    img: img1,
  },
  {
    title: "Smart Watch",
    price: 130,
    img: img2,
  },
  {
    title: "Gaming Console",
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
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            {/* Popup Body */}
            <div className="w-80 sm:w-100 md:w-140 lg:w-200 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-white dark:bg-gray-900 text-gray-800 dark:text-white duration-200 rounded-xl flex justify-between flex-col lg:flex-row font-roboto">
              {/* Left Section */}
              <div className="p-10 flex flex-col justify-between w-full">
                <div className="flex justify-between items-center font-bold text-xl lg:text-2xl border-b border-gray-400 pb-6 gap-10">
                  <h2>Shopping Cart</h2>
                  <h2>3 Items</h2>
                </div>
                <div className="flex-col py-4 justify-between"></div>
                {/* Close Button */}
                <div className="mt-10">
                  <a
                    onClick={handleOrderPopup}
                    className="text-sm hover:text-cyan-800 dark:text-white dark:hover:text-cyan-200 cursor-pointer"
                  >
                    Back To Shopping
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="p-10 flex flex-col justify-between bg-gray-200">
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
                    <label className="font-bold mb-3" htmlFor="shipping">SHIPPING</label>
                    <select className="bg-white p-1.5 w-60" name="shipping" id="shipping">
                      <option value="standard">Standard Delivery - $5.00</option>
                      <option value="premium">Premium Delivery - $7.50</option>
                      <option value="express">Express Delivery - $15.00</option>
                    </select>
                  </div>
                  <div className="flex flex-col justify-between pb-6">
                    <label className="font-bold mb-3" htmlFor="promo">PROMO CODE</label>
                    <input className="bg-white p-1.5 w-60" type="text" id="promo" name="promo" placeholder="Enter Code" />
                  </div>
                  <div>
                    <button className={`bg-indigo-600 text-white cursor-pointer hover:scale-103 duration-200 py-2 px-8 rounded-full relative z-10 mt-2`} >Apply</button>
                  </div>
                </form>
                 <div className="flex justify-between font-bold py-6">
                    <p>Total Cost</p>
                    <p>$475</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="p-2 bg-secondary text-white  cursor-pointer rounded-md w-full">Checkout</button>
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
