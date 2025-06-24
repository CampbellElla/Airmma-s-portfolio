import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full relative mx-auto h-screen p-10 flex lg:flex-row flex-col justify-between items-center bg-gradient-to-r from-black via-gray-900 overflow-hidden">
      <div className="w-full lg:w-[45%]">
        <img
          src="Ella.jpg"
          alt=""
          className="lg:w-[640px] lg:h-[480px] hidden md:block"
        />
      </div>
      <div className="absolute -bottom-3 -right-3 w-full lg:w-[55%]">
        <h1 className="text-yellow-500 lg:text-6xl text-4xl lg:text-left text-center mt-20 mb-4">
          Contact me
        </h1>
        <div className=" border-4 border-yellow-400 p-10">
          <div className="flex">
            <div className="gap-6 py-5 px-10 flex flex-col">
              <label className="text-white">Full Name:</label>
              <input
                type="text"
                className="bg-transparent border-0 border-b-2 text-yellow-600 w-60 "
              ></input>
              <label className="text-white">Email:</label>
              <input
                type="text"
                className="bg-transparent border-0 text-yellow-600 border-b-2 w-60"
              ></input>
              <label className="text-white">Message:</label>
              <textarea
                name="text"
                id="#"
                placeholder="Type your message..."
                className="bg-transparent border-2 text-yellow-600 h-40 w-60 p-2"
              ></textarea>
            </div>
            <div className="p-10 flex flex-col gap-16">
              <div>
                <h2 className="text-2xl underline hover:text-white text-yellow-400">
                  Contact
                </h2>
                <Link
                  to="mailto:campbellemmanuella17@gmail.com"
                  className="text-white"
                >
                  campbellemmanuella17@gmail.com
                </Link>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-400">Based in</h2>
                <p>Nigeria</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 justify-center items-center mt-8 mb-6">
            <Link to="/Contactinfo">
              <button className="text-white bg-black px-6 py-2 rounded-full">
                Contact Us
              </button>
            </Link>
            <p>
              <FaInstagram className="mb-2" />
            </p>
            <p>
              <FaTwitter className="mb-2" />
            </p>
            <p>
              <FaFacebookF className="mb-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
