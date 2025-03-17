import React from 'react';
import Image from 'next/image';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
    subsets: ['latin'],
});

const cancerTypes = [
    { name: "Pancreatic Cancer", image: "/service/pancreas.png" },
    { name: "Gallbladder Cancer", image: "/service/gallbladder.png" },
    { name: "Breast Cancer", image: "/service/breast-cancer.png" },
    { name: "Ovarian Cancer", image: "/service/ovarian-cancer.png" },
    { name: "Lung Cancer", image: "/service/lung-cancer.png" },
    { name: "Throat Cancer", image: "/service/throat-cancer.png" },
    { name: "Liver Cancer", image: "/service/liver-cancer.png" },
    { name: "Mouth Cancer", image: "/service/mouth-cancer.png" },
    { name: "Cervical Cancer", image: "/service/cervical-cancer.png" },
    { name: "Stomach Cancer", image: "/service/stomach-cancer.png" }
];

const Services = () => {
    return (
        <div className="bg-[#f9fdff] py-5 lg:-mt-12">
            <h1 className="text-center font-semibold mt-10 text-4xl lg:px-0 px-3" style={{ fontFamily: 'Roboto Slab, serif' }}>
                Types of Cancer Treated by Dr. Sajjan Rajpurohit
            </h1>
            <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 lg:px-10 px-3 mt-10">
                {cancerTypes.map((cancer, index) => (
                    <div key={index} className="text-center justify-center bg-[#bbe8fc] rounded-2xl lg:py-5 py-2">
                        <div className="flex justify-center">
                            <Image src={cancer.image} alt={cancer.name} width={50} height={50} className="text-white" />
                        </div>
                        <h4 className={`text-center font-semibold ${notoSans.className}`}>{cancer.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
