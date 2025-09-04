import React from "react";
import { cn } from "../../lib/utils";
import Image from "next/image";
import { Marquee } from "./TrustedMarquee";
import freshbooks from "../../images/trusted/freshbooks.svg";
import microsoft from "../../images/trusted/microsoft.svg";
import paypal from "../../images/trusted/paypal.svg";
import shopify from "../../images/trusted/shopify.svg";
import harvest from "../../images/trusted/harvest.svg";
import gmail from "../../images/trusted/gmail.svg";
import dropbox from "../../images/trusted/dropbox.svg";
import intercom from "../../images/trusted/intercom.svg";
import slack from "../../images/trusted/slack.svg";
import calendly from "../../images/trusted/calendly.svg";
import square from "../../images/trusted/square.svg";

const logos = [
  freshbooks,
  microsoft,
  paypal,
  shopify,
  harvest,
  gmail,
  dropbox,
  intercom,
  slack,
  calendly,
  square
];

const firstRow = logos.slice(0,6);
const secondRow = logos.slice(6,11 );

function LogoCard({ img, index, totalColumns, offset = 0 }) {
  const columnPosition = (index + offset) % totalColumns;
  const isColored = columnPosition % 2 === 0;

  return (
    <figure
      className={cn(
        "flex items-center justify-center border border-secondary  ",
        isColored ? "bg-orange-100" : "bg-cardbg"
      )}
    style={{
        flex: "0 0 200px", // exact width
        height: "100px",
      }}
    >
      <Image
        src={img}
        alt="Trusted company logo"
        width={120}
        height={48}
        className="w-auto h-auto "
      />
    </figure>
  );
}

export default function MarqueeData() {

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {/* First row */}
      <Marquee pauseOnHover className="[--duration:20s]  gap-0 m-0 p-0">
        {firstRow.map((img, index) => (
          <LogoCard key={index} img={img} index={index} 
       totalColumns={firstRow.length} 
      offset={0} />
        ))}
      </Marquee>

      {/* Second row */}
      <Marquee reverse pauseOnHover className="[--duration:20s] flex gap-0 m-0 p-0 -mt-[1px]">
        {secondRow.map((img, index) => (
          <LogoCard key={index} img={img} index={index}   totalColumns={firstRow.length} 
      offset={0} />
        ))}
      </Marquee>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
    </div>
  );
}
