"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a wide range of construction, renovation, and project management services tailored to client needs.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can request a quote easily through our website’s contact form or by calling our support team.",
  },
  {
    question: "Do you handle residential and commercial projects?",
    answer:
      "Yes, we handle both residential and commercial projects, regardless of their size or complexity.",
  },
  {
    question: "What is the typical project duration?",
    answer:
      "Project timelines vary depending on scope, but we prioritize efficiency and high-quality results.",
  },
  {
    question: "Do you operate nationwide?",
    answer:
      "We currently serve major cities and are actively expanding to reach more regions soon.",
  },
  {
    question: "Do you provide maintenance after completion?",
    answer:
      "Yes, post-construction maintenance and support are included to ensure your satisfaction.",
  },
  {
    question: "Can I visit a current project?",
    answer:
      "Of course! You can schedule a guided visit to one of our active project sites.",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our experts bring over a decade of combined experience in engineering and construction fields.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, credit cards, and checks for your convenience.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, your first consultation is completely free to help you plan effectively.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center py-16 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-[960px]">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-red-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-5 py-4 text-left text-lg font-semibold text-red-600 focus:outline-none"
              >
                {faq.question}
                <FaChevronDown
                  className={`w-5 h-5 text-red-500 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-4 text-gray-700 text-base bg-red-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
