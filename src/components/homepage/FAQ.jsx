"use client";

import React, { useState } from "react";
import Accordion from "../common/Accordian";

const FAQ = () => {
    const [accordions, setAccordion] = useState([
        {
            id: 1,
            title: "Who gets cancer?",
            data: `Anyone can get cancer, although the risk goes up with age. Your individual risk depends on factors such as whether you smoke, lifestyle choices such as what you eat and how much you exercise, your family history of cancer, and factors in your workplace and environment.`,
            isOpen: true,
        },
        {
            id: 2,
            title: "My family has a history of genetic cancer. My grandmother, grandfather, and my father's sister died of it. What can I do?",
            data: `<p> Although cancer is common, only 5-10% of it is hereditary, which means someone has inherited a higher risk for cancer from a parent. The risk of cancer can be inherited through a small change (called a mutation) in a gene that can be passed from one generation to the next. Cancer is a hereditary disease, meaning that inherited gene mutations account for about 5 to 10% of all cases. If there has been more than one generation of cancer, it might be considered hereditary. A family history means that one or more of your blood relatives has been diagnosed with breast or ovarian cancer. These relatives may be deceased or still living. It may be parents, siblings, or children of first-degree relatives. Most cancer patients do not have a family history of the disease. It is estimated that about 5% to 10% of cancer cases can be inherited. Myth: If my family has cancer, I will get it too. The fact is, there are times when members of the same family develop cancer due to shared behaviors.</p>
           <p> It is impossible for cancer genes to skip generations. One in two (50%) chances are that you have inherited a gene mutation from your parents. In other words, whether you have it or not. It is impossible for you to pass the mutation on to your children if you do not inherit it. Therefore, some children will carry the faulty gene and be at increased risk of developing cancer, while others will not.</p>`,
            isOpen: false,
        },
        {
            id: 3,
            title: "How can I contact Dr. Sajjan Rajpurohit?",
            data: `Get in touch with the best medical oncologist in Delhi, Dr. Sajjan Rajpurohit, by filling out this contact form or dialing +91-9871280511.`,
            isOpen: false,
        },
        {
            id: 4,
            title: "How can I know if I have cancer?",
            data: `It's very possible to have cancer without knowing it. The symptoms of cancer are many and varied. Generally, it might look like a lump or swelling in your body. Sometimes, cancer can be hard to spot because it can start as a painless area of skin that does not itch or cause a rash.`,
            isOpen: false,
        },
        {
            id: 5,
            title: "How does cancer start?",
            data: `In our cells, DNA acts as a set of instructions that tells them how to behave. When our DNA becomes damaged over time, it can lead to cancer. UV rays and drinking alcohol can increase the risk of receiving this type of cancer.`,
            isOpen: false,
        },
        {
            id: 6,
            title: "What are the different treatments that complement cancer?",
            data: [`<p>Various modalities commonly used in cancer treatment are:</p>
                <ul style="list-style-type:disc;padding-left:28px;">
             <li style="text-align: start; color: rgb(23, 23, 23); font-size: 18px; font-family: Calibri, sans-serif; border: 0px solid;">Hormone Therapy</li>
             <li style="text-align: start; color: rgb(23, 23, 23); font-size: 18px; font-family: Calibri, sans-serif; border: 0px solid;">Radiotherapy</li>
             <li style="text-align: start; color: rgb(23, 23, 23); font-size: 18px; font-family: Calibri, sans-serif; border: 0px solid;">Chemotherapy</li>
             <li style="text-align: start; color: rgb(23, 23, 23); font-size: 18px; font-family: Calibri, sans-serif; border: 0px solid;">Targeted therapy</li>
             <li style="text-align: start; color: rgb(23, 23, 23); font-size: 18px; font-family: Calibri, sans-serif; border: 0px solid;">Immunotherapy</li>
             <li style="text-align: start; color: rgb(23, 23, 23); font-size: 18px; font-family: Calibri, sans-serif; border: 0px solid;">ROBOTIC SURGERY</li>
             <li style="text-align: start; color: rgb(23, 23, 23); font-size: 18px; font-family: Calibri, sans-serif; border: 0px solid;">CAR-T CELL THERAPY</li>
            </ul>
                <p>The choice of treatment depends on the type of cancer, presentation stage, age, patient's general condition, pathology, and molecular reports. All these factors are taken into consideration before making a treatment decision. Many cancers require multi-modality treatments e.g. surgery followed by chemo or radiotherapy, concurrent chemo-radiotherapy, chemo-immunotherapy, etc. Consultations with a surgical oncologist, radiation oncologist, and medical oncologist are required in such scenarios.</p>
                `,
            ],
            isOpen: false,
        },
        {
            id: 7,
            title: "Can cancer spread from one person to another?",
            data: [
                "Many people believe that cancer is a contagious disease, but that is merely a myth. According to doctors, this is an inherited disease that occurs when the genes are abnormally mutated. It is not a contagious disease. Many cancer patients may contract secondary infections from being close to infected persons when undergoing chemotherapy or immunosuppressive treatments. Good hygiene should be followed to ensure their safety.",
            ],
            isOpen: false,
        },
        {
            id: 8,
            title: "Is cancer curable?",
            data: [
                "That depends on the type of cancer and the stage of presentation. When caught early and treated properly, many types of cancer are associated with fairly high cure rates. The chances of survival have improved recently due to advances in technology and treatment modalities, even in advanced stages. With targeted treatments and immunotherapies, many patients with many advanced cancers previously considered untreatable are living longer with a reasonably good quality of life.",
            ],
            isOpen: false,
        },
        {
            id: 9,
            title: "What type of cancer does immunotherapy treat?",
            data: [
                "The best candidates for Immunotherapy are patients with non–small cell lung cancer, which is diagnosed about 80 to 85% of the time. This type of lung cancer usually occurs in former or current smokers, although it can be found in nonsmokers. It is also more common in women and younger patients.",
            ],
            isOpen: false,
        },
        {
            id: 10,
            title: "How much does a biopsy cost?",
            data: ["Typically, the average biopsy test cost in India may range from INR 4000 to INR 5000."],
            isOpen: false,
        },
    ]);

    const toggleAccordion = (accordionId) => {
        setAccordion((prevAccordions) =>
            prevAccordions.map((accordion) =>
                accordion.id === accordionId
                    ? { ...accordion, isOpen: !accordion.isOpen }
                    : { ...accordion, isOpen: false }
            )
        );
    };

    return (
        <div className="lg:mx-10 mx-3">
            <div className="lg:mt-14 mb-10 text-center">
                <h1 className='text-center font-semibold mt-10 text-4xl' style={{ fontFamily: 'Roboto Slab, serif' }}>Frequently Asked Questions About Dr. Sajjan Rajpurohit</h1>
            </div>
            <div className="lg:mx-12 my-5 space-y-4">
                {accordions.map((accordion) => (
                    <Accordion
                        key={accordion.id}
                        title={accordion.title}
                        data={accordion.data}
                        isOpen={accordion.isOpen}
                        toggleAccordion={() => toggleAccordion(accordion.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
