import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Form from './Form'

const Banner = () => {
    return (
        <div>
            <div className="relative w-full h-screen overflow-x-hidden bg-cover">
                <div className="absolute inset-0">
                    <Image
                        src="/banner/new.jpg"
                        alt="Slider Image"
                        layout="fill"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                    />
                </div>

                {/* Grid container */}
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-10">
                    {/* Left section - Text content */}
                    <div className="text-start bg-opacity-50 flex flex-col justify-center md:ml-20">
                        <div>
                            <h1 className="text-2xl lg:text-5xl md:text-3xl font-bold py-2 line-clamp-3 leading-relaxed lg:leading-snug">
                                Your Trusted Partner in <br className='md:block hidden' /> Fighting Cancer
                            </h1>

                            <h3 className="text-sm lg:text-xl text-justify font-semibold max-w-lg py-2">
                                "Welcome to the practice of Dr. Sajjan Rajpurohit, a European Certified Medical Oncologist (ESMO) and one of Delhi’s most trusted cancer specialists. With 20+ years of experience, he offers advanced treatments and personalized care at BLK-Max Hospital, Delhi. Whether you need expert guidance or cutting-edge therapies, Dr. Sajjan is here to support you."
                            </h3>

                            <Link href="tel:+919999137803">
                                <button className="bg-[#092644] text-white font-bold py-2 px-4 text-xl lg:text-3xl rounded-full shadow-md transition duration-300 ease-in-out mt-4">
                                    Call Now
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right section - Form */}
                    <div className="flex items-center justify-center md:justify-center ">
                        <div className="w-full max-w-md sm:block hidden">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner