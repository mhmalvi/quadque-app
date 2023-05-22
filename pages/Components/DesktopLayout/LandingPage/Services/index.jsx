import React from "react";
import Services from "./Services";
// import Services from "./AllService";

const ServicesContainer = ({ servicesData }) => {
  return (
    <div id="services" className="section h-full">
      <div className="my-16 pl-16 pr-10 text-white">
        <Services servicesData={servicesData} />
        <a href="#start-project" className="absolute top-20 right-10">
          <span className="relative  flex justify-center items-center h-4 w-4 cursor-pointer">
            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ServicesContainer;
