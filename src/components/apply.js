import React from 'react';
import { Link } from 'react-router-dom';

const ApplyPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4">Apply for our Programming Courses</h1>
                <p className="text-gray-600 mb-8">Please fill out the form below to apply for our courses.</p>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email Address:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                            Phone Number:
                        </label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="+92-333-1234567"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="course" className="block text-gray-700 font-bold mb-2">
                            Course Interested In:
                        </label>
                        <select
                            id="course"
                            name="course"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" defaultValue={""}
                        >
                            <option value="" disabled>
                                Select a course...
                            </option>
                            <option value="python">Python</option>
                            <option value="javascript">JavaScript</option>
                            <option value="java">Java</option>
                            <option value="c++">C++</option>
                            <option value="ruby">Ruby</option>
                            <option value="html/css">HTML/CSS</option>
                        </select>
                    </div>
                    <div className="mb-8">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Why do you want to take this course?
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Tell us why you're interested in this course..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-400 text-white py-3 px-4 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring focus:ring-3 ring-teal-300"
                    >
                        Submit Application
                    </button>
                    <Link to="/" className="fixed bottom-4 right-4 bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 focus:outline-none">
                        Back to Homepage
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ApplyPage;
