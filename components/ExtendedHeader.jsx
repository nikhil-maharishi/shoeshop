import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import SearchBar from "./SearchBar";

const ExtendedHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState([false]);
  return (
    <header className="w-full h-[30px] md:h-[50px] bg-white justify-center flex items-center z-20 relative transition-transform duration-300">
      <Wrapper className="flex gap-[50px] ">
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        <div className="">
          {mobileMenu ? (
            <VscChromeClose
              className="text-[16px]"
              onClick={() => setMobileMenu(false)}
            />
            
            
          ) : (
            <div className=" flex justify-between">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
              </div>
              <div className=" lg:hidden md:w-[280px] ">
              <SearchBar />
              </div>
              
            
            
            </div>
            
          )}
        </div>
        

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
      </Wrapper>
    </header>
  );
};

export default ExtendedHeader;
