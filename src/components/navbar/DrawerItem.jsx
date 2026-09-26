import React from "react";
import { NavLink } from "react-router-dom";

export const DrawerItem = ({ to, index, children }) => {
  const number = String(index).padStart(2, "0");

  return (
    <NavLink
      to={to}
      className="group flex w-full items-center gap-5 border-b-3 border-ink py-6 text-ink
                 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      <span className="font-mono text-meta text-ink/60" aria-hidden="true">
        {number}
      </span>

      <span className="font-display text-display-l">{children}</span>

      <svg
        className="ml-auto h-6 w-6 shrink-0 transition-transform duration-200
                   group-hover:translate-x-1 motion-reduce:transition-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        aria-hidden="true"
      >
        <path d="M3 12h17M13 5l7 7-7 7" />
      </svg>
    </NavLink>
  );
};
