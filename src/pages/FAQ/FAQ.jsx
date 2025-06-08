import React, { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaChevronDown } from 'react-icons/fa';
import FAQLASTIMAGE from '../../../assets/FAQLASTIMAGE.png';
import Navbar from '../../components/Navbar';

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="pb-4 cursor-pointer">
    <div className="flex justify-between font-bold text-lg text-gray-800" onClick={onClick}>
      {question}
      <FaChevronDown className={`text-sm text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </div>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'}`}>
      <div className="text-gray-700 text-base leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
);

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);
  const [openIndex3, setOpenIndex3] = useState(null);

  const faqs1 = [
    { question: 'What is the format of the IELTS exam?', answer: 'The IELTS test has four sections: Listening (30 mins), Reading (60 mins), Writing (60 mins), and Speaking (11–14 mins). It can be taken in Academic or General Training versions.' },
    { question: 'How is the IELTS exam scored?', answer: 'Scores are based on band scale from 1–9 for each section, averaged for an overall band score.' },
    { question: 'How often can I take the IELTS exam?', answer: 'You can take it as many times as you want. There are multiple test dates each month.' },
    { question: 'Is IELTS accepted worldwide?', answer: 'Yes, over 11,000 organizations in 140+ countries accept IELTS.' },
    { question: 'Can I retake just one section of the IELTS?', answer: 'Yes, IELTS One Skill Retake is available in certain locations.' },
  ];

  const faqs2 = [
    { question: 'What’s the difference between online and offline IELTS coaching?', answer: 'Online coaching offers flexibility to learn from home, while offline coaching gives you the benefit of classroom interaction and live speaking practice. EEC provides both formats with the same expert guidance.' },
    { question: 'Are the same trainers available for both online and offline batches?', answer: 'Yes, our trainers handle both formats to ensure consistent quality.' },
    { question: 'How flexible are the class timings?', answer: 'We offer morning, afternoon, and evening batches to suit your schedule.' },
    { question: 'Can I switch batches if my schedule changes?', answer: 'Yes, we allow batch switching based on availability and timing compatibility.' },
    { question: 'How long is the IELTS course duration?', answer: 'Typically 4–6 weeks, depending on your starting level and goals.' },
  ];

  const faqs3 = [
    { question: 'Which countries do you support for study abroad and visa processing?', answer: 'We assist with IELTS prep and admission for Canada, UK, USA, Australia, and New Zealand – covering everything from applications to visa filing.' },
    { question: 'What documents do I need for a student visa?', answer: 'You’ll need your passport, academic transcripts, IELTS scores, SOP, LORs, and financial proof.' },
    { question: 'How soon should I start the application process?', answer: 'At least 6–12 months in advance of your intended intake.' },
    { question: 'Does EEC help with SOP and interview prep?', answer: 'Yes, we provide 1:1 assistance for SOP writing, editing, and visa interview coaching.' },
    { question: 'Can I apply to multiple universities at once?', answer: 'Absolutely! We recommend applying to 3–5 universities for better chances.' },
  ];

  return (
    <div className="p-4 font-inter max-w-xl mx-auto pt-[75px]">
      <Navbar/>
      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Type your question here....."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 pr-8 pl-2 rounded-lg border border-gray-300 text-base"
        />
        <FaSearch className="absolute right-2 top-[50%] transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>

      {/* Hero Title */}
      <h1 className="text-center text-gray-800 text-xl font-bold leading-[30px] mt-8">Got Questions? We’ve Got Answers.</h1>
      <p className="text-center text-gray-600 text-base font-normal leading-6 mt-2">
        Everything you need to know about IELTS, coaching, visa process, and more — all in one place.
      </p>

      {/* Cards */}
      {[{
        title: 'Common IELTS Queries',
        faqs: faqs1
      }, {
        title: 'Coaching & Course FAQs',
        faqs: faqs2
      }, {
        title: 'Visa & Admission FAQs',
        faqs: faqs3
      }].map((section, i) => (
        <div key={i} className="border border-gray-300 rounded-lg p-4 mt-4 bg-white">
          <div className="flex items-center gap-2">
            <h2 className="text-[#D62D31] text-xl font-bold leading-[30px]">{section.title}</h2>
            <FaQuestionCircle className="text-white bg-red-600 rounded-full p-0.5 text-sm ml-16" />
          </div>
          <p className="text-gray-500 text-sm font-normal leading-5 h-11 mt-2">
            Everything you need to know about IELTS, coaching, visa process, and more — all in one place.
          </p>
          <div className="mt-8">
            {section.faqs.map((faq, index) => (
              <AccordionItem
                key={`${section.title}-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={i === 0 ? openIndex1 === index : i === 1 ? openIndex2 === index : openIndex3 === index}
                onClick={() => {
                  if (i === 0) setOpenIndex1(openIndex1 === index ? null : index);
                  if (i === 1) setOpenIndex2(openIndex2 === index ? null : index);
                  if (i === 2) setOpenIndex3(openIndex3 === index ? null : index);
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Call to Action Section */}
      <div className='bg-[#FAFAFA] w-full'>
        <div className="text-center mt-10 rounded-[16px] border-1 border-[#F0F0F0] bg-[#FEFEFE] p-4">
          <img src={FAQLASTIMAGE} className="w-1/3 inline-block" alt="Call to action" />
          <h2 className="text-gray-800 text-xl font-bold leading-[30px] mt-4"><strong>Didn’t find what you were looking for?</strong></h2>
          <p className="text-gray-500 text-base font-normal leading-6 mt-1">Our expert counselors are ready to help you 1:1.</p>
          <button className="w-full bg-gray-900 py-2 px-4 rounded-md text-white text-sm font-bold leading-5 mt-4 hover:bg-gray-700">
            Book A Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
