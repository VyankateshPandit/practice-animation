import React, { useState } from "react";
import "./HomepageFAQSection.css";
// import { ReactComponent as QuestionIcon } from "../about/assets/question-icon.svg";
import FAQArrow from "../../../assets/FAQArrow.svg";
import QuestionIcon from "../../../assets/question-icon.svg";


const faqs = [
  {
    question: "What is the format of the IELTS exam?",
    answer:
      "The IELTS test has four sections: Listening (30 mins), Reading (60 mins), Writing (60 mins), and Speaking (11–14 mins). It can be taken in Academic or General Training versions.",
  },
  {
    question: "How is the IELTS exam scored?",
    answer:
      "The IELTS test has four sections: Listening (30 mins), Reading (60 mins), Writing (60 mins), and Speaking (11–14 mins). It can be taken in Academic or General Training versions.",
  },
  {
    question: "How often can I take the IELTS exam?",
    answer:
      "The IELTS test has four sections: Listening (30 mins), Reading (60 mins), Writing (60 mins), and Speaking (11–14 mins). It can be taken in Academic or General Training versions.",
  },
  {
    question: "Is IELTS accepted worldwide?",
    answer:
      "The IELTS test has four sections: Listening (30 mins), Reading (60 mins), Writing (60 mins), and Speaking (11–14 mins). It can be taken in Academic or General Training versions.",
  },
  {
    question: "Can I retake just one section of the IELTS?",
    answer:
      "The IELTS test has four sections: Listening (30 mins), Reading (60 mins), Writing (60 mins), and Speaking (11–14 mins). It can be taken in Academic or General Training versions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Got Questions? We’ve Got Answers.</h2>
      <p className="faq-subheading">
        Everything you need to know about IELTS, coaching, visa process, and
        more — all in one place.
      </p>

      <div className="faq-box">
        <div className="faq-title-row">
          <h3 className="faq-box-title">Common IELTS Queries</h3>
          {/* <QuestionIcon className="faq-icon" /> */}
          <img src={QuestionIcon} className="faq-icon" alt="FAQ icon" />

        </div>
        <p className="faq-box-subtext">
          Everything you need to know about IELTS, coaching, visa process, and
          more — all in one place.
        </p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                  <img src={FAQArrow} alt="img" />
                </span>
              </button>
              {openIndex === index && item.answer && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <button className="see-more-button">See More</button>
    </section>
  );
};

export default FAQSection;
