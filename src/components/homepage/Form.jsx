"use client"

import { form } from '@/services/form';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setformData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        location: "",
        medicalReport: null
    });

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                Swal.fire({
                    icon: "warning",
                    title: "File Too Large",
                    text: "Please upload a file smaller than 5MB."
                });
                e.target.value = "";
                return;
            }
            setformData({ ...formData, medicalReport: file })
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);
        formDataToSend.append("location", formData.location);

        if (formData.medicalReport) {
            formDataToSend.append("medicalReport", formData.medicalReport);
        }

        try {
            const response = await form(formDataToSend);
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "You Clicked the Button!",
                    icon: "success",
                })
                setformData({
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                    location: "",
                    medicalReport: null,
                });
                router.push("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops..",
                    text: "Something went wrong!"
                })
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Try it Again"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="mt-2">
                <form
                    className="bg-gray-50 px-5 py-2 shadow-lg rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-xl font-semibold text-gray-700 mb-1">Submit Your Query</h3>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1" htmlFor="name">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Enter Your Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-600 mb-1" htmlFor="phone">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Enter Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-600 mb-1" htmlFor="email">  Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Enter Your Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-600 mb-1" htmlFor="location">
                            Location <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Enter Your Location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-600 mb-1" htmlFor="message">
                            Write Problem English / Hindi <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            placeholder="Describe Health Problem..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="pb-2" >
                        <label
                            htmlFor="medicalReport"
                            className="block text-md font-medium mb-1 text-primary">
                            Upload Medical Report (Optional)
                        </label>
                        <input
                            type="file"
                            id='medicalReport'
                            name='medicalReport'
                            accept='.pdf, .doc, .docx, .xls, .xlsx, .txt, .jpg, .png, .jpeg, .avif'
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500 dark:text-gray-900"
                            // value={formData.medicalReport}
                            onChange={handleFileChange}
                        />
                    </div>

                    <div>
                        {
                            loading ? (<div className="flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50 rounded-md fixed top-0 left-0 z-50">
                                <ClipLoader width="60" height="60" color="#092644" className="animate-spin" />
                            </div>) : (<button
                                type="submit"
                                className="w-full bg-[#092644] text-white py-2 px-4 rounded cursor-pointer transition duration-200"
                            >
                                Submit
                            </button>)
                        }
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Form