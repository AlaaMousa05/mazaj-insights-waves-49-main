import React from "react";

interface MoodBubbleProps {
  color: string;
  label: string;
  percent: string;
  delay?: string;
}

const MoodBubble: React.FC<MoodBubbleProps> = ({
  color,
  label,
  percent,
  delay,
}) => (
  <div
    className="transition-all duration-500 hover:scale-105"
    style={delay ? { animationDelay: delay } : {}}
  >
    <div className="flex flex-col items-center gap-1">
      <div
        className={`relative flex items-center justify-center w-20 h-20 ${color} bg-opacity-20 rounded-2xl shadow-md border-2 border-white/10`}
      >
        <span className="text-2xl font-arabic font-bold text-white drop-shadow">
          {label}
        </span>
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-navy px-2 py-0.5 rounded-full text-xs font-arabic text-slate-200 border border-white/10 shadow">
          {percent}
        </span>
      </div>
    </div>
  </div>
);

export default MoodBubble;
