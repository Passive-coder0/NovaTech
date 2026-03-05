import Navbar from "../components/Sections/Navbar";
import Popup from "../components/Popup/Popup";
import Partners from "../components/Sections/Partners";
import Footer from "../components/Sections/Footer";
import { useState } from "react";

const Checkout = ({ orderPopup, handleOrderPopup }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formatted = value;

    if (name === "cardNumber") {
      formatted = value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    }
    if (name === "expiry") {
      formatted = value.replace(/\D/g, "").slice(0, 4);
      if (formatted.length >= 3) formatted = formatted.slice(0, 2) + "/" + formatted.slice(2);
    }
    if (name === "cvv") {
      formatted = value.replace(/\D/g, "").slice(0, 3);
    }
    if (name === "zip") {
      formatted = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm((prev) => ({ ...prev, [name]: formatted }));
  };

  const inputClass =
    "w-full bg-transparent placeholder:text-gray-400 text-gray-800 dark:text-gray-100 text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2.5 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition duration-200 bg-white dark:bg-gray-800";
  const labelClass = "block mb-1.5 text-sm font-medium text-gray-600 dark:text-gray-300";

  return (
    <div className="font-roboto dark:bg-gray-900 dark:text-white min-h-screen overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} quickLinks={false} />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-3xl font-bold mb-2">Checkout</h1>
        <p className="text-gray-400 text-sm mb-10">Complete your purchase below</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: Shipping ── */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              <h2 className="text-lg font-bold">Shipping Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className={labelClass}>Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
              </div>
              <div>
                <label className={labelClass}>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
              </div>
              <div>
                <label className={labelClass}>Street Address</label>
                <input name="address" value={form.address} onChange={handleChange} className={inputClass} placeholder="123 Main Street" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>City</label>
                  <input name="city" value={form.city} onChange={handleChange} className={inputClass} placeholder="New York" />
                </div>
                <div>
                  <label className={labelClass}>ZIP Code</label>
                  <input name="zip" value={form.zip} onChange={handleChange} className={inputClass} placeholder="10001" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Payment ── */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">2</span>
              <h2 className="text-lg font-bold">Payment Details</h2>
            </div>

            {/* Card preview strip */}
            <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-xl p-5 mb-6 text-white shadow-md">
              <p className="text-xs uppercase tracking-widest opacity-70 mb-3">Card Number</p>
              <p className="text-lg font-mono tracking-widest mb-4">
                {form.cardNumber || "•••• •••• •••• ••••"}
              </p>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="opacity-60 text-xs">Cardholder</p>
                  <p className="font-medium">{form.cardName || "Your Name"}</p>
                </div>
                <div className="text-right">
                  <p className="opacity-60 text-xs">Expires</p>
                  <p className="font-medium">{form.expiry || "MM/YY"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className={labelClass}>Cardholder Name</label>
                <input name="cardName" value={form.cardName} onChange={handleChange} className={inputClass} placeholder="John Doe" />
              </div>
              <div>
                <label className={labelClass}>Card Number</label>
                <input name="cardNumber" value={form.cardNumber} onChange={handleChange} className={inputClass} placeholder="1234 5678 9012 3456" maxLength="19" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Expiry Date</label>
                  <input name="expiry" value={form.expiry} onChange={handleChange} className={inputClass} placeholder="MM/YY" maxLength="5" />
                </div>
                <div>
                  <label className={labelClass}>CVV</label>
                  <input name="cvv" value={form.cvv} onChange={handleChange} className={inputClass} placeholder="•••" maxLength="3" />
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl transition-colors shadow-md cursor-pointer">
              Complete Purchase →
            </button>
          </div>

        </div>
      </div>

      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <Partners />
      <Footer />
    </div>
  );
};

export default Checkout;
