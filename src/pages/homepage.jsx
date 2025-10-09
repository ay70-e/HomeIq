import React, { useState } from "react";
import { Search } from "lucide-react";
import Footer from "../components/footer";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div className=" pt-20 h-screen bg-gradient-to-b from-[#a2b37a] to-[#6d8a3e] ">

      {/* Section 1 - Hero */}
      <section className="pt-20 h-screen flex flex-col justify-center items-center px-4 relative ">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-0 text-center drop-shadow-lg">
          Welcome to Homeiq
        </h1>
        <h3 className="text-xl md:text-2xl mb-8 text-center drop-shadow-md ">
          Your Home, Simplified
        </h3>

        {/* Search Bar */}
      <form
      onSubmit={handleSearch}
      className="relative flex justify-center mt-10"
    >
      <div className="relative w-[300px]">
        <input
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-full shadow-lg text-gray-800 placeholder-gray-500"
        />
      </div>
    </form>
    {/*==============================================================================================================*/}  
{/* Image 
 <div className="">
          <img
            src="/assets/home.png"
            alt="Homeiq Logo"
            className="w-[500px] "
          />       

        </div>

*/}


        {/* Decorative Circle */}
        <div className="absolute bottom-0 w-64 h-64 bg-white/10 rounded-full -z-10 blur-3xl"></div>
      </section>

      {/* Section 2 - Services */}
      <section className="h-screen flex flex-col justify-center items-center bg-[#8aa04b] text-center px-4">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-md">Our Services</h2>
        <p className="max-w-xl text-lg">
          Discover a wide range of home services tailored for your comfort and convenience.
        </p>
      </section>

      {/* Section 3 - Promotions */}
      <section className="h-screen flex flex-col justify-center items-center bg-[#6d8a3e] text-center px-4">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-md">Featured Offers</h2>
        <p className="max-w-xl text-lg">
          Check out our most popular services and exclusive deals.
        </p>
      </section>
    <Footer />
    </div>
  );
};

export default Homepage;