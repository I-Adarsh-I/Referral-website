import { Button } from "@material-tailwind/react";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-900 py-5 px-4 md:px-inherit">
      <div className="container flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-b border-b-gray-500 pb-5">
          <img src="/logo-2.png" alt="logo" className="h-8 md:h-12 mb-3 md:mb-0" />
          <div className="flex flex-col items-center md:items-end">
            <Button
              size="sm"
              className="text-xs md:text-sm md:px-4 md:py-3 font-medium normal-case bg-primaryColor mb-2"
            >
              Schedule 1-on-1 Call Now
            </Button>
            <p className="text-white font-normal text-xs md:text-sm">
              Speak with our Learning Advisor
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between flex-wrap gap-4 pt-3">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-white font-normal text-sm md:text-lg text-center md:text-start">
              Programs
            </p>
            <ul className="list-none">
              {[
                "Data Science & AI",
                "Product Management",
                "Business Analytics",
                "Digital Transformation",
                "Business Management",
                "Project Management",
                "Senior Management",
                "Fintech",
              ].map((program, index) => (
                <li key={index} className="text-white text-sm md:text-base text-center md:text-start">
                  {program}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white flex flex-col gap-2 text-center md:text-start">
            <p className="text-sm md:text-lg">Contact us</p>
            {[
              "Email us (For Data Science Queries): admissions@accredian.com",
              "Email us (For Product Management Queries): pm@accredian.com",
              "Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)",
              "Product Management Admission Helpline: +91 9625811095",
              "Enrolled Student Helpline: +91 7969322507",
              "Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015",
              "Why Accredian",
              "Follow Us",
            ].map((contact, index) => (
              <p key={index} className="text-xs md:text-sm">
                {contact}
              </p>
            ))}
          </div>
          <div className="text-white flex flex-col gap-2 text-center md:text-start">
            <p className="text-sm md:text-lg">Accredian</p>
            <ul className="list-none">
              {[
                "About",
                "Career",
                "Blog",
                "Admission Policy",
                "Referral Policy",
                "Privacy Policy",
                "Terms Of Service",
                "Master FAQs",
              ].map((link, index) => (
                <li key={index} className="text-xs md:text-base">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
