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

  const menuHandler = () => setOpenMenu((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOverlayClick = () => setOpenMenu(false);

  const navItems = [
    { id: 1, label: "Choose Your Theme", to: "/" },
    { id: 2, label: "Choose Your Recipient", to: "/" },
    { id: 3, label: "How it Works", to: "/" },
    { id: 4, label: "Meet Rachel AI", to: "/" },
    { id: 5, label: "Our Story", to: "/" },
  ];

  return (
    <>

      
      {/* NAVBAR */}
      <nav
        className={`flex justify-between items-center bg-white h-14 p-4 md:p-6 w-[96%] m-auto 
          fixed left-1/2 -translate-x-1/2 drop-shadow-xl z-20
          transition-all duration-500 ease-in-out
          ${
            scrolling
              ? "top-0 w-full rounded-none"
              : openMenu
              ? "top-5 w-[96%] rounded-t-xl"
              : "top-5 w-[96%] rounded-xl"
          }
        `}
      >
       

        {/* MENU */}
        <ul
          className={`
            md:flex md:items-center gap-2 sm:gap-2 md:gap-6 font-medium text-gray-700 [&>li]:cursor-pointer
            absolute md:static left-0 top-full w-full md:w-auto bg-white
            flex flex-col md:flex-row text-center md:text-left

            max-h-0 opacity-0 md:max-h-full md:opacity-100
            ${
              openMenu
                ? "max-h-[500px] opacity-100 pointer-events-auto"
                : "pointer-events-none md:pointer-events-auto"
            }

            rounded-b-xl md:rounded-b-none
            ${scrolling ? "rounded-b-none" : ""}

            transition-all duration-500 ease-in-out
          `}
        >
           <Link to="/" className="text-lg font-bold italic uppercase text-gray-700">
          Logo
        </Link>
        
          {navItems.map((item) => (
            <li key={item.id} className="group py-2 md:py-0  block md:hidden lg:block">
              <Link
                to={item.to}
                className="relative inline-block text-gray-800 transition-colors duration-200 group-hover:text-black whitespace-nowrap"
                onClick={() => setOpenMenu(false)}
              >
                {item.label}
                <span
                  className="pointer-events-none absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-black 
                  transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"
                ></span>
              </Link>
            </li>
          ))}

           <li className="py-2 md:py-0">
            <Link to='/create-book'>
            <MenuButton title="Create Your Book" className="whitespace-nowrap" />
            </Link>
          </li>

          <li className="py-2 md:py-0">
            <MenuButton title="Gift Cards" className="whitespace-nowrap" />
          </li>

          <li className="py-2 md:py-0">
            <Link to="/dashboard/user-profile/rachel" onClick={() => setOpenMenu(false)}>
              <MenuIconContainer icon={<AiOutlineUser />} />
            </Link>
          </li>

          <li className="py-2 md:py-0">
            <MenuIconContainer icon={<HiOutlineShoppingBag />} />
          </li>
        </ul>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <button
            className="text-gray-700"
            onClick={menuHandler}
            aria-label="Menu"
          >
            {openMenu ? <GrClose size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={handleOverlayClick}
        className={`fixed inset-0 bg-black/30 z-10 md:hidden
          transition-opacity duration-300
          ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      ></div>

      {/* SPACER */}
      <div className="h-16 md:h-0"></div>
    </>
  );
};

export default Navbar;