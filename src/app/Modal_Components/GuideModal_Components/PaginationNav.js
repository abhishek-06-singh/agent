import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PaginationNav() {
  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto mt-6">
      {/* Back Button */}
      <Link href='#'>
      <button className="flex items-center gap-1 border border-bordercolor text-textnormal px-4 py-2 rounded-lg hover:bg-subcardbg">
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>
      </Link>

      {/* Dots */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        <span className="w-2 h-2 bg-bordercolor rounded-full"></span>
        <span className="w-2 h-2 bg-bordercolor rounded-full"></span>
        <span className="w-2 h-2 bg-bordercolor rounded-full"></span>
      </div>

      {/* Next Button */}
       <Link href='#'>
      <button className="flex items-center gap-1 bg-buttonbg text-background px-4 py-2 rounded-lg">
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
      </Link>
    </div>
  );
}
