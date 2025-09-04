import Link  from "next/link";
import React from "react";
import { MdSupportAgent } from "react-icons/md";

export default function ContactSupport() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-2 mb-3">
      <p className="text-md md:text-lg text-textheading mb-2.5">Need Help?</p>
      <Link href="#">
      <button className="flex items-center space-x-2 bg-primary text-background md:px-4 px-3 py-2 md:py-3 rounded-md text-xs md:text-sm hover:bg-hoveroverbutton transition">
        <MdSupportAgent className="w-4 md:w-6 md:h-6" />
        <span>Contact Support</span>
      </button>
      </Link>
    </div>
  );
}
