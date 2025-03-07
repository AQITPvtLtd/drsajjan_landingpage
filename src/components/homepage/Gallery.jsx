"use client";
import React from "react";
import dynamic from "next/dynamic";
import { galleryData } from "../data/gallerydata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import Image from "next/image";

// Load react-slick only on the client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg z-10 hover:bg-gray-700" onClick={onClick}>
        <GrNext size={24} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg z-10 hover:bg-gray-700" onClick={onClick}>
        <GrPrevious size={24} />
    </div>
);

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
        <div className="px-10 py-8 bg-[#f7f7f7] overflow-x-hidden">
            <h1 className="text-center font-semibold text-2xl pb-2">Gallery Images</h1>

            <div className="pb-8 px-4 max-w-6xl mx-auto">
                <Slider {...settings}>
                    {galleryData.map((s) => (
                        <div key={s.id} className="px-2">
                            <div className="flex justify-center">
                                <Image
                                    width={1000}
                                    height={1000}
                                    className="w-full h-[250px] rounded-2xl sm:h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    src={`/images/${s.img}`}
                                    alt="img"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>


    );
};

export default Gallery;
