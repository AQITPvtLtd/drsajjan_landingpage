'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo/logo.png"
                        alt="SSB Logo"
                        width={200}
                        height={200}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link href="mailto:info@ssbhealthcare.com" className="font-semibold text-lg hover:text-blue-400 transition translate-4">
                        info@ssbhealthcare.com
                    </Link>
                    <Link
                        href="tel:+919540114114"
                        className="bg-blue-400 text-white text-lg font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                    >
                        Contact with Dr. Sajjan
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md flex flex-col items-center p-4 gap-4">
                    <Link href="mailto:info@ssbhealthcare.com" className="font-semibold text-lg hover:text-[#092644]">
                        info@ssbhealthcare.com
                    </Link>
                    <Link
                        href="tel:+919540114114"
                        className="bg-blue-400 text-white text-lg font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                    >
                        Contact us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Header;
