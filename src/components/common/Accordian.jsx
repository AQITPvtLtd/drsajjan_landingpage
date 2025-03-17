import { Noto_Sans } from 'next/font/google';


const notoSans = Noto_Sans({
    subsets: ['latin'], // You can add more subsets if needed
});

export default function Accordion(props) {
    return (
        <div className="border rounded-2xl mb-2 shadow-md overflow-hidden transition-all duration-500">
            <button
                className="w-full p-4 text-left bg-gray-100 dark:bg-gray-800 dark:text-white 
                            hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 flex justify-between items-center"
                onClick={props.toggleAccordion}
            >
                <span className="font-medium text-gray-800 dark:text-white">{props.title}</span>
                <span
                    className={`transform ${props.isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
                >
                    &#9660;
                </span>
            </button>
            <div
                className={` overflow-hidden ${props.isOpen ? "max-h-[500px] p-4" : "max-h-0 p-0"
                    }`}
            >
                <div className={`bg-white rounded-b-2xl text-gray-700 ${notoSans.className}`} dangerouslySetInnerHTML={{ __html: props.data }}></div>
            </div>
        </div>
    );
}