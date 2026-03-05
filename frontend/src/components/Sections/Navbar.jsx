import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const DropdownLinks = [
  {
    id: 1,
    name: "Services",
    link: "#services",
  },
  {
    id: 2,
    name: "Featured Products",
    link: "#featured",
  },
  {
    id: 3,
    name: "Latest News",
    link: "#latest",
  },
];
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    name: "Blogs",
    link: "/blogs",
  },
];

const Navbar = ({ handleOrderPopup, quickLinks }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-1">
        {/* Maybe i Shouldnt add a container class here */}
        <div className=" sm:p-12 p-4 flex justify-between items-center">
          {/* Logos and links Section */}
          <div className="flex justify-between items-center gap-4">
            <a
              href="/#"
              className="cursor-pointer"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span
                className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest bg-linear-to-r from-primary to-brandBlue bg-clip-text text-transparent drop-shadow-sm"
              >
                Nova
              </span>
              <span
                className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-gray-800 dark:text-gray-100"
              >
                Tech
              </span>
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4 ">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                      to={data.link}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}

                {/* Dropdown */}
                {quickLinks && (
                  <li className="relative cursor-pointer group">
                    <a
                      href="#"
                      className="flex items-center gap-0.5 font-semibold text-gray-500 dark:hover:text-white py-2"
                    >
                      Quick Links
                      <span>
                        <FaCaretDown className="group-hover:rotate-180 duration-300" />
                      </span>
                    </a>
                    {/* Dropdown Links */}
                    <div className="absolute z-9999 hidden group-hover:block w-50 rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                      <ul className="space-y-2">
                        {DropdownLinks.map((data, index) => (
                          <li key={index}>
                            <a
                              href={data.link}
                              className="text-gray-500 hover:text-black dark:hover:text-white p-2 hover:bg-primary/20 duration-200 inline-block w-full rounded-md font-semibold"
                            >
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Navbar Right Section */}
          <div className="flex justify-between items-center gap-4">
            {/* Order Button Section */}
            <button
              onClick={handleOrderPopup}
              className="relative p-3 cursor-pointer duration-300 transform hover:scale-110"
            >
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400 drop-shadow-sm" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                3
              </div>
            </button>

            {/* Dark Mode Section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
