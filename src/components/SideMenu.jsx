import { FaHome } from "react-icons/fa";
import { IoFlash, IoLogoBuffer, IoPlayCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="md:flex flex-col gap-4 items-center  w-0 hidden md:w-[6%] h-full">
      <Link to={"/"}>
        <div className="p-3 flex flex-col hover:bg-gray-300 rounded-md w-full justify-center items-center">
          <FaHome size={24} />
          <p className="text-[10px] ">Home</p>
        </div>
      </Link>
      <div className="p-3 flex flex-col hover:bg-gray-300 rounded-md w-full justify-center items-center">
        <IoFlash size={24} />
        <p className="text-[10px] ">shorts</p>
      </div>
      <div className="p-3 flex flex-col hover:bg-gray-300 rounded-md w-full justify-center items-center">
        <IoLogoBuffer size={24} />
        <p className="text-[10px] ">subscribtion</p>
      </div>
      <div className="p-3 flex flex-col hover:bg-gray-300 rounded-md w-full justify-center items-center">
        <IoPlayCircle size={24} />
        <p className="text-[10px] ">You</p>
      </div>
    </div>
  );
};

export default SideMenu;
