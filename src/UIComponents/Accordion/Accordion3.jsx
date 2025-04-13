import React from "react";
import { useState } from "react";

function Accordion3() {
  return (
    <div className="w-100 px-4 m-5 md:w-3xl sm:w-2xl">
      <AccordionItem
        header="How long we deliver your first blog post?"
        text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your 
                  content marketing strategy that we do before writing your first blog post, Ipsum available ."
      />
      <AccordionItem
        header="How long we deliver your first blog post?"
        text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your
                  monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
      />
      <AccordionItem
        header="How long we deliver your first blog post?"
        text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your
                  monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
      />
    </div>
  );
}

export default Accordion3;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-600 dark:bg-gray-800 rounded-sm">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div
          className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/10 text-red-400
            dark:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 h-6 text-amber-700"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mb-2 text-gray-500 dark:text-gray-400">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="text-gray-500 dark:text-gray-400 hover:underline ">
          {text}
        </p>
      </div>
    </div>
  );
};
