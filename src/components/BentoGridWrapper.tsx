

import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

// Mock data array for BentoGridWrapper
// Mock data array for BentoGridWrapper in a freight business context
const mockData = [
    {
      id: 1,
      title: "Air Freight Services",
      description: "Fast and reliable air freight solutions to get your goods where they need to go, on time.",
      img: "/img/service-1.jpg",
      imgClassName: "rounded-lg",
    },
    {
      id: 2,
      title: "Ocean Freight Solutions",
      description: "Cost-effective and efficient ocean freight options for large-volume shipments worldwide.",
      img: "/images/ocean-freight.jpg",
      imgClassName: "rounded-lg",
      spareImg: "/img/carousel-1.jpg",
    },
    {
      id: 3,
      title: "Warehousing & Distribution",
      description: "Secure and flexible storage solutions for short-term or long-term needs with comprehensive distribution services.",
      img: "/img/service-3.jpg",
      imgClassName: "rounded-lg",
    },
    {
      id: 6,
      title: "Customs Brokerage",
      description: "Expert customs brokerage to navigate complex regulations and ensure a smooth import/export process.",
      img: "/images/customs.jpg",
      imgClassName: "rounded-lg",
      spareImg: "/img/service-2.jpg",
    },
  ];
  

const BentoGridWrapper = () => {
  return (
    <BentoGrid>
      {mockData.map((item) => (
        <BentoGridItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
          imgClassName={item.imgClassName}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
  );
};

export default BentoGridWrapper;
