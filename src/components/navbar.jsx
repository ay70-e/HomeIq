import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#faf5eb] ">
   

        {/* Navigation Buttons */}
     <nav className=" flex items-center justify-between px-6 py-4 bg-white shadow-md">
  {/* Left Section - Logo or Brand */}
    <div className="w-24">
          <img
            src="/assets/logo1.png"
            alt="Homeiq Logo"
            className="w-[120px]  "
          /> 
        </div>

 

  {/* Right Section - Buttons */}
 {/* Center + Right Section - Navigation Links and Buttons */}
<div className="flex items-center gap-6 font-medium">
  {/* Navigation Links */}
  <div className="flex gap-4 text-[#c86e3e]">
    <a
      href="#"
      className=" no-underline hover:underline hover:decoration-[#E87722] hover:underline-offset-4 transition-colors"
    >
      Services
    </a>
    <a
      href="#"
      className=" no-underline hover:underline hover:decoration-[#E87722] hover:underline-offset-4 transition-colors"
    >
      Products
    </a>
    <a
      href="#"
      className=" no-underline hover:underline hover:decoration-[#E87722] hover:underline-offset-4 transition-colors"
    >
      About Us
    </a>
    <a
      href="#"
      className=" no-underline hover:underline hover:decoration-[#E87722] hover:underline-offset-4 transition-colors"
    >
      Contact
    </a>
  </div>

  {/* Buttons */}
  <div className="flex items-center space-x-3">
    <button className="bg-[#faf5eb] border border-[#c86e3e]
     text-[#c86e3e] rounded-full px-5 py-1 hover:scale-105 ">
      Login
    </button>
    <button className="bg-[#faf5eb] border border-[#c86e3e]
     text-[#c86e3e] rounded-full px-5 py-1 hover:scale-105 ">
      Sign Up
    </button>
   
  </div>
</div>
</nav>
   

     
     
    </div>
   
  );
};

export default Navbar;
