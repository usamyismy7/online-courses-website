import React from 'react';
import { Link } from 'react-router-dom';
import { PaymentAccordion } from '../assets/modules';

const ApplyPage = () => {
    // Assuming this function is called when the user clicks the submit button
    async function handleSubmitForm(event) {
        event.preventDefault(); // Prevent form submission to handle it manually

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            course: event.target.course.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
        };

        try {
            const response = await fetch('http://localhost:5000/submitStudentApplication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Success message from the server
            } else {
                console.error('Failed to submit application.');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container p-8 mx-auto">
                <h1 className="mb-4 text-4xl font-bold">Apply for our Programming Courses</h1>
                <p className="mb-8 text-gray-600">Please fill out the form below to apply for our courses.</p>
                <form className="max-w-lg mx-auto" onSubmit={handleSubmitForm}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
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
                        <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
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
                        <label htmlFor="phone" className="block mb-2 font-bold text-gray-700">
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
                        <label htmlFor="course" className="block mb-2 font-bold text-gray-700">
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
                        <label htmlFor="payment" className="block mb-2 font-bold text-gray-700">
                            Payment Method:
                        </label>
                        <PaymentAccordion />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="message" className="block mb-2 font-bold text-gray-700">
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
                        className="w-full px-4 py-3 text-white bg-teal-400 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring focus:ring-3 ring-teal-300"
                    >
                        Submit Application
                    </button>
                    <Link to="/" className="fixed px-4 py-3 text-white bg-teal-600 rounded-lg bottom-4 right-4 hover:bg-teal-700 focus:outline-none">
                        Back to Homepage
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ApplyPage;
