import { FaBars } from "react-icons/fa";
import {
  BsSearch,
  BsFillBellFill,
  BsFillCameraVideoFill,
  BsMicFill,
} from "react-icons/bs";
import { useCustomContext } from "../context/Context";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const { query } = useParams();
  const { setSideBar } = useCustomContext();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [showP, setShowP] = useState(false);

  const sendSearch = () => {
    navigate(`/search/${searchQuery}`);
  };

  return (
    <header className=" relative w-full h-[65px]  px-2 md:px-5 lg:px-7 py-3 flex justify-between items-center">
      <div className="p-2  flex gap-2 lg:gap-5 items-center">
        <FaBars
          size={20}
          onClick={() => setSideBar((prev) => !prev)}
          className="cursor-pointer"
        />
        <Link to={"/"}>
          <img
            className="w-[70px] md:w-[100px] lg:w-[95px]"
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-2-3.png"
            alt="YpuTube logo"
          />
        </Link>
      </div>

      <div className="flex items-center">
        <div
          className={`flex justify-end items-center rounded-tl-[30px] rounded-bl-[30px] overflow-hidden ${
            showP ? "border" : ""
          } border-blue-500`}
        >
          <div
            className={`hidden md:block ${
              showP ? " opacity-[1]" : "opacity-[0]"
            } px-3`}
          >
            <BsSearch />
          </div>

          <div
            className={`rounded-tl-[30px] rounded-bl-[30px] overflow-hidden ${
              !showP ? "border" : ""
            } border-[#b1afaf]`}
          >
            <input
              onFocus={() => setShowP(true)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => setShowP(false)}
              className="w-[140px] md:w-[300px] lg:w-[550px] outline-none p-1 md:p-2 pl-2 group"
              type="text"
              placeholder="search"
              onKeyDown={(e) => {
                e.key === "Enter" ? sendSearch() : "";
              }}
            />
          </div>
        </div>
        <div className="mr-2 md:mr-0 flex gap-2 items-center  overflow-hidden ">
          <button
            onClick={sendSearch}
            className="rounded-tr-[30px] rounded-br-[30px] py-[8.5px] md:py-[13px] px-3 md:px-5 bg-[#eeecec]"
          >
            <BsSearch />
          </button>
          <div className="w-[45px] h-[45px] rounded-full bg-[#e3e0e0] md:flex justify-center items-center hidden">
            <BsMicFill />
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <BsFillCameraVideoFill size={22} className="hidden md:block" />
        <BsFillBellFill size={22} className="hidden md:block" />
        <div className="w-[30px] h-[30px] rounded-full bg-blue-500"></div>
      </div>

      <div
        id="loadBar"
        className="absolute h-[3px] bg-red-500 top-0 left-0"
      ></div>
    </header>
  );
};

export default NavBar;
