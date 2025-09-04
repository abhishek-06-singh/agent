import { Play } from "lucide-react";

export default function FilledPlayCircle() {
  return (
     <div className="flex justify-between items-center mb-4">

    <div className="flex  items-center gap-2 cursor-pointer">
      <div className="w-6 h-6 rounded-full bg-black-500 flex items-center justify-center">
        <Play className="w-3 h-3 text-white fill-current ml-0.5" /> 
      </div>
      <span className="text-sm font-medium text-primary">Getting Started</span>
   </div>
       
      <button className="border border-bordercolor  text-sm text-textnormal px-3 py-1 rounded-md hover:bg-shadow transition">
        Skip Tutorial
      </button>
    
    </div>
  );
}
