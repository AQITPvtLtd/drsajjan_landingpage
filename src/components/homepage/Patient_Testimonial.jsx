"use client";

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrPrevious, GrNext } from "react-icons/gr";

const videos = [
    "gbwxdtbH6-E",
    "jtQUP4NpMb4",
    "TLF_i-SXpEg",
    "1pUsXQXHr_A"
];

const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 lg:block hidden -right-20 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg z-10 hover:bg-gray-700" onClick={onClick}>
        <GrNext size={24} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 lg:block hidden -left-20 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg z-10 hover:bg-gray-700" onClick={onClick}>
        <GrPrevious size={24} />
    </div>
);
const Patient_Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className='mt-10'>
            <h2 className='text-center font-semibold text-4xl' style={{ fontFamily: 'Roboto Slab, serif' }}> Patients Testimonials </h2>
            <div className="pb-8 px-4 max-w-6xl mx-auto mt-5">
                <Slider {...settings}>
                    {videos.map((videoId, index) => (
                        <div key={index} className="px-2">
                            <div className="flex justify-center">
                                <iframe
                                    width="500"
                                    height="280"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="rounded-lg shadow-lg w-full"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Patient_Testimonial