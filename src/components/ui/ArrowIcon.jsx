import { twMerge } from "tailwind-merge";

export const ArrowIcon = ({ className }) => {
  return (
    <svg
      className={twMerge("h-4 w-4 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M3 12h17M13 5l7 7-7 7" />
    </svg>
  );
};
