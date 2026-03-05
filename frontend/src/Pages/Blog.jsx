import Navbar from "../components/Sections/Navbar";
import Popup from "../components/Popup/Popup";
import Partners from "../components/Sections/Partners";
import Footer from "../components/Sections/Footer";
import img1 from "/blogs/blog-1.jpg";
import img2 from "/blogs/blog-2.png";
import img3 from "/blogs/blog-3.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogData = [
  {
    id: 1,
    title: "How to Choose the Perfect Smart Watch",
    subtitle:
      "With hundreds of smartwatches on the market, finding the right one can feel overwhelming. Whether you're a fitness enthusiast, a productivity lover, or just someone who wants to stay connected on the go, this guide walks you through every feature that matters — battery life, health sensors, compatibility, and style — so you can make a confident, informed purchase.",
    published: "Jan 20, 2026",
    author: "Mary",
    category: "Wearables",
    img: img1,
  },
  {
    id: 2,
    title: "How to Choose the Best Gadget for Your Lifestyle",
    subtitle:
      "Not every gadget is made for every person. From smart home devices to portable speakers, the best tech is the tech that actually fits into your daily routine. Discover how to match the right gadgets to your habits, budget, and priorities.",
    published: "Feb 2, 2026",
    author: "John",
    category: "Lifestyle",
    img: img2,
  },
  {
    id: 3,
    title: "How to Choose the Perfect VR Headset",
    subtitle:
      "Virtual reality is no longer just for gamers. From virtual travel to remote work to creative tools, VR headsets are reshaping how we experience digital content. Here's what to look for before you buy.",
    published: "Feb 17, 2026",
    author: "Mohamed",
    category: "Gaming",
    img: img3,
  },
];

const Blog = ({ orderPopup, handleOrderPopup }) => {
  const { id } = useParams();
  const initial = BlogData.find((b) => b.id === Number(id)) ?? BlogData[0];
  const [featured, setFeatured] = useState(initial);
  const others = BlogData.filter((b) => b.id !== featured.id);

  useEffect(() => {
    const found = BlogData.find((b) => b.id === Number(id)) ?? BlogData[0];
    setFeatured(found);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  return (
    <div className="font-roboto dark:bg-gray-900 dark:text-white min-h-screen overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} quickLinks={false} />

      {/* ── Featured Article ── */}
      <section className="relative w-screen h-[80vh] min-h-72 overflow-hidden">
        {/* Background image */}
        <img
          src={featured.img}
          alt={featured.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-14 pb-12 max-w-5xl">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-indigo-600 text-white rounded-full w-fit">
            {featured.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            {featured.title}
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl line-clamp-3 mb-5 leading-relaxed">
            {featured.subtitle}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-gray-300 text-xs">
              {featured.published} &nbsp;·&nbsp; by{" "}
              <span className="font-semibold text-white">{featured.author}</span>
            </p>
            <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer">
              Read Article →
            </button>
          </div>
        </div>
      </section>

      {/* ── Full Description Strip ── */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-6 sm:px-14 py-8 max-w-5xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 text-base leading-8">
          {featured.subtitle}
        </p>
      </section>

      {/* ── More Articles ── */}
      <section className="px-6 sm:px-14 py-14 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1 h-6 bg-indigo-600 rounded-full" />
          <h2 className="text-2xl font-bold">More Articles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {others.map((blog) => (
            <div
              key={blog.id}
              onClick={() => { setFeatured(blog); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
                  {blog.category}
                </span>
                <h3 className="font-bold text-lg leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {blog.subtitle}
                </p>
                <p className="text-xs text-gray-400 pt-1">
                  {blog.published} · by <span className="font-medium">{blog.author}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <Partners />
      <Footer />
    </div>
  );
};

export default Blog;

