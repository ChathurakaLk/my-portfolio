"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      {/* <h1 className="text-center text-3xl lg:text-5xl font-bold tracking-wide text-blue-100 w-full mx-auto mb-10">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1> */}

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>              
            <div className="flex md:max-w-60 max-w-32 gap-2">                
              {company.img && (
                  <img
                    src={company.img}
                    alt={company.name}
                    className="md:w-10 w-5"
                  />
                )}
                <img
                  src={company.nameImg}
                  alt={company.name}
                  className="md:w-32 w-24"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;