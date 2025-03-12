import React from 'react'
import Image from 'next/image'

const Thankyou = () => {
    return (
        <div className='bg-[#f7f7f7] min-h-screen flex flex-col items-center justify-center px-4 py-10'>
            <h2 className="text-center text-3xl font-semibold mb-6" style={{ fontFamily: 'Roboto Slab, serif' }}>
                Thank You!
            </h2>

            {/* Responsive Image */}
            {/* <Image
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto"
                src="/thankyou/thankyou.png"
                alt="Thank You"
            /> */}

            <p className="text-center text-lg mt-4 px-4" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Your request has been received. We will get back to you shortly!
            </p>
        </div>
    )
}

export default Thankyou
