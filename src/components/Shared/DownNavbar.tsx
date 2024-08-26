import Link from "next/link";
import {CgGym} from "react-icons/cg";
import {FaBaby, FaBloggerB, FaHome, FaUmbrellaBeach, FaUpload} from "react-icons/fa";
import {FaKitMedical} from "react-icons/fa6";
import {GiMedicines} from "react-icons/gi";
import {ImLab} from "react-icons/im";
import {IoFastFoodOutline} from "react-icons/io5";
import {MdHealthAndSafety, MdOutlinePets} from "react-icons/md";

const DownNavbar = () => {
  return (
    <div className="  bg-red-100 w-full text-gray-950 h-8 flex justify-center items-center text-center gap-5 ">
      <p className="flex justify-center">
        {navbarData.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-base  antialiased hover:underline hover:text-blue-700 hover:font-semibold"
          >
            {item.title}
          </Link>
        ))}
      </p>
    </div>
  );
};

export default DownNavbar;

export const navbarData = [
  {title: "Home", link: "/", icon: FaHome},
  {title: "Medicine", link: "/", icon: GiMedicines},
  {title: "Beauty", link: "/", icon: FaUmbrellaBeach},
  {title: "Supplement", link: "/", icon: CgGym},
  {title: "Food and Nutrition", link: "/", icon: IoFastFoodOutline},
  {title: "Baby Care", link: "/", icon: FaBaby},
  {title: "Healthcare", link: "/", icon: MdHealthAndSafety},
  {title: "Pet Care", link: "/", icon: MdOutlinePets},
  {title: "Veterinary", link: "/", icon: GiMedicines},
  {title: "Lab Test", link: "/", icon: ImLab},
  {title: "Blogs", link: "/", icon: FaBloggerB},
  {title: "Upload Prescription", link: "/", icon: FaUpload},
];
