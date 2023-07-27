import React, { useState } from 'react';
import { courses, features, stats, accordionData } from './assets/data';

function App() {
  // search box
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // output search term
  console.log(searchTerm)

  // accessing assets files
  const teacher = require("./assets/images/teacher.png");
  const sir = require("./assets/images/sir.png");

  // accordion component
  const Accordion = ({ id, title, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true)
    }
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div
        key={id}
        className={`accordion m-2 ${isHovered ? 'shadow-lg' : ''
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row items-center justify-between px-6 py-3 bg-teal-200 rounded-t-lg cursor-pointer">
          <div className="font-bold text-teal-800 accordion-title">{title}</div>
          <svg
            className={`w-5 h-5 ${isHovered ? 'transform rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className={`bg-white accordion-content transition-all duration-300 ${isHovered ? 'max-h-40 overflow-y-auto rounded-b-lg p-6' : 'max-h-0 overflow-hidden'
            }`}
        >
          <p className="text-teal-900">{content}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100">

      {/* Navbar Section */}
      <nav className="grid grid-cols-[25%_50%_25%] py-2" section="true">

        {/* logo */}
        <div className="flex justify-center py-2">
          {/* <p className="font-mono text-xl font-black">3dSolutions</p> */}
          <img src="logo-hd.png" alt="logo" height="25px" width="175px" />
        </div>

        {/* nav links */}
        <div className="grid grid-cols-5 py-2 mx-8">
          <a className="mx-5 font-bold text-center cursor-pointer" href="#home">Home</a>
          <a className="mx-5 font-bold text-center cursor-pointer" href="#courses">Courses</a>
          <a className="mx-5 font-bold text-center cursor-pointer" href="#contact">Apply</a>
          <a className="mx-5 font-bold text-center cursor-pointer" href="#faqs">FAQs</a>
          <a className="mx-5 font-bold text-center cursor-pointer" href="#contact">Contact</a>
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
      <section className="w-full lg:h-[90vh] grid grid-hero" id="home">

        {/* left div text */}
        <div className="flex flex-col justify-center w-screen gap-6 mx-48 my-20 lg:w-auto">
          <div>
            <p className="text-4xl font-bold">Take Online</p>
            <p className="text-4xl font-bold"><span className="text-red-400">Programming</span> Courses</p>
            <p className="text-4xl font-bold">With Certificate</p>
          </div>
          <div className="">
            <p className="font-semibold">Unlock Your Potential with Expert-Led Programming Courses. Learn at Your Own Pace, Anytime, Anywhere. Suitable for Beginners and Intermediate Developers.</p>
          </div>
          <a href="#courses"><button className="flex items-center justify-center w-48 h-12 text-gray-100 bg-teal-500 rounded-md focus:ring focus:ring-3 ring-teal-300 hover:bg-teal-600">
            <span className="mr-2">Enroll Now for Free</span>
            <ion-icon name="arrow-forward-outline" style={{ fontSize: 20, color: "gainsboro" }}></ion-icon>
          </button>
          </a>
        </div>

        {/* right div image */}
        <div className='hidden w-0 lg:w-auto lg:block lg:bg-teal-700 lg:bg-opacity-60 lg:pb-8'>
          <img src={teacher} className="absolute" style={{ right: "1%", height: "98%", top: "8%" }} alt="Hero"
          />
        </div>
      </section>

      {/* features section */}
      <section className="text-gray-600 body-font">
        <div className="container px-24 py-24">

          {/* headings */}
          <h3 className="mb-1 text-sm tracking-widest text-center text-red-500 uppercase title-font">Features</h3>
          <h1 className="text-3xl font-semibold text-center">Explore Yourself All Over The World</h1>
          <div className="flex items-center justify-center">
            <div className="w-20 h-2 my-2 bg-teal-500 rounded-full"></div>
          </div>
          <h3 className="my-2 text-sm tracking-widest text-center text-gray-400">Embark on a Global Learning Journey: Explore Your Potential</h3>

          {/* features object */}
          <div className='grid grid-cols-4 gap-4'>
            {
              features.map((item) => (
                <div className='flex flex-col items-center justify-center my-2' key={item.id}>
                  <div className='flex items-center justify-center w-48 h-48'>
                    <div className='flex items-center justify-center w-40 h-40 bg-white rounded-full'>
                      <ion-icon name={`${item.image}`} style={{ fontSize: 65, color: `${item.color}` }}></ion-icon>
                    </div>
                  </div>
                  <h1 className="my-2 text-xl font-bold text-center">{item.title}</h1>
                  <h3 className="mb-1 text-sm tracking-widest text-center text-gray-500">{item.content}</h3>
                </div>
              ))
            }
          </div>
        </div>
      </section >

      {/* courses section */}
      <section section className="text-gray-600 body-font" id="courses">
        <div className="container px-24 py-24">

          {/* headings */}
          <h3 className="mb-1 text-sm tracking-widest text-center text-gray-500 uppercase title-font">Popular Courses</h3>
          <h1 className="text-3xl font-semibold text-center">Pick a Course to Get Started</h1>
          <div className="flex items-center justify-center">
            <div className="w-20 h-2 my-2 bg-teal-500 rounded-full"></div>
          </div>

          {/* courses cards */}
          <div className="grid grid-cols-3">
            {courses.map((item) => (
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
                  <div className='flex flex-row justify-between mt-3'>
                    <button className="flex items-center justify-center px-8 py-2 text-lg text-gray-100 bg-teal-400 rounded-md hover:bg-teal-500">
                      <span className="mr-2">Details</span>
                    </button>
                    <button className="flex items-center justify-center px-8 py-2 text-lg text-gray-100 bg-teal-600 rounded-md hover:bg-teal-700">
                      <span className="mr-2">Enroll</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* browse course button */}
          <div className='flex items-center justify-center py-4'>
            <button className="flex items-center justify-center w-56 h-12 text-gray-100 bg-teal-500 rounded-md focus:ring focus:ring-3 ring-teal-300 hover:bg-teal-600">
              <span className="mr-2">Browse more courses</span>
              <ion-icon name="arrow-forward-outline" style={{ fontSize: 20, color: "gainsboro" }}></ion-icon>
            </button>
          </div>
        </div>
      </section >

      {/* stats section */}
      <section section className="" >
        <div className="container px-24 py-4">
          <div className="grid grid-cols-4 gap-4">
            {
              stats.map((item) => (
                <div className="" key={item.id}>
                  <p className={`text-3xl font-semibold text-center`} style={{ color: `${item.color}` }}>{item.value}</p>
                  <p className='mb-1 text-sm tracking-widest text-center text-gray-500 uppercase title-font'>{item.content}</p>
                </div>
              ))
            }
            <div>
            </div>
          </div>
        </div>
      </section >

      {/* faqs section */}
      < section className="text-gray-600 w-full lg:h-[96vh] grid grid-cols-2" id="faqs">

        {/* left div accordion */}
        < div className="w-screen px-24 py-24" >

          {/* headings */}
          <h3 h3 className="mb-1 text-sm tracking-widest text-gray-500 uppercase text-start title-font" >FAQ's</h3>
          <h1 h1 className="text-3xl font-semibold text-start" >Frequently Asked Questions.</h1 >
          <div className="flex items-center justify-start mt-2">
            <div className="w-20 h-2 my-2 bg-teal-500 rounded-full"></div>
          </div>

          {/* accordion component */}
          <div className="grid w-1/2 grid-cols-1 gap-2 mt-4">
            {
              accordionData.map((item) => (
                <Accordion key={item.id} title={item.title} content={item.content} id={item.id} />
              ))
            }
          </div>
        </div >

        {/* right div image */}
        <div div className='hidden w-0 mt-20 lg:w-1/2 lg:block lg:bg-opacity-60' >
          <img src={sir} className="absolute" style={{ height: "80%", right: "5%" }} alt="Hero"
          />
        </div >
      </section >

      {/* contact us section */}
      <section class="text-gray-600 body-font relative" id="contact">
        <div class="container px-5 py-24 mx-auto">

          {/* headings */}
          <h3 h3 className="mb-1 text-sm tracking-widest text-center text-gray-500 uppercase title-font" >Let's Chat</h3>
          <h1 className="text-3xl font-semibold text-center">Contact Us</h1>
          <div className="flex items-center justify-center">
            <div className="w-20 h-2 my-2 bg-teal-500 rounded-full"></div>
          </div>
          <h3 className="my-2 text-sm tracking-widest text-center text-gray-400">Connect with Our Team for Personalized Assistance</h3>

          {/* contact us */}
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button className="flex items-center justify-center px-8 py-2 mx-auto text-lg text-gray-100 bg-teal-500 rounded-md focus:ring focus:ring-3 ring-teal-300 hover:bg-teal-600">
                  <span className="mr-2">Get in Touch</span>
                  <ion-icon name="arrow-forward-outline" style={{ fontSize: 20, color: "gainsboro" }}></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      < footer className="text-gray-600 body-font" >

        {/* upper container */}
        < div className="container flex flex-col flex-wrap px-10 py-24 mx-auto bg-gray-200 md:items-center lg:items-start md:flex-row md:flex-nowrap" >

          {/* part 1 */}
          <div div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left" >
            <div className="flex items-center justify-center font-medium text-gray-900 cursor-pointer title-font md:justify-start">
              {/* <span className="ml-3 font-mono text-xl font-black">Newlearning</span> */}
              <img src="logo-hd.png" alt="logo" height="35px" width="175px" />
            </div>
            <p className="mt-2 text-sm text-gray-500">3D Solutions is a software development agency providing end-to-end solutions, from the raw idea to final product deployment, and services in the global software marketplace since 2019.</p>
          </div >

          {/* part 2 */}
          <div div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left" >
            <div className="w-full px-4 lg:w-1/3">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Courses</h2>
              <nav className="mb-10 list-none">
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800" href="/">Programming Courses</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800" href="/">Web Development Courses</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800" href="/">Data Science Courses</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800" href="/">Graphic Design Courses</a>
                </li>
              </nav>
            </div>

            {/* part 3 */}
            <div className="w-full px-4 lg:w-1/3">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">About Us</h2>
              <nav className="mb-10 list-none">
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800" href="/">About Our Company</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800" href="/">Our Team</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-800" href="/">Testimonials</a>
                </li>
              </nav>
            </div>

            {/* part 4 */}
            <div className="w-full px-4 lg:w-1/3">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Join our Newsletter</h2>
              <p className="my-4 text-sm text-center text-gray-500 md:text-left">Enter your email address to Register to our Newsletter Subscription for Updates, Exclusive Offers and Industry Insights
              </p>
              <div className="flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
                <div className="relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
                  <input type="text" id="footer-field" name="footer-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500" placeholder="Your email" />
                </div>
                <button className="flex items-center justify-center h-10 text-gray-100 bg-teal-500 rounded-md w-52 focus:ring focus:ring-3 ring-teal-300 hover:bg-teal-600">
                  <span className="mr-2">Subscribe</span>
                  <ion-icon name="arrow-forward-outline" style={{ fontSize: 20, color: "gainsboro" }}></ion-icon>
                </button>
              </div>
            </div>
          </div >
        </div >

        {/* lower container */}
        <div div className="bg-gray-300" >
          <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
            <p className="text-sm text-center text-gray-500 sm:text-left">© 2023 3dSolutions - All Rights Resersed
            </p>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-gray-500" href='/'>
                <ion-icon name="logo-facebook" style={{ fontSize: 24 }}></ion-icon>
              </a>
              <a className="ml-5 text-gray-500" href="/">
                <ion-icon name="logo-twitter" style={{ fontSize: 24 }}></ion-icon>
              </a>
              <a className="ml-5 text-gray-500" href="/">
                <ion-icon name="logo-instagram" style={{ fontSize: 24 }}></ion-icon>
              </a>
              <a className="ml-5 text-gray-500" href="/">
                <ion-icon name="logo-linkedin" style={{ fontSize: 24 }}></ion-icon>
              </a>
            </span>
          </div>
        </div >
      </footer >
    </div >
  );
}

export default App;
