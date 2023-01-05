import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/a76c1727-34da-4d80-99a3-69476e78860d/IN-en-20221228-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50 ">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-500 rounded"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-3 my-2 bg-gray-500 rounded"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p className="mr-2">
                  <input type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to Netflix?</span>
                <Link to="/signup"> Sign Up </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
