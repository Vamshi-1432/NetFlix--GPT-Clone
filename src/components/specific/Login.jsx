import React, { useState, Fragment } from "react";
import Header from "../common/Header";
import NetflixBG from "../../Images/NetflixBG.png";
import SignUpForm from "./SignUpForm";

const Login = () => {
  const [show, setShow] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const ChangeSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="bg-bg-color bg-custom-gradient ">
      <Header />
      <div className="absolute">
        <img src={NetflixBG} alt="logo" className="w-[100%]" />
      </div>
      <Fragment>
        <div>
          <form
            className={`w-[26%] ${
              signIn ? "h-[650px]" : "h-[680px]"
            } absolute bg-black bg-opacity-70 font-semibold left-0 right-0 mx-auto my-40 py-20 text-white rounded-xl shadow-xl`}
          >
            <h1 className="font-bold text-3xl underline font-serif mr-64 ">
              {signIn ? "Sign In" : "Sign Up"}
            </h1>
            {!signIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="py-[0.7rem] pr-[2rem] pl-[0.5rem] mt-12 rounded-lg w-[350px] mr-2 bg-gray-700 focus:bg-gray-300"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className={`py-[0.7rem] pr-[2rem] pl-[0.5rem] ${
                signIn ? "mt-12" : "mt-5"
              } rounded-lg w-[350px] mr-2 bg-gray-700 focus:bg-gray-300`}
            />

            {!signIn && (
              <input
                type="text"
                placeholder="Mobile Number"
                className="py-[0.7rem] pr-[2rem] pl-[0.5rem] mt-5 rounded-lg w-[350px] mr-2 bg-gray-700 focus:bg-gray-300"
              />
            )}
            {!signIn && (
              <input
                type={show ? "text" : "password"}
                placeholder="Enter New Password"
                className="py-[0.7rem] pr-[2rem] pl-[0.5rem] mr-2 mt-5 rounded-lg w-[350px] bg-gray-700 focus:bg-gray-300 "
              />
            )}
            {!signIn && (
              <input
                type={show ? "text" : "password"}
                placeholder="Re-Enter New Password"
                className="py-[0.7rem] pr-[2rem] pl-[0.5rem] mr-2 mt-5 rounded-lg w-[350px] bg-gray-700 focus:bg-gray-300 "
              />
            )}

            {signIn && (
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="py-[0.7rem] pr-[2rem] pl-[0.5rem] mr-2 mt-5 rounded-lg w-[350px] bg-gray-700 focus:bg-gray-300 "
              />
            )}
            <br />
            <div className="mt-3 mr-56">
              <input type="checkbox" onClick={() => setShow(!show)} />
              <label className="ml-2">Show Password</label>
            </div>
            <button className="py-2 px-4 w-[350px] mr-2 rounded-lg text-lg mt-8 font-bold shadow-xl bg-red-700 hover:bg-red-600">
              {signIn ? "Sign In" : "Create an account"}
            </button>
            {signIn ? (
              <p className="mt-3 mr-[7.5rem] text-lg text-gray-400">
                <span>New to NetFlix?</span>{" "}
                <span
                  className="hover:underline cursor-pointer text-white"
                  onClick={ChangeSignIn}
                >
                  Sign Up Now
                </span>
                .
              </p>
            ) : (
              <p className="mt-3 mr-[7.5rem] text-lg text-gray-400">
                <span>Already Registered?</span>{" "}
                <span
                  className="hover:underline cursor-pointer text-white"
                  onClick={ChangeSignIn}
                >
                  Sign In Now
                </span>
                .
              </p>
            )}
          </form>
        </div>
      </Fragment>
    </div>
  );
};

export default Login;
