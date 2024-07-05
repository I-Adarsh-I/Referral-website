import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-base px-3 py-1 font-gray-700 border border-primaryColor rounded-full bg-blue-50 flex gap-2 items-center justify-center">
            <span className="text-primaryColor">•</span>
          <p className="">
            Navigate your ideal career path with tailored expert advice{" "}
          </p>
          <a href="" className="text-primaryColor ms-2">
            Contact Expert
          </a>
        </div>
        <h1 className="text-6xl font-bold">
          Unlock dream <span className="text-primaryColor">career</span> with
          your dream universities
        </h1>
        <p className="text-med text-blue-gray-700">
          Refer friends and earn amazing rewards while helping them achieve
          their dreams.
        </p>
        <div className="buttons flex items-center justify-center gap-3">
          <Button variant="text" size="md" className="normal-case text-md">
            Know how it works?
          </Button>
          <Button size="md" className="bg-primaryColor normal-case text-md">
            Refer & earn
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
