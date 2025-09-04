export default function ProgressbarModal({ progress,no,desc,total }) {

  return (
    <div className="flex flex-col gap-2 mb-3" >
    <div className="w-full flex flex-row items-center justify-between">
        <div>
            <p className="text-primary text-xs">Step {no} of {total}</p>
        </div>
        <div>
        <p className="text-secondary-alt text-xs ">{desc}</p>
        </div>
    </div>
    <div className="w-full bg-progressbarbackground rounded-full h-1.5  dark:bg-primary">

      <div
        className="bg-secondary h-1.5 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    </div>
  );
}