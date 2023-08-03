import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// search functionality
export const SearchPage = () => {
    // State to hold the search query
    const [searchQuery, setSearchQuery] = useState('');
    // Function to scroll to the selected section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // Function to handle search input
    const handleSearchInput = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
    };
    // Effect to handle Enter key press
    useEffect(() => {
        // Function to handle the search and scrolling
        const performSearchAndScroll = () => {
            const query = searchQuery.toLowerCase();
            // List of available section IDs and their corresponding names
            const sections = [
                { id: 'home', name: 'home' },
                { id: 'courses', name: 'courses' },
                { id: 'contact', name: 'contact' },
                { id: 'faqs', name: 'faqs' },
            ];
            // logic for specific programming languages
            const programmingLanguages = ['python', 'java', 'javascript', 'c++', 'ruby', 'html/css', 'html', 'css'];
            if (programmingLanguages.includes(query)) {
                scrollToSection('courses');
                return;
            }
            for (const section of sections) {
                if (section.name === query) {
                    scrollToSection(section.id);
                    break;
                }
            }
        };
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                performSearchAndScroll();
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [searchQuery]);
    return (
        <div className="bg-white grid grid-cols-[80%_20%] hover:ring hover:ring-3 ring-gray-300 border-2 border-gray rounded-full py-1 mt-1 ml-4 mr-20 pl-4 cursor-pointer">
            <input
                className="outline-none"
                value={searchQuery}
                type="text"
                placeholder="Search..."
                onChange={handleSearchInput}
            />
            <ion-icon style={{ color: "gray", fontSize: 24 }} name="search-sharp"></ion-icon>
        </div>
    )
};

// courses accordion component
export function CourseAccordion({ item }) {
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <div className="relative col-span-1">
            <div className="p-4 m-5 bg-white rounded-lg shadow-lg">
                <div className="relative flex items-center justify-center h-48 overflow-hidden rounded cursor-pointer">
                    <img alt="ecommerce" className="block object-cover object-center w-48 h-48" src={item.image} />
                </div>
                <div className="mt-4">
                    <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{item.level}</h3>
                    <h2 className="text-lg font-medium text-gray-900 title-font">{item.name}</h2>
                    <div className='flex flex-row justify-between mt-2'>
                        <p><ion-icon name="play-circle-outline" style={{ color: "orange", fontSize: 17 }}></ion-icon> {item.lesson} Lesson</p>
                        <p><ion-icon name="star" style={{ color: "orange" }}></ion-icon> {item.rating}</p>
                    </div>
                    <div className='flex flex-row justify-between mt-3'>
                        <button className="flex flex-row items-center justify-center w-32 h-12 px-8 py-2 text-lg text-gray-100 bg-teal-400 rounded-md hover:bg-teal-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <span className="mr-2">Details</span>
                            <span>
                                {
                                    hovered ? <ion-icon name="chevron-up-outline" style={{ fontSize: 16, color: "gainsboro" }}></ion-icon> : <ion-icon name="chevron-down-outline" style={{ fontSize: 16, color: "gainsboro" }}></ion-icon>
                                }
                            </span>
                        </button>
                        <Link to="/apply">
                            <button className="flex items-center justify-center w-32 h-12 px-8 py-2 text-lg text-gray-100 bg-teal-600 rounded-md hover:bg-teal-700">
                                <span>Enroll</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className={`absolute border z-10 w-64 h-fit mt-1 bg-white rounded-lg shadow-lg p-4 ${hovered ? "block" : "hidden"}`}>
                        <div className='flex flex-col items-start justify-start'>
                            <p className='text-gray-500 text-md'>{item.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// faqs accordion component
export const FaqsAccordion = ({ id, title, content }) => {
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
                className={`bg-white accordion-content transition-all duration-300 ${isHovered ? 'max-h-32 overflow-y-auto rounded-b-lg py-3 px-6' : 'max-h-0 overflow-hidden'
                    }`}
            >
                <p className="text-teal-900">{content}</p>
            </div>
        </div>
    );
};

// payment method accordion component
// courses accordion component
export function PaymentAccordion() {
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter1 = () => {
        setIsHovered(true)
    }
    const handleMouseLeave1 = () => {
        setIsHovered(false);
    };
    return (
        <div className="grid grid-cols-2">
            <div className="relative col-span-1">
                <div className="w-fit">
                    <div className="mt-4">
                        <div className='flex flex-row justify-between gap-32 mt-3'>
                            <button className="flex flex-row items-center justify-center w-48 h-12 text-lg text-gray-100 bg-teal-400 rounded-md hover:bg-teal-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <span className="mr-2">Online Banking</span>
                                <span>
                                    {
                                        hovered ? <ion-icon name="chevron-up-outline" style={{ fontSize: 16, color: "gainsboro" }}></ion-icon> : <ion-icon name="chevron-down-outline" style={{ fontSize: 16, color: "gainsboro" }}></ion-icon>
                                    }
                                </span>
                            </button>
                            <button className="flex flex-row items-center justify-center w-48 h-12 text-lg text-gray-100 bg-teal-400 rounded-md hover:bg-teal-500" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                                <span className="mr-2">Mobile Payment</span>
                                <span>
                                    {
                                        isHovered ? <ion-icon name="chevron-up-outline" style={{ fontSize: 16, color: "gainsboro" }}></ion-icon> : <ion-icon name="chevron-down-outline" style={{ fontSize: 16, color: "gainsboro" }}></ion-icon>
                                    }
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <div className={`absolute border z-10 w-96 h-fit mt-1 bg-white rounded-lg shadow-lg p-4 ${hovered ? "block" : "hidden"}`}>
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-gray-500 text-md'>If you want to transfer the payment amount via your bank account, you can make a direct bank transfer to the following account:</p>
                                <p className='text-gray-500 text-md'>• WebSouls, Habib Bank Ltd., A/C No. 01957900259103, Cavalry Ground Branch, LAHORE</p>
                                <p className='text-gray-500 text-md'>Note: Kindly inform us after making a successful payment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className={`absolute border -right-full z-10 w-96 h-fit mt-1 bg-white rounded-lg shadow-lg p-4 ${isHovered ? "block" : "hidden"}`}>
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-gray-500 text-md'>To pay for any of our services via a mobile app, you can make a payment through Easy Paisa, Mobi Cash, Warid Paisa, U-Paisa, Time Pay, UBL Omni, or HBL Express. Our bank account details are:</p>
                                <p className='text-gray-500 text-md'>• Bank Account: WebSouls, Habib Bank Ltd., A/C No. 01957900259103, Cavalry Ground Branch, LAHORE</p>
                                <p className='text-gray-500 text-md'>Note: Kindly inform us after making a successful payment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}