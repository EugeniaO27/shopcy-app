import React from "react";

interface BadgeProps {
  content: number;
  children: React.ReactNode;
}

const Badge = ({content,  children }: BadgeProps) => {
  return (
    <div className="relative">
      <div
        className="w-[22px] h-[22px] rounded-full flex justify-center items-center
         absolute top-[-12px] right-[-8px] bg-accent-400">
        {content}
      </div>
      {children}
    </div>
  );
};

export default Badge;
