import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import SearchBar from "./SearchBar";

const Header = () => {
  // const [mobileMenu, setMobileMenu] = useState(false);
  // const [showCatMenu, setShowCatMenu] = useState([false]);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  return (
    <>
      <header
        className={`w-full h-[50px] md:h-[70px] bg-white flex items-center z-20 relative top-0 transition-transform duration-300 ${show}`}
      >
        <Wrapper className="h-[60px] flex justify-around items-center ">
          <Link href="/">
            {/* <img src='/logo.svg' className='w-[40px] md:w-[60px]' /> */}
            <div className="w-[40px] md:w-[60px] text-[15px] md:text-[34px] font-bold leading-tight">
              Shopee
            </div>
          </Link>

          {/* <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}/> */}

          {/* searchBar */}
          <div className="lg:w-[550px] ">
            <SearchBar className="md:hidden md:w-0" />
          </div>
          

          {/* {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )} */}

          {/* right div */}
          <div className="flex">
            {/* loginbtn */}
            <Link href="/login">
              <button className="w-[65px] py-1 rounded-full text-[14px] font-medium transition-transform active:scale-95 flex items-center justify-center hover:bg-black/[0.05] md:w-[100px] md:text-lg">
                Sign In
              </button>
            </Link>

            {/* icon */}
            <div className="flex items-center gap-2 text-black">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  6
                </div>
              </div>
            </div>

            {/* icon */}
            <Link href="/cart">
              <div className="flex items-center gap-2 text-black">
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                  <BsCart className="text-[15px] md:text-[20px]" />
                  <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                    5
                  </div>
                </div>
              </div>
            </Link>

            {/* mobile icon */}
            {/* <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div> */}
          </div>
        </Wrapper>

        {/* <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}/> */}
      </header>
      <Divider variant="middle" orientation="horizontal" />
    </>
  );
};

export default Header;
