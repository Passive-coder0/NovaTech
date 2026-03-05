import Heading from "../Shared/Heading";
import img1 from "/blogs/blog-1.jpg";
import img2 from "/blogs/blog-2.png";
import img3 from "/blogs/blog-3.jpg";
import {Link} from "react-router-dom";

const BlogData = [
  {
    id:1,
    title: "How to Choose the perfect Smart Watch",
    link: "/blogs/1",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: "Jan 20, 2026 by Mary",
    img: img1,
  },
  {
    id:2,
    title: "How to Choose the Best Gadget for Your Lifestyle",
    link: "/blogs/2",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: "Feb 2, 2026 by John",
    img: img2,
  },
  {
    id:3,
    title: "How to Choose the perfect VR Headset",
    link: "/blogs/3",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: "Feb 17, 2026 by Mohamed",
    img: img3,
  },
];

const Blogs = () => {
  return (
    <div className="my-10">
      <div className="sm:p-12 p-4">
        {/* Header Section */}
        <Heading
          title="Latest News"
          subtitle="Read Our Latest News and Articles"
        />

        {/* Blogs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div key={data.id} className="bg-white dark:bg-gray-900">
                {/* Img Section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <Link to={data.link}>
                <img className="w-full h-55 object-cover rounded-2xl hover:scale-105 duration-500 cursor-pointer" src={data.img} alt="Blog Img" /></Link>
              </div>
              {/* Text Secction */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
