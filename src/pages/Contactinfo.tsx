import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-8">
      <Link
        to="/"
        className="flex items-center gap-2 text-yellow-400 hover:underline mb-6"
      >
        <FiArrowLeft className="text-1g" />
        Back to Home
      </Link>
      <img
        src="Ella.png"
        alt="Campbell"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Contact Info</h1>
      <p className="mb-2 text-white">Name: Campbell Emmanuella</p>

      <Link
        to="https://wa.me/2347051604330?text=Hi%20Campbell"
        target="blank"
        className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Message me on Whatsapp
      </Link>
    </div>
  );
};

export default ContactInfo;
