import React from 'react'
import Image from 'next/image'

const Review = () => {
    const reviews = [
        "/review/rev1.png",
        "/review/rev2.png",
        "/review/rev3.png",
        "/review/rev4.png",
        "/review/rev5.png",
        "/review/rev6.png",
    ];

    return (
        <div className="px-4 py-10">
         

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                {reviews.map((src, index) => (
                    <div key={index} className="flex justify-center px-3">
                        <Image
                            width={400}
                            height={400}
                            className="w-full h-auto max-w-[800px] rounded-2xl object-contain"
                            src={src}
                            alt={`Review ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Review
