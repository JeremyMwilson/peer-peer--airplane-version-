// src/FAQ.tsx
import React, { useState } from "react";
import "./faq.css";

const FAQ_DATA = [
  {
    question: "Different Types Of Insurance Plans",
    subFAQs: [
      {
        question: "Employer Coverage",
        answer:
          "Provided through Job Benefits. Usually inexpensive or free for employees, & sometimes very expensive to add family members.",
      },
      {
        question: "Underwritten Coverage",
        answer:
          "This is ideal if you're self-employed, work for a small business, or employer coverage is expensive for your family. Generally need to be fairly healthy to apply for these benefits.",
      },
      {
        question: "COBRA Coverage",
        answer:
          "This is an employer plan, but with the total cost paid by you. Usually a good idea to see if you can replace it with an underwritten plan, As COBRA is typically very costly.",
      },
      {
        question: "Medicare/Multi-Plans",
        answer:
          "These are not obligated to pay your bills, and are not insurance with an attractive '0 dollar deductible'. I don't recommend them unless it's absolutely the only thing that's affordable (they're sometimes inexpensive)",
      },
      {
        question: "Short-term Plans",
        answer:
          "These are great if you have a coverage gap between employer plans of one month or less. often marketed somewhat deceptively - you're probably getting calls about these.",
      },
      {
        question: "ACA Plans",
        answer:
          "These are also known as 'Obamacare' or 'Marketplace Plans'. Great for people who qualify for a subsidy or have major pre-existing conditions - otherwise, generally rather expensive. They can be found on on our ACA Insurance Tab",
      },
    ],
  },
  {
    question: "What is a Qualifying Life Event?",
    answer:
      "A change in your situation that can make you eligible for a Special Enrollment Period outside of the yearly open enrollment period. There are 4 types:",
    subFAQs: [
      {
        question: "Loss of existing health coverage",
        answer:
          "Includes aging off of parent through parent’s plan, eligibility for Medicaid, Medicare, or CHIP",
      },
      {
        question: "Change in household size",
        answer:
          "Having a child or adopting a child, Loss of family member, marriage/divorce",
      },
      {
        question: "Change of residence",
        answer: "Moving to a different zip code of county",
      },
      {
        question: "Other events",
        answer: "Becoming a U.S. citizen, leaving incarceration, etc",
      },
    ],
  },
  {
    question: "What is open enrollment?",
    answer:
      "Typically running from November 1 through December 15, it is the time individuals or families can sign up for health coverage, make changes to, or cancel their health insurance",
  },
  {
    question: "What is COBRA?",
    answer:
      "Consolidated Omnibus Budget Reconciliation Act (COBRA) is a law that gives employees the right continue his employer coverage after they leave their job or experience something such as a divorce or loss of spouse",
  },
  {
    question: "Am I eligible for a government subsidy?",
    answer:
      "Government assistance toward health insurance is based on income, household size, and whether or not a spouse in the family is offered employer coverage. If the coverage through the employer costs more than 9.12% to the employee’s household income, they may qualify for government subsidy.",
  },
  {
    question: "What are the differences between HMO and PPO?",
    answer:
      "An HMO (health maintenance organization) medical insurance group that typically has a smaller amount of doctor’s within network, needs a referral to see a specialist, usually lower in cost. A PPO (preferred provider organization) have a larger network of doctors within network, do not need a referral to see a specialist, and can see specialists out of network.",
  },
];

const FaqItem = ({
  question,
  answer,
  subFAQs,
}: {
  question: string;
  answer: string;
  subFAQs?: { question: string; answer: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <h3 onClick={toggleOpen} className="faq-question">
        {question}
      </h3>
      {isOpen && (
        <div className={`faq-answer ${isOpen ? "open" : ""}`}>
          <p>{answer}</p>
          {subFAQs && (
            <div className="sub-faq-list">
              {subFAQs.map((subFaq, index) => (
                <FaqItem
                  key={index}
                  question={subFaq.question}
                  answer={subFaq.answer}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="FAQ">
      <h1>FAQ</h1>
      <div className="faq-list">
        {FAQ_DATA.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer || ""}
            subFAQs={faq.subFAQs}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
