import React from 'react'
import Image from 'next/image'
const Services = () => {
    return (
        <div className='bg-[#092644] py-5 mt-10'>
            <h1 className='text-center font-semibold lg:text-2xl text-xl text-white px-2'>Types of Cancer Treated by Dr. Sajjan Rajpurohit</h1>
            <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-5 lg:px-10 px-3 mt-5">
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl lg:py-5 py-2'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/pancreas.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Pancreatice Cancer</h4>
                </div>
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl py-5'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/gallbladder.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Gallbladder Cancer</h4>
                </div>
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl py-5'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/breast-cancer.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Breast Cancer</h4>
                </div>
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl py-5'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/ovarian-cancer.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Ovarian Cancer</h4>
                </div>
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl py-5'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/lung-cancer.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Lung Cancer</h4>
                </div>
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl py-5'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/throat-cancer.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Throat Cancer</h4>
                </div>
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl py-5'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/liver-cancer.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Liver Cancer</h4>
                </div>
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl py-5'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/mouth-cancer.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Mouth Cancer</h4>
                </div>
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl py-5'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/cervical-cancer.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Cervical Cancer</h4>
                </div>
                <div className='text-center justify-center bg-[#bbe8fc] rounded-2xl py-5'>
                    <div className='flex justify-center'>
                        <Image
                            src="/service/stomach-cancer.png"
                            alt="SSB Logo"
                            width={50}
                            height={50}
                            className='text-white'
                        />
                    </div>
                    <h4 className='font-semibold'>Stomach Cancer</h4>
                </div>

            </div>
        </div>
    )
}

export default Services