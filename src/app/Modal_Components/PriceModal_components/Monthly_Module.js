import React from "react";
import PriceCard_Module from "./PriceCard_Module";

export default function Monthly_Module({showModal, selectedCard, setSelectedCard}) {


 const cards = [
    {
      title: "For Individual Agents",
      price: "20",
      period: "month",
      description: "Get organized and set up simple sales processes quickly",
      buttontext: "Get Started",
      features: [
        "1 user only",
        "Access to all features",
        "Unlimited property listings",
        "Limited external collaborators (2 at a time)",
      ],
    },
    {
      title: "For Agencies",
      price: "39",
      period: "month",
      description: "Optimize performance with more customizations and reporting",
      buttontext: "Get Started",
      features: [
        "Up to 10 users",
        "Access to all features",
        "Limited property listings (5 per user)",
        "Limited external collaborators (2 per user)",
        "Additional cost per extra user",
      ],
    },
    {
      title: "Enterprise Package",
      price: "Custom",
      period: "",
      buttontext: "Contact Us",
      description: "Ideal for companies with multiple offices or more than 10 agents",
      features: [
        "Number of users & listings customized",
        "Collaborators & limits decided after discussion",
        "Dedicated support",
        "Advanced security features",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row  justify-center items-center gap-4">

        {cards.map((card, idx) => (
          <PriceCard_Module 
            key={idx}
            showModal={showModal}
            title={card.title}
            price={card.price}
            period={card.period}
            description={card.description}
            buttontext={card.buttontext}
            features={card.features}
            isSelected={selectedCard === idx}
            onSelect={() => setSelectedCard(idx)}
          />
        ))}
      </div>
    </div>
  );
}
