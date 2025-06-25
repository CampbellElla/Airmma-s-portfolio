import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Inputs = {
  email: string;
  password: string;
  confirmpassword: string;
};
const Page404 = () => {
  const [view, setView] = useState(true);
  const [view2, setView2] = useState(true);
  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const submitform = () => {
    alert(JSON.stringify(inputs, null, 2));
  };
  return (
    <div className="flex items-center justify-center bg-blue-600/20 h-screen">
      <form action={submitform} className="mx-auto w-[50%] flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="font-bold text-lg text-black">Email</label>
          <input
            type="text"
            className="px-4 py-2 rounded-m outline-none border"
            placeholder="Email"
            name="email"
            value={inputs.email}
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-lg text-black">Password</label>
          <div className="flex items-center justify-center px-4 py-2 rounded-m outline-none border bg-white">
            <input
              type={view ? "password" : "text"}
              className="outline-none w-full "
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
            <div className="flex">
              {view ? (
                <FaEye
                  className="cursor-pointer text-xl"
                  onClick={() => setView(false)}
                />
              ) : (
                <FaEyeSlash
                  className="cursor-pointer text-xl"
                  onClick={() => setView(true)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-lg text-black">
            Confirm Password
          </label>
          <div className="flex items-center justify-center px-4 py-2 rounded-m outline-none border bg-white">
            <input
              type={view2 ? "password" : "text"}
              className="outline-none w-full"
              placeholder="Confirm Password"
              name="confirmpassword"
              onChange={(e) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
            <div className="flex">
              {view2 ? (
                <FaEye
                  className="cursor-pointer text-xl"
                  onClick={() => setView2(false)}
                />
              ) : (
                <FaEyeSlash
                  className="cursor-pointer text-xl"
                  onClick={() => setView2(true)}
                />
              )}
            </div>
          </div>
        </div>
        <button className="mx-auto bg-blue-600 px-4 py-2 mt-5 rounded-md text-white">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Page404;
