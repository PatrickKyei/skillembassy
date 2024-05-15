import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Faqs = () => {
  const [activeItem, setActiveItem] = useState("");

  const faqData = [
    {
      id: 1,
      question: "What is Skillembassy Product Accelerator?",
      answer:
        "Skillembassy is a 10-week program of hands-on learning. Based on your work styles and interests, you will gain real-world experience working on projects with a team of professionals including Product Designers, Developers, and more.",
    },
    {
      id: 2,
      question: "What will I gain from Skillembassy Product Accelerator?",
      answer:
        "You will gain valuable skills and experience, learn industry best practices, and build a portfolio of real-world projects. Additionally, you will have the opportunity to collaborate with professionals and expand your network in the digital economy.",
    },
    {
      id: 3,
      question: "What is the cost of Skillembassy Product Accelerator?",
      answer:
        "The entire 10-week product accelerator is **GHC 550**. Please contact us for more information!",
    },
    {
      id: 4,
      question: "Can I apply without a college/university degree?",
      answer:
        "Yes, you can apply to Skillembassy Product Accelerator even if you do not have a college or university degree. We value diversity and believe that passion, dedication, and a willingness to learn are more important than formal education.",
    },
    {
      id: 5,
      question: "Will Skillembassy Product Accelerator help me find work?",
      answer:
        "While Skillembassy does not guarantee job placement, the program is designed to equip you with the skills, knowledge, and experience that are highly sought after by employers. We support and empower you to start your own business.",
    },
  ];

  const handleCollapse = (id) => {
    setActiveItem((prevItem) => (prevItem === id ? "" : id));
  };

  return (
    <div className="section pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2
            class="text-3xl font-semibold text-neutral-50 mb-4"
            data-aos="fade-right">
            Frequently Asked Questions
          </h2>
          <p
            className="mt-12 text-lg font-normal text-neutral-50"
            data-aos="fade-right"
            data-aos-duration="1000">
            Not sure how Skillembassy can help you? Wonder why you need tech
            skills and how to leverage them in your career?
          </p>
          <div
            className="flex flex-row sm:flex-row py-4"
            data-aos="fade-right"
            data-aos-duration="1000">
            <a href="https://wa.me/message/CFQ6VVR53WCBN1">
              <button className="flex flex-row px-6 py-3 bg-neutral-50 text-neutral-950 font-bold gap-2 rounded-sm">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "green", fontSize: "1.5em" }} // Adjust color and size as needed
                />
                Talk To A Learning Advisor
              </button>
            </a>
          </div>
        </div>
        <div data-aos="fade-left">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border border-neutral-700 rounded-sm p-4 mb-4">
              <div
                className="cursor-pointer"
                onClick={() => handleCollapse(faq.id)}>
                <div className="flex items-center mb-2">
                  <h5 className="mr-2 text-lg font-normal text-neutral-50">
                    {faq.question}
                  </h5>
                  <FontAwesomeIcon
                    icon={activeItem === faq.id ? faAngleUp : faAngleDown}
                    className={
                      activeItem === faq.id
                        ? "text-neutral-50"
                        : "text-neutral-400"
                    }
                  />
                </div>
              </div>
              {activeItem === faq.id && (
                <div className="mt-4 text-md font-normal text-neutral-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
