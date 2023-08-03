import React from 'react';
import { Link } from 'react-router-dom';

// local data and modules imports
import { courses, features, accordionData, navLinks, socialIcons, footerUpper } from '../assets/data';
import { SearchPage, FaqsAccordion, CourseAccordion } from '../assets/modules';

function HomePage() {
    return (
        <div className="bg-gray-100">

            {/* Navbar Section */}
            <nav className="grid grid-cols-[25%_50%_25%] pt-2 pb-1" section="true">

                {/* logo */}
                <div className="flex justify-center py-2">
                    <img src="logo-hd.png" alt="logo" height="25px" width="175px" />
                </div>

                {/* nav links */}
                <div className="grid grid-cols-5 py-2 mx-8">
                    {
                        Object.keys(navLinks.hrefs).map((key) => {
                            const { name, link } = navLinks.hrefs[key];
                            return (
                                <div key={key}>
                                    <a className="mx-5 font-bold text-center cursor-pointer" href={link}>{name}</a>
                                </div>
                            )
                        })}
                    <Link to={navLinks.links.link} className="mx-5 font-bold text-center cursor-pointer">
                        {navLinks.links.name}
                    </Link>
                </div>

                {/* search box */}
                <div>
                    <SearchPage />
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
                    <img src={require("../assets/images/teacher.png")} className="absolute" style={{ right: "1%", height: "96%", top: "6%" }} alt="Hero"
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
                            <CourseAccordion key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section >

            {/* faqs section */}
            < section className="text-gray-600 w-full lg:h-[96vh] grid grid-cols-2" id="faqs">

                {/* left div accordion */}
                < div className="w-[95vw] px-24 py-24" >

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
                                <FaqsAccordion key={item.id} title={item.title} content={item.content} id={item.id} />
                            ))
                        }
                    </div>
                </div >

                {/* right div image */}
                <div className='hidden w-0 mt-20 lg:w-1/2 lg:block lg:bg-opacity-60' >
                    <img src={require("../assets/images/sir.png")} className="absolute" style={{ height: "80%", right: "5%" }} alt="Hero"
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
                                    <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
                                    <input type="phone" id="phone" name="phone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
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
                <div className="container flex flex-col flex-wrap px-10 py-24 mx-auto bg-gray-200 md:items-center lg:items-start md:flex-row md:flex-nowrap">
                    {/* part 1 */}
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <div className="flex items-center justify-center font-medium text-gray-900 cursor-pointer title-font md:justify-start">
                            <img src={footerUpper.part1.image} alt="logo" height="35px" width="175px" />
                        </div>
                        <p className="mt-2 ml-2 text-sm text-gray-500">{footerUpper.part1.content}</p>
                    </div>

                    {/* part 2 */}
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/3">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">{footerUpper.part2.heading}</h2>
                            <nav className="mb-10 list-none">
                                {footerUpper.part2.links.map((link, index) => (
                                    <li key={link} className="mb-2">
                                        <a className="text-gray-600 hover:text-gray-800" href={footerUpper.part2.hrefs[index]}>{link}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>

                        {/* part 3 */}
                        <div className="w-full px-4 lg:w-1/3">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">{footerUpper.part3.heading}</h2>
                            <nav className="mb-10 list-none">
                                {footerUpper.part3.links.map((link, index) => (
                                    <li key={link} className="mb-2">
                                        <a className="text-gray-600 hover:text-gray-800" href={footerUpper.part3.hrefs[index]}>{link}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>

                        {/* part 4 */}
                        <div className="w-full px-4 lg:w-1/3">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">{footerUpper.part4.heading}</h2>
                            <nav className="mb-10 list-none">
                                {footerUpper.part4.links.map((link, index) => (
                                    <li key={link} className="mb-2">
                                        <a className="text-gray-600 hover:text-gray-800" href={footerUpper.part4.hrefs[index]}>{link}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                {/* lower container */}
                <div className="bg-gray-300" >
                    <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
                        <p className="text-sm text-center text-gray-500 sm:text-left">© 2023 3DSOLUTIONS - All Rights Resersed
                        </p>
                        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                            {socialIcons.map((icon) => (
                                <a key={icon.id} className="text-gray-500 ml-5" href={icon.link}>
                                    <ion-icon name={icon.icon} style={{ fontSize: 24, color: icon.color }}></ion-icon>
                                </a>
                            ))}
                        </span>
                    </div>
                </div >
            </footer >
        </div >
    );
}

export default HomePage;