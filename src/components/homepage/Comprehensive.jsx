import React from 'react';
import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const notoSans = Noto_Sans({
    subsets: ['latin'],
});

const services = [
    { title: "Chemotherapy", description: "Safe and effective drug-based treatment to target and eliminate cancer cells, customized to your condition." },
    { title: "Immunotherapy", description: "Harness your body’s immune system with the latest advancements to fight cancer naturally and powerfully." },
    { title: "Targeted Therapy", description: "Precision medicine that attacks cancer cells while sparing healthy tissue, offering fewer side effects." },
    { title: "Proton Therapy", description: "Cutting-edge radiation technology for precise tumor targeting, minimizing damage to surrounding areas." },
    { title: "Radiotherapy", description: "Advanced radiation techniques to shrink tumors and alleviate symptoms with expert care." },
    { title: "Robotic Surgery", description: "Minimally invasive, high-precision surgery for faster recovery and better outcomes." },
    { title: "Bone Marrow Transplantation", description: "Life-saving procedure for blood cancers, performed with the highest standards of expertise." },
    { title: "Teleconsultation Services", description: "Convenient, expert advice from anywhere in the world via secure online consultations." }
];

const Comprehensive = () => {
    return (
        <div>
            <h1 className="text-center font-semibold mt-10 text-4xl" style={{ fontFamily: 'Roboto Slab, serif' }}>
                Comprehensive Cancer Care Services
            </h1>
            <p className={`text-center text-[16px] px-2 ${notoSans.className}`}>
                Expert Treatments for Every Stage of Your Journey
            </p>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 py-5 gap-10 lg:px-32 px-10">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#bbe8fc] px-6 py-6 rounded-br-[25%] rounded-tl-[25%] shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <h4 className="font-semibold text-center text-black text-2xl" style={{ fontFamily: 'Roboto Slab, serif' }}>
                            {service.title}
                        </h4>
                        <p className={`text-center ${notoSans.className}`}>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-3">
                <Link
                    href="#form"
                    className="bg-[#0271a7] shadow-md hover:bg-[#015d7a] transition duration-300 text-white border-[#a7d2f4] border-2 rounded-full px-6 py-3 flex items-center gap-2 text-lg"
                >
                    Contact With Dr. Sajjan <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default Comprehensive;
