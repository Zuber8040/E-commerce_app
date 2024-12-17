import React from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";

function Head() {
  return (
    <div className="w-full shadow-md h-24 flex justify-center">
      <div className=" w-[70%] flex justify-between">
        <div className="flex items-center ">
          <img
            className="w-24 mt-2"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt="logo"
            srcSet=""
          />
          <div className="flex items-center gap-2  justify-center ">
            <p className="font-bold border-b-2 border-black"> Others</p>
            <RiArrowDownWideLine className="text-2xl mt-1 text-orange-500" />
          </div>
        </div>

        <div className="flex items-center gap-6 ">
          <div className="flex">
            <IoBagOutline />
            <p>Swiggy Corporate </p>
          </div>
          <div className="flex">
            <IoBagOutline />
            <p>Search</p>
          </div>
          <div className="flex">
            <IoBagOutline />
            <p>Offers </p>
          </div>
          <div className="flex">
            <IoBagOutline />
            <p>Sign In</p>
          </div>
          <div className="flex">
            <IoBagOutline />
            <p>Cart </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
