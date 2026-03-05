import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const FooterLinks2 = [
  {
    id: 1,
    name: "Featured Products",
    link: "#featured",
  },
  {
    id: 2,
    name: "Services",
    link: "#services",
  },
  {
    id: 3,
    name: "Latest News",
    link: "#latest",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="sm:p-12 p-4">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Virtual Shop
            </a>
            <p className="hidden md:block text-gray-700 dark:text-white/70 lg:pr-24 pt-3">
              Your one-stop shop for the latest tech gadgets, from smartphones to smart home devices—at competitive prices.
            </p>
            <p className="text-gray-700 dark:text-gray-500 mt-4">
              All rights reserved © 2026 Virtual Shop. Designed by Mohamed Hamed.
            </p>
          </div>

          {/* Links */}
          <div className="grid col-span-2 grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* First Links Section */}
            <div className="py-8 px-4">
              <h1 className=" text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Links Section */}
            <div className="py-8 px-4">
              <h1 className=" text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks2.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-700 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
                 <h1 className=" text-xl font-bold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="hover:rotate-20 duration-300 shrink-0"></FaLocationArrow>
                  <p> Manhattan, New York City</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                    <FaMobileAlt className="hover:rotate-20 duration-300 shrink-0"></FaMobileAlt>
                    <p>+1 0123456789</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                        <FaInstagram className="text-3xl hover:text-primary duration-300"></FaInstagram>
                    </a>
                    <a href="#">
                        <FaFacebook className="text-3xl hover:text-primary duration-300"></FaFacebook>
                    </a>
                    <a href="#">
                        <FaLinkedin className="text-3xl hover:text-primary duration-300"></FaLinkedin>
                    </a>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
