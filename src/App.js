import React, { useState } from 'react';

function App() {
  // search box
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // accessing assets files
  const teacher = require("./assets/images/teacher.png");
  const data = require("./assets/data.json");
  const apiData = data.api;

  return (
    <div className="bg-gray-100">

      {/* Navbar Section */}
      <nav className="grid grid-cols-[25%_50%_25%] py-2">

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
      <section className="w-full lg:h-[96vh] grid grid-hero">

        {/* left div text */}
        <div className="flex flex-col justify-center w-screen gap-6 mx-48 my-20 lg:w-auto">
          <div>
            <p className="text-4xl font-bold">Take Online</p>
            <p className="text-4xl font-bold"><span className="text-red-400">Programming</span> Courses</p>
            <p className="text-4xl font-bold">With Certificate</p>
          </div>
          <div className="">
            <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipiscing elit, nunc nisi semper est nullam proin mus ligula, habitant class habitasse metus ut eget.</p>
          </div>
          <button className="flex items-center justify-center w-48 h-12 text-gray-100 bg-teal-500 rounded-md focus:ring focus:ring-3 ring-teal-300">
            <span className="mr-2">Find courses</span>
            <ion-icon name="arrow-forward-outline" style={{ fontSize: 20, color: "gainsboro" }}></ion-icon>
          </button>
        </div>

        {/* right div image */}
        <div className='hidden w-0 lg:w-auto lg:block lg:bg-teal-700 lg:bg-opacity-60 lg:pb-8'>
          <img src={teacher} className="absolute" style={{ right: "1%", height: "100%", top: "6%" }} alt="Hero"
          />
        </div>
      </section>

      {/* courses section */}
      <section className="text-gray-600 body-font">
        <div className="container px-24 py-24">

          {/* headings */}
          <h3 className="mb-1 text-sm tracking-widest text-center text-gray-500 uppercase title-font">Popular Courses</h3>
          <h1 className="text-3xl font-semibold text-center">Pick a Course to Get Started</h1>
          <div className="flex items-center justify-center">
            <div className="w-20 h-2 my-2 bg-teal-500 rounded-full"></div>
          </div>

          {/* courses cards */}
          <div className="grid grid-cols-3">
            {apiData.map((item) => (
              <div className="p-4 m-5 bg-white rounded-lg shadow-lg ">
                <div className="relative block h-48 overflow-hidden rounded cursor-pointer">
                  <img alt="ecommerce" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/420x260" />
                </div>
                <div className="mt-4" key={item.id}>
                  <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{item.level}</h3>
                  <h2 className="text-lg font-medium text-gray-900 title-font">{item.name}</h2>
                  <div className='flex flex-row justify-between mt-2'>
                    <p><ion-icon name="play-circle-outline" style={{ color: "orange", fontSize: 17 }}></ion-icon> {item.lesson} Lesson</p>
                    <p><ion-icon name="star" style={{ color: "orange" }}></ion-icon> {item.rating}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* browse course button */}
          <div className='flex items-center justify-center py-4'>
            <button className="flex items-center justify-center w-56 h-12 text-gray-100 bg-teal-500 rounded-md focus:ring focus:ring-3 ring-teal-300">
              <span className="mr-2">Browse more courses</span>
              <ion-icon name="arrow-forward-outline" style={{ fontSize: 20, color: "gainsboro" }}></ion-icon>
            </button>
          </div>
        </div>
      </section>

      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer">
              <span class="ml-3 text-xl font-mono font-black">Newlearning</span>
            </div>
            <p class="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit, tempor nulla mauris cursus natoque ultricies nisi, pellentesque fames class cum curae neque.</p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="/">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="/">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="/">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="/">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="/">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="/">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="/">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="/">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contacts</h2>
              <p class="text-gray-500 text-sm my-4 md:text-left text-center">Enter your email address to register to our newsletter subscription
              </p>
              <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Your email" />
                </div>
                <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 Newlearning - All Rights Resersed
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500" href='/'>
                <ion-icon name="logo-facebook" style={{ fontSize: 24 }}></ion-icon>
              </a>
              <a class="ml-5 text-gray-500" href="/">
                <ion-icon name="logo-twitter" style={{ fontSize: 24 }}></ion-icon>
              </a>
              <a class="ml-5 text-gray-500" href="/">
                <ion-icon name="logo-instagram" style={{ fontSize: 24 }}></ion-icon>
              </a>
              <a class="ml-5 text-gray-500" href="/">
                <ion-icon name="logo-linkedin" style={{ fontSize: 24 }}></ion-icon>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
