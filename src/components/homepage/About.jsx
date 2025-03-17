"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Noto_Sans } from 'next/font/google';


const notoSans = Noto_Sans({
    subsets: ['latin'], // You can add more subsets if needed
});

const About = () => {
    const [activeCategory, setActiveCategory] = useState("Experience"); // Set default category to "Experience"

    const AboutContent = [
        {
            id: 1,
            content: [
                "Senior Director & HOD (Medical Oncology) BLK Super Speciality Hospital, Rajendra Place",
                "Director - Best Medical Oncologist in Delhi, India, Max Super Speciality Centre, Shalimar Bagh",
                "Consultant and Unit Head (Medical Oncology) - Rajiv Gandhi Cancer Institute, New Delhi",
                "Editor in Chief - Clinical Oncology, Textbook of Oncology, Theme publication, Germany",
                "Managing Editor - Asian Journal of Oncology (2015)",
                "Consultant - Rajiv Gandhi Cancer Institute & Research Centre (RGCI & RC), New Delhi (2011)",
                "National Faculty for Post Graduate teaching - Dr. Bhatia Institute for MD/MS (2008 - 2009)",
                "Medical Director - Mansaram Hospital (2007)"
            ],
            category: "Experience"
        },
        {
            id: 2,
            content: [
                "DNB (Best Medical Oncologist in Delhi, India) - Rajiv Gandhi Cancer Institute & Research Centre (RGCI & RC), New Delhi (2011)",
                "MD (Medicine) - Maulana Azad Medical College(MAMC), New Delhi (2007)",
                "MBBS - Maulana Azad Medical College (MAMC),New Delhi (2002)",
                "ESMO Immuno Oncology Perceptorship, Geneva(2013)",
                "ESMO Neuroendocrine Tumor Preceptorship, Singapore (2013)",
                "Immuno-oncology training from MD Anderson Cancer Centre, Houston- USA (2012)",
                "European Certified Best Medical Oncologist, ESMO, Geneva (2011)"
            ],
            category: "Education"
        },
        {
            id: 3,
            content: [
                "Best Medical Oncologist in Delhi, India, India Today Group (2017)",
                "Best Oncologist of the Year, ELETS Annual Meet(2016)",
                "Young Scientist Award",
                "Dr. Satya Gupta Memorial Award for Best Thesis by Indian Academy of Pediatrics (IAP)",
                "More than 50 National & International publications"
            ],
            category: "Awards"
        }
    ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className=''>
            <h1 className='text-center font-semibold mt-10 text-4xl' style={{ fontFamily: 'Roboto Slab, serif' }}>
                Professional Journey
            </h1>

            <div className="md:grid grid-cols-1 md:grid-cols-12 gap-6 mt-10 px-6">
                <div className='md:col-start-2 col-span-4 mt-10'>
                    <Image
                        width={1000}
                        height={1000}
                        className="w-full rounded-2xl object-cover h-[300px] lg:h-[450px]"
                        src="/about/dr-sajjan.jpg"
                        alt="Dr. Sajjan"
                    />
                </div>

                <div className='col-span-6'>
                    <div className="buttons mt-6 flex justify-center space-x-4">
                        {['Experience', 'Education', 'Awards'].map((category) => (
                            <button
                                key={category}
                                className="bg-[#0271a7] text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-[#015d7a] focus:outline-none"
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="content mt-6 leading-6">
                        {AboutContent.filter(item => item.category === activeCategory).map((item) => (
                            <div key={item.id}>
                                <h2 className="text-2xl font-semibold text-center mb-5" style={{ fontFamily: 'Roboto Slab, serif' }}>{item.category}</h2>
                                <ul className="list-disc pl-5">
                                    {item.content.map((text, index) => (
                                        <li key={index} className={`${notoSans.className}`}>{text}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
