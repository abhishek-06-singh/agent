import React from "react";
import {ChevronLeft} from "lucide-react";
import { Share } from "lucide-react";
import { Heart } from "lucide-react";

export default function DetailTopBar() {
  return (
    <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-1 border border-bordercolor rounded-md px-2 py-1">
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5  text-textnormal  cursor-pointer" />
                <span className="text-textnormal text-xs md:text-sm text-center lg:text-base">Back</span>
                </div>

                <div className="flex items-center space-x-4">
                    <Share className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-textnormal  cursor-pointer" />
                    <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-textnormal  cursor-pointer hover:fill-red-500 hover:stroke-none" />

                </div>
            </div>
    </div>
  );
}