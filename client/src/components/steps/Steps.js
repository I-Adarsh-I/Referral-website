import { Button } from "@material-tailwind/react";
import React from "react";

const Steps = () => {
  return (
    <>
      <div className="w-full h-max md:h-screen px-3 md:p-0 flex items-center justify-center bg-blue-50" id="howRefer">
        <div className="container flex flex-col justify-center items-center py-5 gap-5">
          <h3 className="text-xl md:text-4xl font-medium">
            How do I <span className="text-primaryColor">Refer</span>?
          </h3>
          <img
            src="/refer-how.png"
            alt="How to refer"
            className="w-full object-cover object-center"
          />
          <Button size='sm' className="normal-case text-sm md:text-lg w-max bg-primaryColor px-inherit py-inherit md:px-6 md:py-3">Refer now</Button>
        </div>
      </div>
    </>
  );
};

export default Steps;
