import { div, h1, h2 } from "framer-motion/client";
import { useState } from "react";

const Contact = () => {
  // const [color, setColor] = useState(false);
  // return (
  //   <div className="flex justify-center items-center">
  //     <div>
  //       <button onClick={() => setColor((prev) => !prev)}>color</button>

  //       <div
  //         className={`${!color ? "bg-green-600" : "bg-red-300"} w-80 h-80`}
  //       ></div>
  //     </div>
  //   </div>
  // );

  const [sign, setSign] = useState(false);
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-gray-500 min h-screen">
      {!sign ? (
        <div className="flex flex-col gap-7 items-center">
          <h1 className="text-white justify-center text-4xl">Sign in</h1>
          <label className="flex flex-col">
            Email
            <input
              type="text"
              placeholder="Enter your email"
              className="border-2 border-red-500"
            />
          </label>
          <label className="flex flex-col">
            Password
            <input
              type="text"
              placeholder="Enter your password"
              className="border-2 border-red-500"
            />
          </label>
          <button className="bg-red-600 rounded-full font-medium hover:opacity-80 transition duration-300 p-3">
            Login
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-7 items-center">
          <h1 className="text-white justify-center text-4xl">Register</h1>
          <label className="flex flex-col">
            Name
            <input
              type="text"
              placeholder="Enter your Name"
              className="border-2 border-red-500"
            />
          </label>
          <label className="flex flex-col">
            Password
            <input
              type="text"
              placeholder="Enter your password"
              required
              className="border-2 border-red-500"
            />
          </label>
          <label className="flex flex-col">
            Confirm Password
            <input
              type="text"
              placeholder="Confirm your password"
              required
              className="border-2 border-red-500"
            />
          </label>
          <button className="bg-red-600 rounded-full font-medium hover:opacity-80 transition duration-300 p-3">
            Register
          </button>
        </div>
      )}

      <span onClick={() => setSign((prev) => !prev)} className="cursor-pointer">
        {sign ? "Have any account? Sign in" : "Need any account? Register"}
      </span>
    </div>
  );
};

export default Contact;
