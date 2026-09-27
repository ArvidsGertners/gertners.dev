import { Link } from "react-router-dom";
import { ArrowIcon } from "../ui/ArrowIcon";

export const DrawerItem = ({ to, index, onClick, children }) => {
  const number = String(index).padStart(2, "0");

  return (
    <Link
      to={to}
      onClick={onClick}
      className="group flex w-full items-center gap-5 border-b-3 border-ink py-6 text-ink
                 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      <span className="font-mono text-meta text-ink/60" aria-hidden="true">
        {number}
      </span>

      <span className="font-display text-display-l">{children}</span>

      <ArrowIcon
        className="ml-auto h-6 w-6 transition-transform duration-200
                   group-hover:translate-x-1 motion-reduce:transition-none"
      />
    </Link>
  );
};
