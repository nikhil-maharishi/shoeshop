import React from "react";

const SearchBar = ({ setMobileMenu }) => {
  return (
    <div className="border rounded-sm flex static w-full lg:w-[550px]  border-black text-black' ">
      <i
        className="fa fa-search  py-2 px-3 z-10 hover:bg-black hover:text-white"
        aria-hidden="true"
      ></i>
      <input
        className=" outline-none w-full text-[14px] p-1 font-medium  bg-black/[0.05] "
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
