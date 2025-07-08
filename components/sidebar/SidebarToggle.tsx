import React from "react";

type SidebarToggleProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function SidebarToggle({ collapsed, onToggle }: SidebarToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
      className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 bg-[#ec4d58] hover:bg-[#d63f4a] text-[#fafafa] border border-[#ec4d58] hover:border-[#d63f4a] rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl hover:scale-110"
      style={{outline: 'none'}}
    >
      <svg
        className={`w-4 h-4 transition-all duration-500 ease-in-out ${collapsed ? 'rotate-0' : 'rotate-180'}`}
        fill="none"
        stroke="#fafafa"
        viewBox="0 0 24 24"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}