import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
const Tagline = () => {
    return (
        <div className='bg-cyan-100 py-16'>
            <div className="lg:grid lg:grid-cols-12">
                <div className='col-start-2 col-span-4 px-5 lg:px-0'>
                    <Image
                        width={1000}
                        height={1000}
                        className="w-full rounded-2xl object-cover h-[300px] lg:h-[250px]"
                        src="/images/tagline.avif"
                        alt="Dr. Sajjan"
                    />
                </div>


                <div className=' pl-5 col-span-6'>
                    <h1 className="text-center font-semibold mt-10 text-3xl lg:px-0 px-4" style={{ fontFamily: 'Roboto Slab, serif' }}>
                        Your Healing Journey Starts Here – Let’s Move Forward Together
                    </h1>
                    <p className="text-center text-2xl lg:px-0 px-4" style={{ fontFamily: 'Roboto Slab, serif' }}>
                        Dr. Sajjan Rajpurohit with you on your journey to happiness and healing
                    </p>

                    <div>
                        <div className="flex justify-center mt-5">
                            <Link
                                href="#form"
                                className="bg-[#0271a7] shadow-md hover:bg-[#015d7a] transition duration-300 text-white border-[#a7d2f4] border-2 rounded-full px-6 py-3 flex items-center gap-2 text-lg"
                            >
                                Contact With Dr. Sajjan <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tagline