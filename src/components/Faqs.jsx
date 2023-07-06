import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Faqs = () => {
  const [activeItem, setActiveItem] = useState('');

  const faqData = [
    {
      id: 1,
      question: 'What is skill embassy product accelerator?',
      answer:
        'Skill embassy is an 10-week program of hands-on learning. Based on your workstyles and interests, you...',
    },
    {
      id: 2,
      question: 'What will I gain from skill embassy product accelerator?',
      answer:
        'You will be able to work as a real product team with a Product Designer and Developer...',
    },
    {
      id: 3,
      question: 'What is the cost of skill embassy product accelerator?',
      answer:
        'The entire 10-week product accelerator is 850 Ghana Cedis...',
    },
    {
      id: 4,
      question: 'Can I apply without a college/university degree?',
      answer:
        'Of course! As long as you\'re 18 years old, you can apply.',
    },
    {
      id: 5,
      question: 'Will Skill Embassy Product Accelerator help me find work?',
      answer:
        'Finally, don\'t believe anyone who claims that completing a course, program, or bootcamp...',
    },
  ];

  const handleCollapse = (id) => {
    setActiveItem((prevItem) => (prevItem === id ? '' : id));
  };

  return (
    <div className="section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2>Frequently Asked Questions?</h2>
          <p className="mt-20 text_highlight">
            Not sure how Skill Embassy can help you? Wonder why you need the tech Skills and 
            leverage your ways into tech.
          </p>
          <button className="mt-20 btn btn-primary">
            Talk to a Learning Advisor
          </button>
        </div>
        <div>
          {faqData.map((faq) => (
            <div key={faq.id}>
              <div
                className="cursor-pointer"
                onClick={() => handleCollapse(faq.id)}
              >
                <div className="flex items-center mb-2">
                  <h5 className="mr-2">{faq.question}</h5>
                  <FontAwesomeIcon
                    icon={activeItem === faq.id ? faAngleUp : faAngleDown}
                  />
                </div>
                {activeItem === faq.id && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
