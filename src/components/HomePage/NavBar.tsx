import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { MenuButton,MenuIconContainer } from "../Buttons";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const menuHandler = () => setOpenMenu(!openMenu);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`flex justify-between items-center bg-white h-14 p-4 md:p-6 w-[96%] m-auto 
          fixed left-1/2 translate-x-[-50%] drop-shadow-xl z-20
          transition-all duration-500 ease-in-out
          ${scrolling ? "top-0 w-full rounded-none md:p-6" : openMenu ? "top-5 w-[96%] rounded-t-xl md:p-6" : "top-5 w-[96%] rounded-xl"}
        `}
      >
        <div className="flex items-center">
          <Link to="/">
          <h1 className="text-lg font-bold italic uppercase text-gray-700">Logo</h1>
          </Link>
        </div>

        {/* MENU */}
        <ul
          className={`
            md:flex md:items-center md:gap-4 font-medium text-gray-700 [&>li]:cursor-pointer
            absolute md:static left-0 md:left-auto top-full md:top-auto w-full md:w-auto bg-white
            flex flex-col md:flex-row text-center md:text-left

            /* MOBILE MENU ANIMATION */
            max-h-0 opacity-0 md:max-h-full md:opacity-100
            ${openMenu ? "max-h-[500px] opacity-100" : ""}

            /* Rounded corners */
            rounded-b-xl md:rounded-b-none
            ${scrolling ? "rounded-b-none" : ""}
            
            /* Animation */
            transition-all duration-500 ease-in-out
          `}
        >
          
<li className="group py-2 md:py-0">
  <a href="/" className="relative inline-block text-gray-800 transition-colors duration-200 group-hover:text-black">
    Choose Your Theme
    <span className="pointer-events-none absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-black 
      transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
  </a>
</li>

<li className="group py-2 md:py-0">
  <a href="/" className="relative inline-block text-gray-800 transition-colors duration-200 group-hover:text-black">
    Choose Your Recipient
    <span className="pointer-events-none absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-black 
      transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
  </a>
</li>

<li className="group py-2 md:py-0">
  <a href="/" className="relative inline-block text-gray-800 transition-colors duration-200 group-hover:text-black">
    How it Works
    <span className="pointer-events-none absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-black 
      transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
  </a>
</li>

<li className="group py-2 md:py-0">
  <a href="/" className="relative inline-block text-gray-800 transition-colors duration-200 group-hover:text-black">
    Meet Rachel AI
    <span className="pointer-events-none absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-black 
      transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
  </a>
</li>

<li className="group py-2 md:py-0">
  <a href="/" className="relative inline-block text-gray-800 transition-colors duration-200 group-hover:text-black">
    Our Story
    <span className="pointer-events-none absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-black 
      transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
  </a>
</li>

  <li className="py-2 md:py-0"><MenuButton title="Gift Cards" /></li> 

  <Link to="/dashboard/profile/Rachel">
  <li className="py-2 md:py-0"><MenuIconContainer icon={<AiOutlineUser />} /></li>
  </Link>
          <li className="py-2 md:py-0"><MenuIconContainer icon={<HiOutlineShoppingBag />} /></li>
        </ul>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <button className="text-gray-700" onClick={menuHandler} aria-label="Menu">
            {openMenu ? <GrClose size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={menuHandler}
        className={`fixed inset-0 bg-black/20 z-10 transition-opacity duration-300 
          ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      ></div>
    </>
  );
};

export default Navbar;