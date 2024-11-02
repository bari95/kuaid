

"use client";

import React, { useEffect, useState } from "react";
import { Inter } from 'next/font/google';
import { FaQuoteRight } from "react-icons/fa";

// Load Inter font with weights for improved typography
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    profession?: string;
    image: string; // New image property
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 w-screen overflow-hidden cursor-pointer
      [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
         <div
         key={idx}
         className="testimonial-item p-4 my-5 mx-2 md:mx-4 lg:mx-6 max-w-sm w-full relative border rounded-lg shadow-lg bg-white"
         >
         <FaQuoteRight className="text-gray-200 absolute top-0 right-0 mt-3 mr-4 text-3xl" />
         <div className="flex items-end mb-4">
             <img
                 className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-primary"
                 src={item.image}
                 alt={item.name}
             />
             <div className="ml-4">
                 <h5 className="text-lg font-semibold mb-1 text-gray-800 font-poppins">{item.name}</h5>
                 <p className="text-gray-500 font-roboto">{item.profession}</p>
             </div>
         </div>
         <p className="text-gray-700 mb-0 font-roboto">{item.quote}</p>
         </div>
        ))}
      </ul>
    </div>
  );
};


