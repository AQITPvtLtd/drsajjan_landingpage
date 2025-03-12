import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { Noto_Sans } from '@next/font/google';

const notoSans = Noto_Sans({
    subsets: ['latin'],
});

const reasons = [
    {
        title: "Experience",
        description: "Over 20+ years as a leading oncologist with thousands of successful treatments."
    },
    {
        title: "Certifications",
        description: "European Certified Medical Oncologist (ESMO) and affiliated with BLK-Max Hospital."
    },
    {
        title: "Patient-Centric Care",
        description: "Every treatment plan is tailored to your unique diagnosis and needs."
    },
    {
        title: "Advanced Treatment Options",
        description: "Expertise in cutting-edge therapies, including targeted therapy, immunotherapy, and precision medicine."
    },
    {
        title: "Compassion & Support",
        description: "Dedicated to providing not just treatment but also guidance and emotional support throughout the journey."
    }
];

const Whychoose = () => {
    return (
        <div className="bg-[#f9fdff] pt-2 mt-14 pb-10">
            <h1 className="text-center font-semibold mt-10 text-4xl lg:px-0 px-4" style={{ fontFamily: 'Roboto Slab, serif' }}>
                Why Choose Dr. Sajjan Rajpurohit
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:px-32 px-6">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="bg-[#092644] shadow-lg text-white border-[#a7d2f4] border-2 rounded-lg px-6 py-6 text-center transition-transform duration-300 hover:scale-105"
                    >
                        <h3 className="font-semibold lg:text-2xl text-xl mb-2" style={{ fontFamily: 'Roboto Slab, serif' }}>
                            {reason.title}
                        </h3>
                        <p className={`text-base ${notoSans.className}`}>{reason.description}</p>
                    </div>
                ))}

                <div>
                    <div className="flex justify-center mt-10">
                        <Link
                            href="#form"
                            className="bg-[#0271a7] shadow-md hover:bg-[#015d7a] transition duration-300 text-white border-[#a7d2f4] border-2 rounded-full px-6 py-3 flex items-center gap-2 text-lg"
                        >
                            Contact With Dr. Sajjan <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Contact Button */}

        </div>

    );
}

export default Whychoose;
