"use client";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { IoClose, IoHome } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiBlackmagicdesign } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white lg:px-[6%] py-5 px-2% !z-50">
      <nav className="flex items-center justify-between lg:w-full">
        <Link to="/">
          <img
            src="logo.png"
            alt="logo"
            className="w-10 invert absolute top-5"
          />
        </Link>

        <div className="absolute top-5 right-5 lg:hidden  flex items-center justify-center">
          {!nav ? (
            <MdMenu className="cursor-pointer" onClick={() => setNav(true)} />
          ) : (
            <IoClose className="cursor-pointer" onClick={() => setNav(false)} />
          )}
        </div>

        <div
          className={`${
            !nav
              ? "hidden lg:flex"
              : "absolute right-1 left-1 top-4 rounded-md bg-gray-500 p-3 w-[90%] mx-auto"
          } flex lg:flex-row flex-col items-center gap-5 mt-10 lg:mt-0 text-white`}
        >
          {/* <div className="flex lg:flex-row flex-col hidden lg:block items-center gap-5 text-white"> */}
          <Link
            to="/"
            className="flex items-center gap-1"
            onClick={() => setNav(false)}
          >
            <IoHome />
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-1"
            onClick={() => setNav(false)}
          >
            <FaRegUser />
            About
          </Link>
          <Link
            to="/skills"
            className="flex items-center gap-1"
            onClick={() => setNav(false)}
          >
            <FaChalkboardUser />
            Skills
          </Link>
          <Link
            to="/experience"
            className="flex items-center gap-1"
            onClick={() => setNav(false)}
          >
            <HiAcademicCap />
            Experience
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-1"
            onClick={() => setNav(false)}
          >
            <RiContactsFill />
            Contact
          </Link>
          <Link
            to="/project"
            className="flex items-center gap-1"
            onClick={() => setNav(false)}
          >
            <SiBlackmagicdesign />
            Project
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
