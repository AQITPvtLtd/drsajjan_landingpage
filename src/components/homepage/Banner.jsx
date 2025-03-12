import React from 'react';
import Image from 'next/image';
import Form from './Form';
import { Noto_Sans } from '@next/font/google';
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaRegCalendarCheck, FaBookOpen, FaTrophy } from "react-icons/fa";

const notoSans = Noto_Sans({
    subsets: ['latin'],
});

const Banner = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-cover">
            <div className="absolute inset-0">
                <Image
                    src="/banner/banner.jpg"
                    alt="Slider Image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>

            {/* Grid container */}
            <div className="absolute inset-0 lg:grid lg:mt-0 mt-10 md:mt-10 grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 lg:px-20">
                {/* Left section - Text content */}
                <div className="text-start bg-opacity-50 flex flex-col justify-center">
                    <h1 className="text-2xl text-gray-800 lg:text-start md:text-center lg:text-5xl md:text-3xl font-bold py-2 leading-relaxed lg:leading-snug" style={{ fontFamily: 'Roboto Slab, serif' }}>
                        Bringing Hope, Beating Cancer Together
                    </h1>

                    <h3 className={`text-sm lg:text-xl md:text-center md:ml-[70px] lg:ml-[0px] lg:pr-6 text-gray-800 max-w-xl py-2 lg:text-justify ${notoSans.className}`}>
                        Welcome to the practice of Dr. Sajjan Rajpurohit, a European Certified Medical Oncologist (ESMO) and one of Delhi’s most trusted cancer specialists. With 20+ years of experience, he offers advanced treatments and personalized care at BLK-Max Hospital, Delhi. Whether you need expert guidance or cutting-edge therapies, Dr. Sajjan is here to support you.
                    </h3>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 md:p-6 mt-4 bg-opacity-90 ">
                        {[
                            { icon: <HiOutlineEmojiHappy />, value: "35,000+", label: "Happy Patients" },
                            { icon: <FaRegCalendarCheck />, value: "22+", label: "Years Experience" },
                            { icon: <FaBookOpen />, value: "80+", label: "Research & Publications" },
                            { icon: <FaTrophy />, value: "15+", label: "Awards" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="text-5xl text-[#0271a7] mb-2">{item.icon}</div>
                                <p className="text-3xl font-semibold text-gray-800">{item.value}</p>
                                <p className="text-lg text-gray-600 text-center">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right section - Form */}
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-md hidden sm:block" id="form">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
