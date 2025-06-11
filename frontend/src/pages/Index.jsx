import reactLogo from "../assets/react.svg";
import { useState } from "react";

let Index = () => {
  let [isLoginOpen, setIsLoginOpen] = useState(false);
  let [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <div className="bg-[#0c0c0b] min-h-screen w-full">
      {/* Login Modal */}
      <div className={`${isLoginOpen ? "flex" : "hidden"} fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-60`}> 
        <div className="bg-[#232323] rounded-lg p-8 w-full max-w-md mx-auto relative flex flex-col gap-4">
          <button onClick={() => setIsLoginOpen(false)} className="absolute top-2 right-2 text-white text-xl">&times;</button>
          <h2 className="text-white text-xl font-semibold mb-4 text-center">Login in </h2>
          <label className="text-white text-sm mb-1">Email</label>
          <input type="email" placeholder="email" className="mb-3 p-2 rounded bg-[#181818] text-white border border-gray-600 focus:outline-none" />
          <label className="text-white text-sm mb-1">Password</label>
          <input type="password" placeholder="password" className="mb-3 p-2 rounded bg-[#181818] text-white border border-gray-600 focus:outline-none" />
          <button className="bg-purple-500 text-white py-2 rounded mb-2 hover:bg-purple-600 transition-all">Signin</button>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>
          <button className="bg-red-700 text-white py-2 rounded mb-2 flex items-center justify-center gap-2 hover:bg-red-800 transition-all">
            <span className="text-lg">&#x1F5A5;</span> Login with Gmail
          </button>
          <button className="bg-blue-700 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-800 transition-all">
            <span className="text-lg">&#x1F426;</span> Login with Facebook
          </button>
        </div>
      </div>
      {/* Registration Modal */}
      <div className={`${isRegisterOpen ? "flex" : "hidden"} fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-60`}> 
        <div className="bg-[#232323] rounded-lg p-8 w-full max-w-md mx-auto relative flex flex-col gap-4">
          <button onClick={() => setIsRegisterOpen(false)} className="absolute top-2 right-2 text-white text-xl">&times;</button>
          <h2 className="text-white text-xl font-semibold mb-4 text-center">Sign up in seconds</h2>
          <label className="text-white text-sm mb-1">Name</label>
          <input type="text" placeholder="name" className="mb-3 p-2 rounded bg-[#181818] text-white border border-gray-600 focus:outline-none" />
          <label className="text-white text-sm mb-1">Email</label>
          <input type="email" placeholder="email" className="mb-3 p-2 rounded bg-[#181818] text-white border border-gray-600 focus:outline-none" />
          <label className="text-white text-sm mb-1">Password</label>
          <input type="password" placeholder="password" className="mb-3 p-2 rounded bg-[#181818] text-white border border-gray-600 focus:outline-none" />
          <button className="bg-purple-500 text-white py-2 rounded mb-2 hover:bg-purple-600 transition-all">Sign up</button>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>
          <button className="bg-red-700 text-white py-2 rounded mb-2 flex items-center justify-center gap-2 hover:bg-red-800 transition-all">
            <span className="text-lg">&#x1F5A5;</span> Sign up with Gmail
          </button>
          <button className="bg-blue-700 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-800 transition-all">
            <span className="text-lg">&#x1F426;</span> Sign up with Facebook
          </button>
        </div>
      </div>

      <div className="bg-[#1b1b18] w-full">
        <div className="w-[90%] md:w-[80%] m-auto p-2 md:p-3">
          <div className="flex justify-between">
            <img 
              src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" 
              alt="React Logo" 
              className="w-24 md:w-auto"
            />
          </div>
          <div className="absolute top-4 right-4 flex gap-2 md:gap-4">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-blue-400 py-1 px-2 md:px-3 text-sm md:text-base text-white rounded hover:bg-blue-500 transition-all"
            >
              Sign-In
            </button>
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="bg-purple-400 py-1 px-2 md:px-3 text-sm md:text-base text-white rounded hover:bg-purple-500 transition-all"
            >
              Sign-Up
            </button>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4 md:px-0">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          What will you design today canva hello?
        </h1>
        <h3 className="text-base md:text-lg text-gray-300 mt-2 max-w-[90%] md:max-w-[600px]">
          Canva makes it easy to create and share professional designs.
        </h3>
        <button
        onClick={() => setIsRegisterOpen(true)}
         className="bg-purple-500 py-1 px-3 text-sm md:text-base text-white rounded hover:bg-blue-500 transition-all mt-4">
          Sign-up-for-Free
        </button>
      </div>
    </div>
  );
};

export default Index;
