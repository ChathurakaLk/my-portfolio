"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <h1 className="text-center text-3xl lg:text-5xl font-bold tracking-wide text-blue-100 w-full mx-auto mb-10">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
         />

    </section>
  );
};

export default Clients;