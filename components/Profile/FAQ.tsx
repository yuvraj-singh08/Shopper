import React, { useState } from "react";

interface FAQProps {
    faqs: { question: string; answer: string }[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="faq-container">
            <div className="text-xl group-heading ">FAQs</div>
            <hr />
            <div className="mt-4">
            {faqs.map((faq, index) => (
                <div key={index}>
                    <div
                        className={`cursor-pointer font-semibold text-lg text-gray-500 ${activeIndex === index ? 'font-semibold text-gray-700 text-lg' : ''}`}
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        {faq.question}
                    </div>
                    {activeIndex === index && (
                        <div className="mt-2 mb-2 font-normal text-base">{faq.answer}</div>
                    )}
                </div>
            ))}
            </div>
        </div>
    );
};

const faqs = [
    {
        question: "⭐ What happens when I update my email address (or mobile number)?",
        answer: "- Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number)."
    },
    {
        question: "⭐ When will my G-Shopper account be updated with the new email address (or mobile number)?",
        answer: "- It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes."
    },
    {
        question: "⭐ What happens when I update my email address (or mobile number)?",
        answer: "- Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number)."
    },
];

export { FAQ, faqs };
