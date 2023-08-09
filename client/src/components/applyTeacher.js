import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ApplyPage = () => {

    const [resumeFile, setResumeFile] = useState(null);
    // Assuming this function is called when the user clicks the submit button
    async function handleSubmitForm(event) {
        event.preventDefault(); // Prevent form submission to handle it manually

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            experience: event.target.experience.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
            preferredLevel: event.target.preferredLevel.value,
            educationLevel: event.target.educationLevel.value,
            availability: event.target.availability.value,
            preferredSubjects: event.target.preferredSubjects.value,
        };

        if (!resumeFile) {
            alert('Please select a resume file.');
            return;
        }

        const resumeFormData = new FormData();
        resumeFormData.append('resume', resumeFile);

        try {
            const response = await fetch('http://localhost:5000/submitTeacherApplication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const resumeResponse = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: resumeFormData,
            });

            if (response.ok && resumeResponse.ok) {
                const data = await response.json();
                const resumeData = await resumeResponse.text();
                console.log(data.message); // Success message from the server
                console.log(resumeData); // Success message from the server
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
                <h1 className="mb-4 text-4xl font-bold">Apply to Teach at our Programming Courses</h1>
                <p className="mb-8 text-gray-600">Please fill out the form below to apply for a teaching position.</p>
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
                        <label htmlFor="experience" className="block mb-2 font-bold text-gray-700">
                            Teaching Experience (in years):
                        </label>
                        <input
                            type="number"
                            id="experience"
                            name="experience"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="preferredLevel" className="block mb-2 font-bold text-gray-700">
                            Preferred Level of Students
                        </label>
                        <select
                            id="preferredLevel"
                            name="preferredLevel"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        >
                            <option value="new">Select a level...</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="educationLevel" className="block mb-2 font-bold text-gray-700">
                            Highest Level of Education
                        </label>
                        <select
                            id="educationLevel"
                            name="educationLevel"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        >
                            <option value="new">Select a level...</option>
                            <option value="bachelors">Bachelors</option>
                            <option value="masters">Masters</option>
                            <option value="phd">Ph.D.</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="availability" className="block mb-2 font-bold text-gray-700">
                            Availability:
                        </label>
                        <input
                            type="text"
                            id="availability"
                            name="availability"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="e.g., Full-time, Part-time"
                        />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="preferredSubjects" className="block mb-2 font-bold text-gray-700">
                            Preferred Subjects to Teach:
                        </label>
                        <textarea
                            id="preferredSubjects"
                            name="preferredSubjects"
                            rows="4"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="List your preferred subjects to teach..."
                        ></textarea>
                    </div>
                    <div className="mb-8">
                        <label htmlFor="message" className="block mb-2 font-bold text-gray-700">
                            Why do you want to teach at our courses?
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Tell us why you're interested in teaching..."
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="resume" className="block mb-2 font-bold text-gray-700">
                            Upload Resume/CV:
                        </label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            onChange={(e) => setResumeFile(e.target.files[0])}
                        />
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
