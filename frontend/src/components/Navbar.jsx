import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";


const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#trending-products",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#best-selling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#top-rated",
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
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blogs",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-1">
        {/* Maybe i Shouldnt add a container class here */}
        <div className=" sm:p-12 p-4 flex justify-between items-center">
          {/* Logos and links Section */}
          <div className="flex justify-between items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Virtual Shop
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4 ">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a href="#" className="flex items-center gap-0.5 font-semibold text-gray-500 dark:hover:text-white py-2">
                    Quick Links
                    <span><FaCaretDown className="group-hover:rotate-180 duration-300" /></span>
                  </a>
                   {/* Dropdown Links */}
                  <div className="absolute z-9999 hidden group-hover:block w-50 rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                   <ul className="space-y-2">
                    {
                      DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="text-gray-500 hover:text-black dark:hover:text-white p-2 hover:bg-primary/20 duration-200 inline-block w-full rounded-md font-semibold"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))
                    }
                   </ul>

                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right Section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar Section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-0 group-hover:w-75 transition-[width] duration-700 rounded-full group-hover:border group-hover:border-gray-500 px-3 py-1 focus:outline-none dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary transition-[color] duration-300 dark:text-gray-400 absolute top-1/3 -translate-y-0.5 right-3 hover:cursor-pointer" />
            </div>

            {/* Order Button Section */}
            <button className="relative p-3 cursor-pointer duration-300 transform hover:scale-110">
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400 drop-shadow-sm" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
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
