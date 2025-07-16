import { useRef } from "react";
import { BsTwitterX } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_gbsm4gk",
        "template_zwudps6",
        form.current,
        "GUlckk0icOffQgNHr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };
  return (
    <div className="w-full relative lg:pt-40 pt-0 mx-auto flex lg:flex-row flex-col justify-between lg:overflow-hidden items-center p-6 lg:p-10 bg-gradient-to-r from-black via-gray-900 to-gray-600 gap-10">
      <div className="w-full lg:w-[45%] flex justify-center items-center mb-10 lg:mb-0">
        <img
          src="Ella.jpg"
          alt=""
          className="lg:w-[640px] lg:h-[480px] hidden lg:block object-cover rounded px-10"
        />
      </div>
      <div className="lg:absolute lg:-bottom-3 lg:-right-3 w-full lg:w-[55%] flex flex-col items-center lg:items-start">
        <h1 className="lg:mt-10 mt-0 text-yellow-500 lg:text-6xl text-4xl lg:text-left text-center mb-6">
          Contact me
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full border-4 border-yellow-400 p-6 lg:p-10 bg-black/30 shadow-1g"
        >
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <label className="text-white">Full Name:</label>
              <input
                type="text"
                name="user_name"
                className="bg-transparent border-b-2 border-yellow-600 w-full outline-none text-yellow-600 w-60"
                required
              ></input>
              <label className="text-white">Email Address:</label>
              <input
                type="text"
                name="user_email"
                className="bg-transparent border-b-2 border-yellow-600 w-full outline-none text-yellow-600 w-60"
                required
              ></input>
              <label className="text-white">Message:</label>
              <textarea
                name="message"
                id="#"
                placeholder="Type your message..."
                className="bg-transparent border-2 border-yellow-600 text-yellow-600 w-full h-40 p-2 outline-none"
                required
              ></textarea>
            </div>
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <div>
                <h2 className="text-2xl text-yellow-600">Email</h2>
                <Link
                  to="mailto:campbellemmanuella17@gmail.com"
                  className="text-white hover:text-yellow-600"
                >
                  campbellemmanuella17@gmail.com
                </Link>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-600">Based in</h2>
                <p className="text-white">Nigeria</p>
              </div>
              <div>
                <h2 className="text-2xl text-yellow-600 hover:text-white">
                  Phone
                </h2>
                <p className="text-white">+2347051604330</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6 gap-4">
            <button className="text-white bg-yellow-600 hover:bg-yellow-400 px-6 py-2 rounded-full mt-4">
              Submit
            </button>
            <Link to="#" target="blank" rel="noopener noreferrer">
              <FaInstagram className="mt-2 hover:text-gray-400 text-pink-600 cursor-pointer" />
            </Link>
            <Link to="#" target="blank" rel="noopener noreferrer">
              <BsTwitterX className="mt-2 hover:text-gray-400 text-black  cursor-pointer" />
            </Link>
            <Link to="#" target="blank" rel="noopener noreferrer">
              <FaFacebookF className="mt-2 hover:text-gray-400 text-blue-500 cursor-pointer" />
            </Link>
            <Link
              to="https://wa.me/2347051604330?text=Hi%20Campbell"
              target="blank"
              rel="noopener noreferrer"
            >
              <TbBrandWhatsappFilled className="mt-2 hover:text-gray-400 cursor-pointer text-2xl text-green-500" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
