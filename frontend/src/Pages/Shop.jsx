import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Sections/Navbar";
import Popup from "../components/Popup/Popup";
import Partners from "../components/Sections/Partners";
import Footer from "../components/Sections/Footer";
import Button from "../components/Shared/Button";

const categories = ["All", "Phones", "SmartWatches", "Headphones", "Consoles", "Laptops"];

const ShopData = [
  { id: 1, title: "iPhone 15 Pro", category: "Phones", price: 999, img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&auto=format" },
  { id: 2, title: "Samsung Galaxy S24", category: "Phones", price: 899, img: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25262622/DSC06547_alt.jpg?quality=90&strip=all&crop=0.012500000000003,0,99.975,100" },
  { id: 3, title: "Google Pixel 8", category: "Phones", price: 699, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop&auto=format" },
  { id: 4, title: "Apple Watch Ultra", category: "SmartWatches", price: 799, img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop&auto=format" },
  { id: 5, title: "Samsung Galaxy Watch 6", category: "SmartWatches", price: 299, img: "https://media.dcrainmaker.com/images/2023/08/P1099578.jpg" },
  { id: 6, title: "Garmin Fenix 7", category: "SmartWatches", price: 549, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop&auto=format" },
  { id: 7, title: "Sony WH-1000XM5", category: "Headphones", price: 349, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format" },
  { id: 8, title: "Logitech X15 Mouse", category: "Headphones", price: 249, img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop&auto=format" },
  { id: 9, title: "Bose QuietComfort 45", category: "Headphones", price: 279, img: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&h=400&fit=crop&auto=format" },
  { id: 10, title: "PlayStation 5", category: "Consoles", price: 499, img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop&auto=format" },
  { id: 11, title: "Xbox Series X", category: "Consoles", price: 499, img: "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png" },
  { id: 12, title: "Nintendo Switch OLED", category: "Consoles", price: 349, img: "https://upgrade.me/images/thumbs/000/0009449_nintendo-switch-oled-console-white_600.webp" },
  { id: 13, title: "Apple MacBook Pro", category: "Laptops", price: 1999, img: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=400&h=400&fit=crop&auto=format" },
  { id: 14, title: "Dell XPS 15", category: "Laptops", price: 1599, img: "https://www.awfarlak.com/wp-content/uploads/2026/02/6c3add286a3f8c3add9bb4946ae406d0.webp" },
  { id: 15, title: "HP Spectre x360", category: "Laptops", price: 1399, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&auto=format" },
];

const Shop = ({ orderPopup, handleOrderPopup }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    return () => AOS.refresh();
  }, []);

  const filtered = activeCategory === "All"
    ? ShopData
    : ShopData.filter((p) => p.category === activeCategory);

  return (
    <div className="font-roboto dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar handleOrderPopup={handleOrderPopup} quickLinks={false} />

      {/* Hero Banner */}
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white py-14 px-6 sm:px-14 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Our Shop</h1>
        <p className="text-indigo-100 text-sm">Browse our latest collection of premium electronics</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={(index % 5) * 100}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative overflow-hidden aspect-square bg-gray-100 dark:bg-gray-700">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300">
                  <Button text="Add to cart" bgColor="bg-indigo-600" textColor="text-white" />
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-indigo-500 font-semibold mb-0.5">{product.category}</p>
                <h3 className="font-semibold text-sm leading-snug line-clamp-1">{product.title}</h3>
                <p className="font-bold text-base mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <Partners />
      <Footer />
    </div>
  );
};

export default Shop;