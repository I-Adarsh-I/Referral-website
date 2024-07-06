import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="w-full flex justify-center h-max px-4 md:px-inherit py-5">
        <div className="container flex flex-col items-center gap-5">
          <div className="w-full flex flex-col items-center gap-2 md:gap-5">
            <h3 className="text-xl md:text-4xl font-medium">
              Frequently asked{" "}
              <span className="text-primaryColor">questions</span>
            </h3>
            <p className="text-xs md:text-base font-normal md:font-medium w-full md:w-1/2 text-wrap">
              Quick answers to questions you may have about Untitled Ul and
              billing. Can't find what you're looking for? Check out our full
              documentation.
            </p>
              <Button
                variant="filled"
                size="md"
                className="bg-primaryColor text-xs md:text-lg normal-case w-max px-inherit py-inherit md:px-3 md:py-2"
              >
                Get in touch
              </Button>
          </div>
          <div>
            <Accordion
              open={open === 1}
              icon={<Icon id={1} open={open} />}
              className={`hover:bg-gray-100 px-2 rounded-lg mb-3 ${
                open === 1 ? "bg-gray-100" : ""
              }`}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-0 text-md md:text-xl"
              >
                What do we do?
              </AccordionHeader>
              <AccordionBody className="text-start">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={<Icon id={2} open={open} />}
              className={`hover:bg-gray-100 px-2 rounded-lg mb-3 ${
                open === 2 ? "bg-gray-100" : ""
              }`}
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-0 text-md md:text-xl"
              >
                Our mission and focus?
              </AccordionHeader>
              <AccordionBody className="text-start">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={<Icon id={3} open={open} />}
              className={`hover:bg-gray-100 px-2 rounded-lg ${
                open === 3 ? "bg-gray-100" : ""
              }`}
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="border-0 text-md md:text-xl"
              >
                What are program pre-requisites?
              </AccordionHeader>
              <AccordionBody className="text-start">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
