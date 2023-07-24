import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

function App() {
  // search box
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="bg-gray-200">

      {/* Navbar Section */}
      <nav className="grid grid-cols-[25%_50%_25%] pt-3">

        {/* logo */}
        <div className="flex justify-center py-2">
          <p className="font-mono text-xl font-black">Newlearning</p>
        </div>

        {/* nav links */}
        <div className="grid grid-cols-5 py-2 mx-8">
          <p className="mx-5 font-bold text-center cursor-pointer">Home</p>
          <p className="mx-5 font-bold text-center cursor-pointer">Courses</p>
          <p className="mx-5 font-bold text-center cursor-pointer">Apply</p>
          <p className="mx-5 font-bold text-center cursor-pointer">About Us</p>
          <p className="mx-5 font-bold text-center cursor-pointer">Contact</p>
        </div>

        {/* search box */}
        <div>
          <div className="bg-white grid grid-cols-[80%_20%] hover:ring hover:ring-3 ring-gray-300 border-2 border-gray rounded-full py-1 mt-1 ml-4 mr-20 pl-4 cursor-pointer">
            <input
              className="outline-none"
              type="text"
              placeholder="Search..."
              onChange={(e) => handleSearch(e.target.value)}
            />
            <ion-icon style={{ color: "gray", fontSize: 24 }} name="search-sharp"></ion-icon>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid grid-cols-2">

        {/* left div */}
        <div className="grid grid-rows-3 gap-6 m-20">
          <div>
            <p className="text-4xl font-bold">Take Online</p>
            <p className="text-4xl font-bold"><span className="text-red-300">Programming</span> Courses</p>
            <p className="text-4xl font-bold">With Certificate</p>
          </div>
          <div className="h-10 w-96">
            <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipiscing elit, nunc nisi semper est nullam proin mus ligula, habitant class habitasse metus ut eget.</p>
          </div>
          <button className="w-48 h-12 text-gray-200 bg-teal-400 rounded-md focus:ring focus:ring-3 ring-teal-300">Find courses</button>
        </div>

        {/* right div */}
        <div>

        </div>
      </section>
    </div>
  );
}

export default App;
