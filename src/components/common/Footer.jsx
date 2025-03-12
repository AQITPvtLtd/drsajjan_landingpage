import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-gray-200 py-3">
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

                {/* Copyright Text */}
                <div className="text-gray-700 text-sm md:text-base text-center mb-4 md:mb-0">
                    © 2025 Dr. Sajjan Rajpurohit. All Rights Reserved
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                    {[
                        { icon: FaFacebookF, link: "https://www.facebook.com/oncologist.dr.sajjanrajpurohit/" },
                        { icon: FaInstagram, link: "https://www.instagram.com/dr.sajjanrajpurohit/?hl=en" },
                        { icon: BsTwitterX, link: "https://in.linkedin.com/in/dr-sajjan-rajpurohit-b2994b36" },
                        { icon: FaYoutube, link: "https://www.youtube.com/@drsajjanrajpurohitcanceron889" }
                    ].map(({ icon: Icon, link }, index) => (
                        <Link
                            key={index}
                            href={link}
                            target="_blank"
                            className="w-10 h-10 flex items-center justify-center bg-black rounded-full transition-all duration-300 hover:bg-gray-300 border border-transparent hover:border-black"
                        >
                            <Icon className="text-white text-xl transition-all duration-300 hover:text-black" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
